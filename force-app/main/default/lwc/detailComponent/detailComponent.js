import { LightningElement, api } from 'lwc';

export default class DetailComponent extends LightningElement {
    @api message;
    hasRendered = false;

    constructor(){
        super();

        this.message = "Constructor from Child  --->  ";        
    }

    connectedCallback(){
        this.message = this.message + "ConnectedCallback from Child --->  ";   
    } 

    renderedCallback(){
        if(!this.hasRendered){
            this.message = this.message + "RenderedCallback from Child --->  "; 
            this.hasRendered = true;

            this.dispatchEvent(new CustomEvent("renderedEvent", { detail: true }));
        }  
    } 

}