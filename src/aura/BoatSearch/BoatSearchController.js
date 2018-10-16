({
	onFormSubmit: function (component, event, helper) {
		var idObject = event.getParam("formData");
		component.set("v.idSelected", idObject.boatTypeId)
		console.info(idObject.boatTypeId);
		var appEvent = $A.get("e.c:passIdSelected");
		appEvent.setParams({ "id": idObject.boatTypeId });
		appEvent.fire();
	}
})