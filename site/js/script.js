document.addEventListener("DOMContentLoaded", function (event) {
	pageTransformation('Home');
});

function pageTransformation (pageName) {
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	document.querySelector(".page-on").className = "";
	document.querySelector("#" + pageName + "-option").className = "page-on";
}

// function CVfunction () {
// 	if (confirm("The CV file will be downloaded to your computer as a PDF file")) {
// 		alert("Great. You're OK with it");
// 	}
// 	else {
// 		alert("OK, the file won't be downloaded");
// 	}
// }