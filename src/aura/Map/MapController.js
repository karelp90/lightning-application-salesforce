({
    jsLoaded: function (component, event, helper) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function (component, event, helper) {
        var coord = event.getParam("coordinates");
        console.log(coord.lat);
        console.log(coord.longitude);
        component.set('v.location', {
            'lat': coord.lat,
            'long': coord.longitude
        });


    }
})