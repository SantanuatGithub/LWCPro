import { LightningElement } from 'lwc';

export default class MasterComponent extends LightningElement {

    initiatorMessage;
    domMessage;
    
    constructor(){
        super();

        this.initiatorMessage = "Hey, I am from Constructor.";        
    }

    connectedCallback(){
        this.domMessage = "Hey, I am from Connected Callback.";        
    }

    

}