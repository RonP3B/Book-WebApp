const { By, Key, Builder } = require("selenium-webdriver");
const assert = require("assert");
const addContext = require("mochawesome/addContext");
const saveScreenshot = require("../helpers/testsHelpers/saveScreenshot");
require("chromedriver");

let driver;

describe("Filtrar libros", function () {
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

  it("Filtrar libros por titulo", async function () {
    await driver.get("http://localhost:5000");

    const btnFilterMenu = await driver.findElement(By.id("filter-option"));
    const inputTitle = await driver.findElement(By.name("title"));

    await btnFilterMenu.click();
    await inputTitle.sendKeys("Libro Prueba #2", Key.RETURN);

    const filteredBook = await driver
      .findElement(By.css(".book__info h4"))
      .getText();

    assert.strictEqual(filteredBook, "Libro Prueba #2");
  });

  it("Filtrar libros por categoría", async function () {
    await driver.get("http://localhost:5000");

    const btnFilterMenu = await driver.findElement(By.id("filter-option"));
    const dramaLabel = await driver.findElement(
      By.css('label[for="8dcdaa44-6207-4ba3-81b7-3fa3b66ba8ab"]')
    );
    const btnFilter = await driver.findElement(By.id("btn-filter"));

    await btnFilterMenu.click();
    await dramaLabel.click();
    await btnFilter.click();

    const filteredBook = await driver
      .findElement(By.css(".book__info h4"))
      .getText();

    assert.strictEqual(filteredBook, "Libro Prueba #3");
  });

  it("Filtrar libros por titulo y categoría", async function () {
    await driver.get("http://localhost:5000");

    const btnFilterMenu = await driver.findElement(By.id("filter-option"));
    const inputTitle = await driver.findElement(By.name("title"));
    const dramaLabel = await driver.findElement(
      By.css('label[for="42680868-f21e-4df9-90da-7452167b9e4b"]')
    );

    await btnFilterMenu.click();
    await dramaLabel.click();
    await inputTitle.sendKeys("Libro Prueba #4", Key.RETURN);

    const filteredBook = await driver
      .findElement(By.css(".book__info h4"))
      .getText();

    assert.strictEqual(filteredBook, "Libro Prueba #4");
  });
});
