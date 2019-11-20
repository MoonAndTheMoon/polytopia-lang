<script>
let prefix = "https://raw.githubusercontent.com/MoonAndTheMoon/polytopia-lang/master/";
let url_EN = prefix + "en_US.json";
let url_PT = prefix + "pt_BR.json";
let url_NO = prefix + "nb_NO.json";

var getJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		var status = xhr.status;
		if (status === 200) {
			callback(xhr.response);
		}
	};
	xhr.send();
};

let EN, PT;
getJSON(url_EN,
	function(data) {
		EN = data;
		compare();
});

getJSON(url_PT,
	function(data) {
		PT = data;
		compare();
});

let loadedCount = 0;
var compare = function() {
	loadedCount += 1;
	if (loadedCount == 2) {
		document.write(EN.language, "<br>", PT.language);
	}
};

//document.write();
</script>