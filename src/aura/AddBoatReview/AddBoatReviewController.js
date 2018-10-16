({
	doInit: function (component, event, helper) {
		helper.onInit(component);
	},
	onSave: function (component, event, helper) {
		// if(helper.validateContactForm(component)) {
		/*  component.set("v.simpleNewContact.AccountId", component.get("v.recordId")); */
		component.find("service").saveRecord(function (saveResult) {
			if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
				// record is saved successfully
				var resultsToast = $A.get("e.force:showToast");

				//create a new event
				var createEvent = component.getEvent("BoatReviewAdded");
				console.log('review');
				console.log(component.get("v.simpleNewContact").Id);
				console.log(component.get("v.simpleNewContact").Name);
				console.log(component.get("v.boat").Id);
				console.log('end - review');
				createEvent.setParams({ "id": component.get("v.simpleNewContact").Id });
				createEvent.fire();

				if (resultsToast) {
					resultsToast.setParams({
						"title": "Saved",
						"message": "The record was saved.",
						"type": "success"
					});
					resultsToast.fire();
				}
				else alert('showToast is not supported');
			} else if (saveResult.state === "INCOMPLETE") {
				// handle the incomplete state
				console.log("User is offline, device doesn't support drafts.");
			} else if (saveResult.state === "ERROR") {
				// handle the error state
				console.log('Problem saving contact, error: ' +
					JSON.stringify(saveResult.error));
			} else {
				console.log('Unknown problem, state: ' + saveResult.state +
					', error: ' + JSON.stringify(saveResult.error));
				component.set("v.newContactError", errMsg);
			}
		});
		//} //end form validation, no worked in this case

		helper.onInit(component);//reset the fields 
	},

	onRecordUpdated: function (component, event, helper) {
		var eventParams = event.getParams();
		if (eventParams.changeType === "CHANGED") {
			var changedFields = eventParams.changedFields;
			resultsToast.setParams({
				"title": "Saved",
				"message": "The record was saved.",
				"type": "success"
			});
			resultsToast.fire();
		}

	}

})