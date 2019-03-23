import { LightningElement,track } from 'lwc';

export default class ConditionalStatement extends LightningElement {
    @track hasRendered;
    count=0;

    handleClicks(){
        this.count++;
        /*if(this.count == 4)
            this.hasRendered = true;*/
    }

    get hasRendered(){
        console.log('count--->'+this.count);
        if(this.count == 4)
            return true;
    }

}