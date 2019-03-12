import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/LWC_ContactController.getContactList';

export default class ShowContactsWMP extends LightningElement {
    @wire(getContactList) contacts;
}