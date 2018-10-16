({
	onBoatSelected: function (component, event, helper) {
		var boatSelected = event.getParam("boat");
		component.set("v.id", boatSelected.Id);

		var service = component.find("service");
		service.reloadRecord();
	},
	onRecordUpdated: function (component, event, helper) {
		if (component.find("details"))
			component.find("details").set("v.selectedTabId", "boatreviewtab");
	},
	onBoatReviewAdded: function (component, event, helper) {
		console.info("from cmp event of addboatreview" + event.getParam("id"))
		component.find("details").set("v.selectedTabId", "boatreviewtab");
	},
})