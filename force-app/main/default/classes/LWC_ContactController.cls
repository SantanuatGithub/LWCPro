public with sharing class LWC_ContactController{
       
       @AuraEnabled(cacheable = true)
       public static List<Contact> getContactList(){
           return [SELECT Id, Name, Email FROM Contact LIMIT 1];
       }
       
       @AuraEnabled(cacheable = true)
       public static List<Contact> searchContactList(String accountName){
           if (String.isBlank(accountName)) {
                return new List<Contact>();
            }
            String key = '%' + accountName + '%';
            return [SELECT Id, Name, Email FROM Contact WHERE Account.Name LIKE : key];
       }
       
       @AuraEnabled
       public static List<Contact> getImperativeContactList(){
           return [SELECT Id, Name, Email FROM Contact LIMIT 1];
       }
       
       @AuraEnabled
       public static List<Contact> searchImperativeContactList(String accountName){
           if (String.isBlank(accountName)) {
                return new List<Contact>();
            }
            String key = '%' + accountName + '%';
            return [SELECT Id, Name, Email FROM Contact WHERE Account.Name LIKE : key];
       }

        @AuraEnabled(cacheable=true)
        public static Contact getStaticContact(){
            return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 1];
        }
}