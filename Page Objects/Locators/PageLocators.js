import { t, ClientFunction } from 'testcafe'
import { Selector } from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

export default class Locators {
    //This class contains all the element locators for the page

    pageHeader = Selector('a').withAttribute('class', 'site-logo')
    searchIcon = Selector('div').withAttribute('id', 'search-icon')
    searchInput = Selector('input').withAttribute('id', 'search')
}