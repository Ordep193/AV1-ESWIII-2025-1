const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;

// Scenario: Adicionar uma nova tarefa
Given('que estou na página principal', async () => {
  browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] }); // pode ser false para ver o navegador - os outros argumentos são para funcionar o GitHub Actions
  page = await browser.newPage();
  await page.goto('http://localhost:3000'); // substitua pela URL correta da sua aplicação
  await new Promise(resolve => setTimeout(resolve, 3000)); // espera 3 segundos
});

When('eu digitdo {int} no primeiro campo', async (valor) => {
  await page.type('#input1', valor.toString());
  await new Promise(resolve => setTimeout(resolve, 1000));
});

When('digito {int} no segundo campo', async (valor) => {
  await page.type('#input2', valor.toString());
  await new Promise(resolve => setTimeout(resolve, 1000));
});

When('clico no botão "+"', async () => {
  await page.click('#btn-somar');
  await new Promise(resolve => setTimeout(resolve, 1000));
});

When('clico no botão "-"', async () => {
  await page.click('#btn-subtrair');
  await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('vejo o resultado {int}', async (valorEsperado) => {
  const resultado = await page.$eval('#resultado', el => el.textContent.trim());
  assert.strictEqual(
    parseInt(resultado),
    valorEsperado,
    `Esperava encontrar "${valorEsperado}" no resultado, mas encontrei: "${resultado}"`
  );
  await browser.close();
});
