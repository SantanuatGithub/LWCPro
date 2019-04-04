import { LightningElement, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class ShowWireUIObjectInfo extends LightningElement {

    @track objectInfo;
    @wire(getObjectInfo,{objectApiName: 'Contact'}) objectInfo;

    get objectInfoStr() {
        return this.objectInfo
            ? JSON.stringify(this.objectInfo.data, null, 2)
            : '';
    }

   

    
}