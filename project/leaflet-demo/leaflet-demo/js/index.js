//initialize map:
const mymap = L.map('mapid').setView([42.0454106, -87.733998], 2);

//initialize tiles (there are many options):
L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
//L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);

const openPage = function (e) {
    // console.log(e);
    // console.log(this.options.webpage);
    window.location.href = this.options.webpage;
}


const cancun = L.marker([21.1213429,-86.8492333], {
    webpage: 'mexico.html'
}).addTo(mymap);
cancun.on('click', openPage);

const athens = L.marker([37.9909517,23.6682986], {
    webpage: 'greece.html'
}).addTo(mymap);
athens.on('click', openPage);


