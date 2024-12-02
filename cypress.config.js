const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require("convert-excel-to-json");
const fs = require('fs');
const ExcelJs = require("exceljs")


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  // Make sure to return the config object as it might have been modified by the plugin.

  on("task", {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // fs.readFileSync returns a Buffer
      });
      return result;
    },

    async writeExcel({ search, newValue, moveToPrice, filePath }) {

      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet('Sheet1');
      const output = await readExcel(worksheet, search);

      if (output.row === -1 || output.column === -1) {
        throw new Error("Search text not found in the Excel file.");
      }

      const cell = worksheet.getCell(output.row, output.column + moveToPrice);
      cell.value = newValue;
      //pending resolved rejected
      return workbook.xlsx.writeFile(filePath).then(() => {
        return true;
      })
        .catch((error) => {
          return false;
        })
    }
  });

  return config;
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    })
  })
  return output;
}

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  projectId: "uamg6n", //cypress cloud
  retries: {
    runMode: 1, //run failing teste one more time
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
  },
  defaultCommandTimeout: 8000,//set in here only if all tests will need more than 4sec
});
