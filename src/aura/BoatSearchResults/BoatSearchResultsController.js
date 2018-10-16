({
	search : function(component, event, helper) {
		helper.onSearch(component, event.getParam("id"));
	},
	onBoatSelect : function(component, event, helper) {		
		var isOpen = event.getParam("boatId");
		component.set("v.selectedBoatId", isOpen);
	}
})