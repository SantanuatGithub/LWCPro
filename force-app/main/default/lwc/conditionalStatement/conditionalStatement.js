import { LightningElement,track } from 'lwc';

export default class ConditionalStatement extends LightningElement {
    //@track hasRendered;
    @track count=0;

    handleClicks(){
        this.count++;
        /*if(this.count == 4)
            this.hasRendered = true;*/
    }

    get hasRendered(){
        // eslint-disable-next-line no-console
        console.log('count--->'+this.count);
        if(this.count === 4)
            return true;
        return false;
    }    

}