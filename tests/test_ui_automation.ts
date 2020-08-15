import { homePage_url } from '../config';
import PageLogic from '../Page Objects/PageObjectLogic/PageLogic'
import Locators from '../Page Objects/Locators/PageLocators'

const testPage = new PageLogic();
const testLoc = new Locators();
const dataSet = require('./test_data.json')

fixture`Data Driven UI Automation Testing`// declare the fixture
  .page(homePage_url) // specify the start page
  .beforeEach(async t => {
    await t.maximizeWindow() // set the window size to it's max size
    await testPage.verifyHomePage() //verify the control lands on Home page
  })

dataSet.forEach(data => {
  test('Perform a simple search and verify the correct results show up', async t => {
    await testPage.simpleSearch(data.search_item) // perform a simple search using Search Bar
    const loc = await testPage.getCurrentPageURL()
    await t.expect(loc).contains(data.result_url)//verify if the user lands on the correct page
  })
})