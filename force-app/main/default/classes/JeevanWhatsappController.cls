public with sharing class JeevanWhatsappController {
    @AuraEnabled
    public static List<WhatsAppMessage__c> getTwhatsAppMessages() {
        return [SELECT Id, Body__c, To__c, From__c, Inbound__c FROM WhatsAppMessage__c ORDER BY CreatedDate];
    }

    @AuraEnabled
    public static void sendMsg(string msg) {
        JeevanWhatsappUtility.sendWhatsAppMessage(msg);
    }
}
