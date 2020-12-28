trigger whatsAppMessage on WhatsAppMessage__c (after insert) {
    List<WhatsApp_Message__e> evts = new List<WhatsApp_Message__e>();
    for (WhatsAppMessage__c each : Trigger.new) {
        if (each.Inbound__c) {
            evts.add(new WhatsApp_Message__e(
                Body__c = each.Body__c,
                From__c = each.From__c,
                To__c = each.To__c,
                Inbound__c = each.Inbound__c
            ));
        }
    }

    List<Database.SaveResult> results = EventBus.publish(evts);
    String response = '';
    for (Database.SaveResult sr : results) {
        if (!sr.isSuccess()) {
            for (Database.Error err : sr.getErrors()) {
                response += err.getMessage();
            }
            System.debug(response);
        }       
    }
}