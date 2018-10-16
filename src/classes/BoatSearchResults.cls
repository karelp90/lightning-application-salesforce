public class BoatSearchResults {
    @AuraEnabled
    public static List<BoatType__c> findAllBoatType () {
        return [SELECT Id, Name FROM BoatType__c];
    }
    
    @AuraEnabled
    public static List<Boat__c> getBoats (String boatTypeId) {
        if(boatTypeId=='')
        	return [SELECT Id, Name,Picture__c,Contact__r.Name, BoatType__r.Name,Geolocation__Latitude__s, Geolocation__Longitude__s  FROM Boat__c];
        else
            return [SELECT Id, Name,Picture__c,Contact__r.Name, BoatType__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s  FROM Boat__c WHERE BoatType__c=:boatTypeId];
    }

}