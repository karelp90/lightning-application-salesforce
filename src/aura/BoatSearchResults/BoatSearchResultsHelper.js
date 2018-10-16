({
	onSearch: function (component, boatTypeId) {
		console.info("fromn helper" + boatTypeId);
		var action = component.get("c.getBoats");
		action.setParams({
			"boatTypeId": boatTypeId!='all' ? boatTypeId : ''
		});
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				console.log(response.getReturnValue());
				component.set("v.boats", response.getReturnValue());
			}
			else {
				console.log("Failed load posts with state: " + state);
			}
		});
		$A.enqueueAction(action);
	}
})