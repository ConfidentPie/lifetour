let map = L.map('map').setView([55.774858, 37.632609], 14.61);


let initLeaflet = () => {
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let myIcon = L.icon({
    iconUrl: 'img/svg/pin.svg',
    iconSize: [48, 48],
    iconAnchor: [19, 50],
  });

  L.marker([55.774858, 37.632609], {icon: myIcon}).addTo(map);
};

export {initLeaflet};
