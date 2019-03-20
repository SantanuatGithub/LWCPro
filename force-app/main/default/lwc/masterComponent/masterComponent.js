import { LightningElement,track } from 'lwc';

//const DELAY = 1300;
export default class MasterComponent extends LightningElement {

    @track message = "LWC Lifecycle  --->  ";

    //generatedMesage;
    
    constructor(){
        super();

        this.message = this.message + "Constructor from Parent --->  ";        
    }

    connectedCallback(){
        this.message = this.message + "ConnectedCallback from Parent --->  ";   
    }
    
    renderedCallback(){
        this.message = this.message + "RenderedCallback from Parent";   
    } 

    /*showMessage(){
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.message = this.generatedMesage;
        }, DELAY);
    }*/

    

}