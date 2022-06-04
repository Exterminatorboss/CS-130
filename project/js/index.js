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


const cancun = L.marker([20.534548,-99.927964], {
    webpage: 'mexico.html'
}).addTo(mymap);
cancun.on('click', openPage);

const athens = L.marker([37.9909517,23.6682986], {
    webpage: 'greece.html'
}).addTo(mymap);
athens.on('click', openPage);

const mauritius = L.marker([-20.3191158,57.4883422], {
    webpage: 'mauritius.html'
}).addTo(mymap);
mauritius.on('click', openPage);

const uganda = L.marker([0.3133718,32.4590347], {
    webpage: 'uganda.html'
}).addTo(mymap);
uganda.on('click', openPage);

const iceland = L.marker([64.1335729,-21.9925251], {
    webpage: 'iceland.html'
}).addTo(mymap);
iceland.on('click', openPage);


