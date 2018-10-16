({
	onInit: function (component) {
		// Prepare a new record from template
		component.find("service").getNewRecord(
			"BoatReview__c", // sObject type (entityAPIName)
			null,      // recordTypeId
			false,     // skip cache?
			$A.getCallback(function () {
				var rec = component.get("v.newContact");

				var error = component.get("v.newContactError");
				if (error || (rec === null)) {
					console.log("Error initializing record template: " + error);
				}
				else {
					//set Boat Id to masterDetail field in BoatReview
					component.set("v.simpleNewContact.Boat__c", component.get("v.boat").Id);

					console.log("Record template initialized: " + rec.Boat__c);
					console.log("Record template initialized: " + rec.sobjectType);
				}
			})
		);
	},
	validateContactForm: function (component) {
		var validContact = true;
		// Show error messages if required fields are blank
		var allValid = component.find('contactField').reduce(function (validFields, inputCmp) {
			inputCmp.showHelpMessageIfInvalid();
			return validFields && inputCmp.get('v.validity').valid;
		}, true);
		/*         if (allValid) {
					// Verify we have an account to attach it to
					var account = component.get("v.newContact");
					if($A.util.isEmpty(account)) {
						validContact = false;
						console.log("Quick action context doesn't have a valid account.");
					}
					return(validContact);
				    
				}   */
	}

})