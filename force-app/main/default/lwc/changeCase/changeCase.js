import { LightningElement, api, track } from 'lwc';

export default class ChangeCase extends LightningElement {
    @track updatedCase;

    @api 
    changeUpperCase(phrase){
        this.updatedCase = phrase.toUpperCase();
    }
}