$(document).on('ready',ready);

function ready(){
    $('section#contenedor').height($(window).height()-$('header').height());
	medidaheight('section#contenedor','section#contenedor ul.sidebar');
	medidaheight('section#contenedor','section#map');
    
    database();

	if(navigator.onLine){
		online();	
	}else{
		offline();	
	}
}
function insertMarker(db,id,log){
	
}
function medidaheight(contenedor,objeto){
	var hc=$(contenedor).height();
	$(objeto).height(hc);
}
function mapa(){
	$('section#map').gmap3();
}
function online(){
	mapa();
}
function offline(){

}
function database(){
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    var db;
    var request = indexedDB.open("TestDatabase");
    request.onerror = function(evt) {
      console.log("Database error code: " + evt.target.errorCode);
    };
    request.onsuccess = function(evt) {
      db = request.result;
    };
}
var peopleData = [
    { name: "John Dow", email: "john@company.com" },
    { name: "Don Dow", email: "don@company.com" }
];
 
function initDb() {
init();

}