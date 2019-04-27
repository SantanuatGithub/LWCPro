import { LightningElement } from 'lwc';
import CURRENTUSERID from '@salesforce/user/Id';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
import USER_ALIAS_FIELD from '@salesforce/schema/User.Alias';
import USER_EMAIL_FIELD from '@salesforce/schema/User.Email';

export default class ShowLRFRecord extends LightningElement {

    userId = CURRENTUSERID;
    fields = [USER_NAME_FIELD, USER_ALIAS_FIELD, USER_EMAIL_FIELD];

}