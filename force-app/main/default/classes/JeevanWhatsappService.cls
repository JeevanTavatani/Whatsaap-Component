@RestResource(urlMapping='/receive')
global with sharing class JeevanWhatsappService {
    
    @HttpPost
    global static String doPost() {
        RestRequest req = RestContext.request;
        List<WhatsAppMessage__c> inserts = new List<WhatsAppMessage__c>();
        inserts.add(new WhatsAppMessage__c(
            To__c = req.params.get('To'),
            From__c = req.params.get('From'),
            Body__c = req.params.get('Body'),
            Inbound__c = true
        ));
        insert inserts;
        System.debug(req);
        return 'success';
    }
}
