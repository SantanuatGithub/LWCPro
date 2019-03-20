import { LightningElement,track } from 'lwc';

export default class DetailComponent extends LightningElement {
    @track message;

    constructor(){
        super();

        this.message = "Constructor from Child  --->  ";        
    }

    connectedCallback(){
        this.message = this.message + "ConnectedCallback from Child --->  ";   
    } 

    renderedCallback(){
        this.message = this.message + "RenderedCallback from Child --->  ";   
    } 

}