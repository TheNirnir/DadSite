var newsArray =[
	{
		startContent: 'April 2020: New arXiv paper:',
		linkTo: '#',
		linkName: 'TAEN: Temporal Aware Embedding Network for Few-Shot Action Recognition.',
		continueContent: ''
	},
	{
		startContent: 'March 2020: IBM Research Blog',
		linkTo: '#',
		linkName: 'The potential benefits of AI for breast cancer detection.',
		continueContent: ''
	},
	{
		startContent: "March 2020: New arXiv paper:",
		linkTo: '#',
		linkName: 'Noise Estimation Using Density Estimation for Self-Supervised Multimodal Learning.',
		continueContent: ''
	},
	{
		startContent: 'March 2020: New paper:',
		linkTo: '#',
		linkName: '"Evaluation of Combined Artificial Intelligence and Radiologist Assessment to Interpret Screening Mammograms", JAMA Networks Open.',
		continueContent: ''
	},
	{
		startContent: 'February 2020: Our workshop proposal',
		linkTo: '#',
		linkName: 'Workshop on multi-modal video analysis and moments in time", JAMA Networks Open.',
		continueContent: 'has been accepted for ECCV 2020.'
	},
	{
		startContent: 'October 2019: Paper "Learning to Detect and Retrieve Objects from Unlabeled Videos", Workshop on multi-modal video analysis and moments in time.',
		linkTo: '',
		linkName: '',
		continueContent: ''
	},
	{
		startContent: 'June 2019: Paper "Mammogram Classification with Ordered Loss" was nominated for the best paper award at AIME 2019.',
		linkTo: '',
		linkName: '',
		continueContent: ''
	},
	{
		startContent: 'May 2019: New arXiv paper: "Toward Self-Supervised Object Detection in Unlabeled Videos".',
		linkTo: '',
		linkName: '',
		continueContent: ''
	}
]

var NewsHTML = "snippets/News-list-snippet.html";

document.addEventListener("DOMContentLoaded", function (event) {
	pageTransformation('Home');
	var i = 0;
	buildAndShowNews(newsArray, i);
	setInterval(function () {
		buildAndShowNews(newsArray, i);
		i++;
		if (i == newsArray.length - 3) {
			i = 0;
		}
	}, 3500)
});

function pageTransformation (pageName) {
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	document.querySelector(".page-on").className = "";
	document.querySelector("#" + pageName + "-option").className = "page-on";
}

function insertProperty (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(RegExp(propToReplace, "g"), propValue);
	return string;
}

function buildAndShowNews (newsArray, i) {
		$ajaxUtils.sendGetRequest(NewsHTML, function(NewsHTML) {
			var NewsViewHTML = buildNewsViewHTML(newsArray, NewsHTML, i);
			document.querySelector("#news-list").innerHTML = NewsViewHTML;
		}, false);
}

function buildNewsViewHTML(newsArray, NewsHTML, i) {
	var finalHtml = "";

	var max = i+4;
	for (var i = i; i < max;) {
		var html = NewsHTML;
		var number = i+1;
		var startContent = newsArray[i].startContent;
		var linkTo = newsArray[i].linkTo;
		var linkName = newsArray[i].linkName;
		var continueContent = newsArray[i].continueContent;

		html = insertProperty(html, "number", number);
		html = insertProperty(html, "startContent", startContent);
		html = insertProperty(html, "linkTo", linkTo);
		html = insertProperty(html, "linkName", linkName);
		html = insertProperty(html, "continueContent", continueContent);
		finalHtml += html;

		i++;
	}

	return finalHtml;
}
// function CVfunction () {
// 	if (confirm("The CV file will be downloaded to your computer as a PDF file")) {
// 		alert("Great. You're OK with it");
// 	}
// 	else {
// 		alert("OK, the file won't be downloaded");
// 	}
// }