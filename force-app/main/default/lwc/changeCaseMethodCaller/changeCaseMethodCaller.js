import { LightningElement } from 'lwc';

export default class ChangeCaseMethodCaller extends LightningElement {

    handlePhraseChange(event){
        this.template.querySelector('c-change-case').changeUpperCase(event.target.value);
    }
    
}