var numberHaircuts = 0;

function setup() {
	document.getElementById('haircutNo').innerHTML = numberHaircuts;
}

function updateHaircuts(n) {
	numberHaircuts+= n;
	document.getElementById('haircutNo').innerHTML = numberHaircuts;
}
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCJjuWMPGkzOInnl0ZZXrjMHRLLOObMMaA",
	authDomain: "project-3239275781682935411.firebaseapp.com",
	databaseURL: "https://project-3239275781682935411.firebaseio.com",
	storageBucket: "",
};
firebase.initializeApp(config);

