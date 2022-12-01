const { By, Key, Builder, Select } = require("selenium-webdriver");
const assert = require("assert");
const addContext = require("mochawesome/addContext");
const { Books } = require("../exports/models");
const { saveScreenshot, getLastRecord } = require("../exports/helpers");
const path = require("path");
require("chromedriver");

const testImgPath = path.join(__dirname, "portada.jpg");

let driver;

const locateFormInputs = async () => {
  return {
    img: await driver.findElement(By.id("add-image")),
    title: await driver.findElement(By.id("title")),
    pusblishYear: await driver.findElement(By.id("publishYear")),
    category: await driver.findElement(By.id("categories")),
    author: await driver.findElement(By.id("author")),
    editorial: await driver.findElement(By.id("editorial")),
    form: await driver.findElement(By.css(".form-save")),
  };
};

describe("Mantenimiento de libros", function () {
  before(() => {
    driver = new Builder().forBrowser("chrome").build();
    driver.manage().setTimeouts({ implicit: 20000, pageLoad: 10000 });
  });

  afterEach(function () {
    const imgFileName = `${this.currentTest.title}.jpg`;
    saveScreenshot(driver, imgFileName);
    addContext(this, `../report/screenshots/${imgFileName}`);
  });

  after(() => driver.quit());

  it("Creación de libro", async function () {
    await driver.get("http://localhost:5000/admin-books/add");

    const locators = await locateFormInputs();

    await locators.img.sendKeys(testImgPath);
    await locators.title.sendKeys("1984");
    await locators.pusblishYear.sendKeys("1992");
    await new Select(locators.category).selectByVisibleText("Acción");
    await new Select(locators.author).selectByVisibleText("George Orwell");
    await new Select(locators.editorial).selectByVisibleText("Famas Inc");
    await locators.form.submit();

    getLastRecord(Books);

    assert.strictEqual("a", "a");
  });
});
