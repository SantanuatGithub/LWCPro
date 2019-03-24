import { LightningElement,api } from 'lwc';
import CURRENTUSERID from '@salesforce/user/Id';

export default class GetCurrentIds extends LightningElement {

    userId = CURRENTUSERID;

    @api recordId;
    @api objectApiName;

}