// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJjuWMPGkzOInnl0ZZXrjMHRLLOObMMaA",
    authDomain: "project-3239275781682935411.firebaseapp.com",
    databaseURL: "https://project-3239275781682935411.firebaseio.com",
    storageBucket: "project-3239275781682935411.appspot.com",
};
firebase.initializeApp(config);

var numberHaircuts = 0;

function setup() {
    document.getElementById('haircutNo').innerHTML = numberHaircuts;
}

function updateHaircuts(n) {
    numberHaircuts+= n;
    document.getElementById('haircutNo').innerHTML = numberHaircuts;
}

function updateHaircuts2(n) {
    firebase.database(),ref('')
}