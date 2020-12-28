# Whatsaap Integration with Salesforce
LWC - Whatsapp component.

This repo contains LWC component which is capable of 2 way messaging between Whatsapp and Salesforce...

# Twilio Function Configuration:
In the Twilio Function Config, you need to provide the Environmental variables:

SF_CONSUMER_KEY -> Connected App Consumer Key

SF_CONSUMER_SECRET -> Connected App Consumer Secret

SF_IS_SANDBOX -> Is it a Sandbox? // not mandatory (optional)

SF_USERNAME -> Salesforce Username

SF_PASSWORD -> Salesforce Password

SF_TOKEN -> Salesforce Security Token

And then add the code from Twilio Function.txt 

# SF Configuration:
1. You need to create a Connected App to establish a connection between Salesforce and Twilio.

2. You need to configure the Metadata by providing AccountSid, Auth Token, From and To.

3. Use the LWC component in Utility bar and LWC Notification component in Home/Record Page.
