import { LightningElement,track } from 'lwc';

//const DELAY = 1300;
export default class MasterComponent extends LightningElement {

    @track message = "LWC Lifecycle  --->  ";
    hasRendered = false;
    renderedFromChild = false;

    //generatedMesage;
    
    constructor(){
        super();

        this.message = this.message + "Constructor from Parent --->  "; 
        this.template.addEventListener('renderedEvent', this.handleCustomEvent.bind(this));   
        
    } 
    

    connectedCallback(){
        this.message = this.message + "ConnectedCallback from Parent --->  ";   
    }

    handleCustomEvent(event) { 
        /*eslint-disable-next-line*/
        console.log("res-->" + event.detail);
        if(event.detail){
            this.message = this.message +  "RenderedCallback from Parent";
            this.hasRendered = true; 
        }        
      }
    
    renderedCallback(){
        if(!this.hasRendered){    
            //console.log('ENTRY');        
                        
        }
    } 

    /*showMessage(){
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.message = this.generatedMesage;
        }, DELAY);
    }*/

    

}