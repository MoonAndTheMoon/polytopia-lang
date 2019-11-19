<script>
let url_EN = "https://midjiwan.com/lang/en_US.json";
let url_PT = "https://midjiwan.com/lang/pt_BR.json";
let url_NO = "https://raw.githubusercontent.com/MoonAndTheMoon/polytopia-lang/master/nb_NO.json";

var getJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
	var status = xhr.status;
	if (status === 200) {
		callback(null, xhr.response);
	} else {
		callback(status, xhr.response);
	}
	};
	xhr.send();
};

getJSON(url_NO,
	function(err, data) {
		if (err !== null) {
			document.write("Error: ", err);
		} else {
			document.write(data.language);
		}
});

//document.write();
</script>