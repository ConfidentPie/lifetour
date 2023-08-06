/* eslint-disable no-undef */
let initLeaflet = () => {
  const map = L.map('map', {scrollWheelZoom: false}).setView([55.774906445034176, 37.632641498705205], 14);
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);


  let myIcon = L.icon({
    iconUrl: 'img/svg/pin.svg',
    iconSize: [48, 48],
    iconAnchor: [19, 50],
  });

  L.marker([55.774906445034176, 37.632641498705205], {icon: myIcon}).addTo(map);
};

export {initLeaflet};
