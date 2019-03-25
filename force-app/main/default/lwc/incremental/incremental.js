import { LightningElement, api, track } from 'lwc';

export default class Incremental extends LightningElement {
    @api sectionName;
    @api enableIncrement;
    @track incrementValue = 1;
    incrementBy = 1;

    increment(){
        this.incrementValue = this.incrementValue + this.incrementBy;
    }

}