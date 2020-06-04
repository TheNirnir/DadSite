var newsArray =[
	{
		startContent: 'April 2020: New arXiv paper:',
		linkTo: 'https://arxiv.org/abs/2004.10141',
		linkName: 'TAEN: Temporal Aware Embedding Network for Few-Shot Action Recognition.',
		continueContent: ''
	},
	{
		startContent: 'March 2020: IBM Research Blog',
		linkTo: 'https://www.ibm.com/blogs/research/2020/03/benefits-ai-for-breast-cancer-detection/',
		linkName: 'The potential benefits of AI for breast cancer detection.',
		continueContent: ''
	},
	{
		startContent: "March 2020: New arXiv paper:",
		linkTo: 'https://arxiv.org/abs/2003.03186',
		linkName: 'Noise Estimation Using Density Estimation for Self-Supervised Multimodal Learning.',
		continueContent: ''
	},
	{
		startContent: 'March 2020: New paper:',
		linkTo: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2761795',
		linkName: '"Evaluation of Combined Artificial Intelligence and Radiologist Assessment to Interpret Screening Mammograms", JAMA Networks Open.',
		continueContent: ''
	},
	{
		startContent: 'February 2020: Our workshop proposal',
		linkTo: 'https://sites.google.com/view/multimodalvideo-v2/',
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
	},
	{
		startContent: 'May 2019: New arXiv paper: "A dual branch deep neural network for classification and detection in mammograms".',
		linkTo: '',
		linkName: '',
		continueContent: ''
	},
	{
		startContent: 'March 2019: New paper "Mammogram Classification with Ordered Loss" accepted to AIME 2019.',
		linkTo: '',
		linkName: '',
		continueContent: ''
	}
]

var NewsHTML = "snippets/News-list-snippet.html";
var newsInterval;
var i = 0;

document.addEventListener("DOMContentLoaded", function (event) {
	pageTransformation('Home');
});

function pageTransformation (pageName) {
	clearInterval(newsInterval);
	$ajaxUtils.sendGetRequest("snippets/" + pageName + "-snippet.html", function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		},
		false);
	document.querySelector(".page-on").className = "";
	document.querySelector("#" + pageName + "-option").className = "page-on";
	if (pageName == "Home") {
		i = 0;
		var newsOrder = newsOrderFunction(i);
		buildAndShowNews(newsArray, newsOrder);
		newsInterval = setInterval(function () {
			var newsOrder = newsOrderFunction(i);
			// console.log(newsOrder);
			buildAndShowNews(newsArray, newsOrder);
			i++;
			if (i == newsArray.length) {
				i = 0;
			}
		}, 3000)
	}
}

function newsOrderFunction (i) {
	var newsOrderArray = [];
	for (var j=0; j<4;) {
		if (i < newsArray.length) {
			newsOrderArray[j] = i;
		}
		else {
			newsOrderArray[j] = i - newsArray.length;
		}
		i++;
		j++;
	}
	// console.log(newsOrderArray);
	return newsOrderArray;
	// buildAndShowNews(newsArray, newsOrderArray);
}

function insertProperty (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(RegExp(propToReplace, "g"), propValue);
	return string;
}

function buildAndShowNews (newsArray, newsOrder) {
		$ajaxUtils.sendGetRequest(NewsHTML, function(NewsHTML) {
			var NewsViewHTML = buildNewsViewHTML(newsArray, NewsHTML, newsOrder);
			document.querySelector("#news-list").innerHTML = NewsViewHTML;
		}, false);
}

function buildNewsViewHTML(newsArray, NewsHTML, newsOrder) {
	var finalHtml = "";

	// console.log(newsOrder);
	// var max = i+4;
	// var j;

	// console.log("i:" + i);

	for (var k in newsOrder) {
		// console.log(newsOrder[k]);
		// console.log("k:" + k);
		// if (k >= newsArray.length) {
		// 	j = i;
		// 	console.log("j:" + j);
		// 	k = j - newsArray.length;
		// 	console.log("k:" + k);
		// }

		// if (k == 8) {
		// 	console.log("k = 8");
		// 	k = 0;
		// 	console.log("now k = " + k);
		// }
		// else {
		// 	console.log("k is not equal to 8");
		// }
		// k = parseInt(k);

		var html = NewsHTML;
		var number = newsOrder[k]+1;
		var startContent = newsArray[newsOrder[k]].startContent;
		var linkTo = newsArray[newsOrder[k]].linkTo;
		var linkName = newsArray[newsOrder[k]].linkName;
		var continueContent = newsArray[newsOrder[k]].continueContent;

		html = insertProperty(html, "number", number);
		html = insertProperty(html, "startContent", startContent);
		html = insertProperty(html, "linkTo", linkTo);
		html = insertProperty(html, "linkName", linkName);
		html = insertProperty(html, "continueContent", continueContent);
		finalHtml += html;

		// k = j;
		// k++;
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