const User = require("../models/User");
const { internalErrorRes, sendConfirmationCode } = require("../exports/helpers");
const bcrypt = require("bcryptjs");
const emailRegEx = require("../util/emailRegEx");
const crypto = require("crypto");

exports.getLogin = (req, res, next) => res.render("auth/login");

exports.getSignup = (req, res, next) => res.render("auth/signup");

exports.getFindUser = (req, res, next) => {
  res.render("auth/forgotPassword", { findUser: true })
}

exports.getConfirmCode = (req, res, next) => {
  if (!req.session.userRecovery) return res.redirect("back");
  res.render("auth/forgotPassword", { confirmCode: true })
}

exports.getResetPassword = (req, res, next) => {
  if (!req.session.userRecovery) return res.redirect("back");
  res.render("auth/forgotPassword", { resetPass: true });
}

exports.getLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) console.log(`Session destroy error: ${err}`);
    else res.redirect("/");
  });
};

exports.postFindUser = async (req, res, next) => {
  try {
    if (!req.body.username) return res.redirect("back");

    const user = await User.findOne({
      where: { username: req.body.username.toLowerCase() }
    });

    if (!user) {
      req.flash("msg", "No existe una cuenta con ese usuario");
      return res.redirect("back");
    }

    const confirmCode = crypto.randomBytes(7).toString('hex');

    req.session.confirmCode = confirmCode;
    req.session.userRecovery = user;

    sendConfirmationCode(confirmCode, user.email);

    req.flash("msg", "Recibiste el código en tu correo");
    res.redirect("/forgot-password/confirm-code");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
}

exports.postConfirmCode = (req, res, next) => {
  if (!req.body.code) return res.redirect("back")

  if (req.session.confirmCode !== req.body.code) {
    req.flash("msg", "Código ingresado inválido");
    return res.redirect("back");
  }

  delete req.session.confirmCode;

  res.redirect("/forgot-password/reset-password")
}

exports.postResetPassword = async (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;

    if (!password || !confirmPassword) {
      return res.redirect("/forgot-password/reset-password")
    }

    if (password !== confirmPassword) {
      req.flash("msg", "Las contraseñas son diferentes");
      return res.redirect("back");
    }

    const user = await User.findByPk(req.session.userRecovery.id);
    const securedPassword = await bcrypt.hash(password, 12);
    await user.update({ password: securedPassword });

    req.flash("msg", "Tu contraseña fue cambiada con exito");
    delete req.session.userRecovery;
    res.redirect("/");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
}

exports.postLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) return res.redirect("/");

    const user = await User.findOne({
      where: { username: username.toLowerCase() }
    });

    if (!user) {
      req.flash("msg", "Nombre de usuario invalido");
      return res.redirect("/");
    }

    const isValidPass = await bcrypt.compare(password, user.password);

    if (!isValidPass) {
      req.flash("msg", "Contraseña incorrecta");
      return res.redirect("/");
    }

    req.session.isAuthenticated = true;
    req.session.user = user;

    req.session.save((err) => {
      if (err) console.log(`session save error: ${err}`);
      req.flash("msg", `Bienvenido ${user.username}`);
      return res.redirect("/books");
    });
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
}

exports.postSignup = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.redirect("/sign-up");
    }

    if (!emailRegEx.test(email)) {
      req.flash("msg", "Correo electrónico inválido");
      return res.redirect("/sign-up");
    }

    if (password.length < 6) {
      req.flash("msg", "La contraseña debe tener mas de 5 caracteres");
      return res.redirect("/sign-up");
    }

    if (password !== confirmPassword) {
      req.flash("msg", "Las contraseñas son diferentes");
      return res.redirect("/sign-up");
    }

    const objUser = await User.findOne({
      where: { username: username.toLowerCase() }
    });

    if (objUser) {
      req.flash("msg", "El nombre de usuario dado ya existe");
      return res.redirect("/sign-up");
    }

    const securedPassword = await bcrypt.hash(password, 12);

    await User.create({
      id: crypto.randomUUID(),
      username: username.toLowerCase(),
      email,
      password: securedPassword
    });

    req.flash("msg", "Cuenta creada con exito");
    res.redirect("/");
  } catch (error) {
    console.log(`\nError: ${error}\n`);
    internalErrorRes(res);
  }
}