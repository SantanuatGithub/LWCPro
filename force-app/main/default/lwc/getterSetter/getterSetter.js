import { LightningElement, track } from 'lwc';

export default class GetterSetter extends LightningElement {

    defaultMsg = "We are learning ";
    @track outputMessage;

      
    get message(){
        return this.defaultMsg + "Lightning Web Component";
        
    }

    set message(val){
       this.outputMessage = val;
    }

    handleMessage(event){
        this.message = event.target.value;
    }

    
}