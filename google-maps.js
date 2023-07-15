window.initMap = () => {
    // Map 1 - 5km Circle
    const map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 12,
        center: { lat: -6.194391, lng: 106.818384 },
        mapTypeId: "terrain"
    });

    const circle1 = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.4,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map1,
        center: { lat: -6.194391, lng: 106.818384 },
        radius: 5000
    });

    // Map 2 - Concentric Circles
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 11,
        center: { lat: -6.194391, lng: 106.818384 },
        mapTypeId: "terrain"
    });

    for (let radius = 5000; radius <= 15000; radius += 5000) {
        const circle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.4,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.05,
            map: map2,
            center: { lat: -6.194391, lng: 106.818384 },
            radius: radius
        });
    }
};
