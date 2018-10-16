({
	doInit: function (component, event, helper) {
		//component.set("v.boat", component.get('v.boat'));
		console.log('tab');
		console.log(component.get("v.boat"));
		var action = component.get("c.getAll");
		action.setParams({
			"boatId": component.get("v.boat").Id
		});
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				component.set("v.boatReviews", response.getReturnValue());
				console.log(component.get('v.boatReviews'));
			}
			else {
				console.log("Failed load posts with state: " + state);
			}
		});
		$A.enqueueAction(action);
	},
	onUserInfoClick: function (component, event, helper) {
		var userId = event.currentTarget.getAttribute("data-userid");
		var navEvt = $A.get("e.force:navigateToSObject");
		navEvt.setParams({
			"recordId": userId,
		});
		navEvt.fire()

	},
	refresh: function (component, event, helper) {
		this.doInit;
	},
})