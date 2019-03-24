import { LightningElement } from 'lwc';
import MYSVG_URL from '@salesforce/resourceUrl/mySVG';

export default class SvgComponent extends LightningElement {
    get mySVGURL(){
        return MYSVG_URL;
    }
}