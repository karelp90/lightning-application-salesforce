({
	loadOptions: function (component, event, helper) {
		var isAvailable = $A.get("e.force:createRecord");
		if (isAvailable) {
			component.set("v.available", true);
		}

		var action = component.get("c.findAllBoatType");
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {

				console.log(response.getReturnValue());
				var listType = response.getReturnValue();
				var opts = [];
				for (var i = 0; i < listType.length; i++)
					opts.push({ value: listType[i].Id, label: listType[i].Name })

				component.set("v.options", opts);

			}
			else {
				console.log("Failed load posts with state: " + state);
			}
		});
		$A.enqueueAction(action);
	},
	newBoat: function (component, event, helper) {
		var createRecordEvent = $A.get("e.force:createRecord");
		if (createRecordEvent) {
			var params = {};
			if (component.get("v.idTypeSelected") == 'all')
				params = { "entityApiName": "Boat__c" };
			else
				params = {
					"entityApiName": "Boat__c",
					"defaultFieldValues": {
						'BoatType__c': component.get("v.idTypeSelected")
					}
				};

			createRecordEvent.setParams(params);
			createRecordEvent.fire();
		}
	},
	onChange: function (component, event, helper) {
		component.set("v.idTypeSelected", component.find("mySelect").get("v.value"));
	},
	onFormSubmit: function (component, event, helper) {
		var updateEvent = component.getEvent("formsubmit");
		var objectIdSelected = {"boatTypeId" : component.get("v.idTypeSelected")};
        updateEvent.setParams({ "formData": objectIdSelected });
		updateEvent.fire();
	},

})