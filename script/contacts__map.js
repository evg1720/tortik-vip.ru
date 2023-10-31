function init() {
    let map = new ymaps.Map('map', {
        center: [54.10251817187293,102.17018817672626],
        zoom: 14
    });

let placemark = new ymaps.Placemark([54.10251817187293,102.17018817672626], {}, {

});


map.geoObjects.add(placemark);
}

ymaps.ready(init);