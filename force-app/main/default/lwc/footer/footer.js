import { LightningElement,api } from 'lwc';

export default class Footer extends LightningElement {

    @api sourceURL;
    @api blogURL;

    masterSourceURL = "https://github.com/SantanuatGithub/LWCPro/tree/master/force-app/main/default/lwc/";
    masterBlogURL = "https://www.santanuatonline.com/";

    get finalSourceURL(){
        return this.masterSourceURL+this.sourceURL;
    }

    get finalBlogURL(){
        return this.masterBlogURL+this.blogURL;
    }

}