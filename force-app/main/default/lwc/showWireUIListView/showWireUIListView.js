import { LightningElement, wire } from 'lwc';
import {getListUi } from 'lightning/uiListApi';

export default class ShowWireUIListView extends LightningElement {
    @wire(getListUi , {
        objectApiName: 'Contact',
        listViewApiName: 'All_Contacts',
        sortBy: 'Name',
        pageSize: 10
    })
    listView;

    get contacts() {
        return this.listView.data.records.records;
    }
}