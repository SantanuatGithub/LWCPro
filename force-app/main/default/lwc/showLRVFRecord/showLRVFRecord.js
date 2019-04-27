import { LightningElement } from 'lwc';
import CURRENTUSERID from '@salesforce/user/Id';

export default class ShowLRVFRecord extends LightningElement {
    userId = CURRENTUSERID;
}