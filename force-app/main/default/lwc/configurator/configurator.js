import { LightningElement, api } from 'lwc';

export default class Configurator extends LightningElement {
    @api priorityOptions;
    @api description;
   
}