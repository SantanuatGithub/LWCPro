import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DisplayToast extends LightningElement {
    @track msg;
    @track variant; /* understand the with/without @track & api*/
    title="Notification"
    variant = 'success';
    variantOptions = [
        {label : 'error', value : 'error'},
        {label : 'warning', value : 'warning'},
        {label : 'success', value : 'success'},
        {label : 'info', value : 'info'}
    ];

    updateVariant(event){
        this.variant = event.target.value;
    }

    trackMessage(event){
        this.msg = event.target.value;
    }

    showToast(){
        /*eslint-disable-next-line  no-console*/
        console.log('entry point');
        const evt = new ShowToastEvent({
            
            title: this.title,
            message: this.msg,
            variant: this.variant
        });
        this.dispatchEvent(evt);
    }

    doReset(){
        this.msg = '';
        this.variant = 'success';
    }
}