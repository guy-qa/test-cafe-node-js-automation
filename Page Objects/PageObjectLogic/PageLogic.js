import { t, ClientFunction } from 'testcafe'; // first import testcafe selectors
import Locators from '../Locators/PageLocators'
import { homePage_url } from '../../config';

export default class PageLogic {
    //This class contains all the methods to test the page

    testLocators = new Locators();
    getWindowLocation = ClientFunction(() => window.location);

    async goToHomePage() {
        t.page(homePage_url)
    }

    async verifyHomePage() {
        //This method will simply verify if the control is on the Home page
        await t
            .expect(this.testLocators.pageHeader.exists).ok
    }

    async simpleSearch(searchText) {
        await t.click(this.testLocators.searchIcon)
        await t.typeText(this.testLocators.searchInput, searchText)
        await t.pressKey('Enter')
        //await t.expect(this.testLocators.topicHeading.exists).ok()
    }

    async getCurrentPageURL() {
        const url = await this.getWindowLocation()
        return url.href
    }

    async verifyResultPage(expectedUrl) {
        actual = await this.getCurrentPageURL()
        await t.expect(actual).contains(expectedUrl)
    }
}