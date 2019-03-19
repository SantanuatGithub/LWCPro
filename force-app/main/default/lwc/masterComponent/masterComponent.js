import { LightningElement,track } from 'lwc';

const DELAY = 1300;
export default class MasterComponent extends LightningElement {

    @track message;

    generatedMesage;
    
    constructor(){
        super();

        this.generatedMesage = "Hey, I am from Constructor.";        
    }

    connectedCallback(){
        this.generatedMesage = "Hey, I am from Connected Callback.";   
        this.showMessage();     
    }

    showMessage(){
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.message = this.generatedMesage;
        }, DELAY);
    }

    

}