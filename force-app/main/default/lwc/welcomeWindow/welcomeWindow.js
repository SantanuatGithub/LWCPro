import { LightningElement } from 'lwc';
import WELCOME_MESSAGE from '@salesforce/label/c.Welcome_Message';

export default class WelcomeWindow extends LightningElement {
    welcomeMessage = WELCOME_MESSAGE;//'Welcome to LWC Training Class';
}