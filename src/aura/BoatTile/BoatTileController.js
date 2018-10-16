({
	onBoatClick: function (component, event, helper) {
		var createEvent = component.getEvent("BoatSelect");
		createEvent.setParams({ "boatId": component.get("v.boat.Id") });
		createEvent.fire();

		var appEvent = $A.get("e.c:BoatSelected");
		appEvent.setParams({ "boat": component.get("v.boat") });
		appEvent.fire();


		var lat = component.get("v.boat").Geolocation__Latitude__s;
		var longitud = component.get("v.boat").Geolocation__Longitude__s;
		var coord = {"lat" : lat , "longitude" : longitud }
		var appEvent = $A.get("e.c:PlotMapMarker");
		appEvent.setParams({ "coordinates":  coord});
		appEvent.fire();
	}
})