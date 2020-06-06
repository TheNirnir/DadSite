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

var publicationsArray = [
	{
		namesBeforeRami: "",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "E.Amrani, O. Azulai, U. Barzelay and D. Rotman",
		title: "TAEN: Temporal Aware Embedding Network for Few-Shot Action Recognition,",
		linkTo: "#",
		linkName: "arXiv, 2020",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "E.Amrani,",
		RamiBenAri: "",
		namesAfterRami: "",
		title: "Evaluation of Combined Artificial Intelligence and Radiologist Assessment to Interpret Screening Mammograms,",
		linkTo: "#",
		linkName: " JAMA Network Open, 2020.",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "T. Shaffter et. al.",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "D. Rotman and A. Bornstein",
		title: "Noise Estimation Using Density Estimation for Self-Supervised Multimodal Learning,",
		linkTo: "#",
		linkName: "arXiv, 2020",
		achievement: "This research has been covered by 22 outlets around the globe, totaling more than 36.6 million earned media impressions by March 2020.",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "E. Amrani,",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "T. Hakim and A. Bornstein",
		title: "Toward Self-Supervised Object Detection in Unlabeled Videos,",
		linkTo: "#",
		linkName: "ICCV Workshop on Multimodal Video Analysis and Moments in Time, 2019",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "R. Bakalo, J. Goldberger and",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "T. Hakim and A. Bornstein",
		title: "Weakly and Semi Supervised Detection in Medical Imaging via Deep Dual Branch Net,",
		linkTo: "#",
		linkName: "arXiv, 2019",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "Y. Shoshan and T. Tlusty",
		title: "Mammogram Classification with Ordered Loss, Artificial Intelligence in Medicine 2019 (Oral)-20% acceptance rate,",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "Nominated for the best paper award.",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "Breast radiologists inspect mammograms with the utmost consideration to capture true cancer cases. Yet, machine learning models are typically designed to perform a binary classification, by joining several severities into one positive class. In such scenarios with mixed gradings, a reliable classifier would make less mistakes between distant severities such as missing a true cancer case and calling it as normal or vise versa. To this end, we suggest a simple yet elegant formulation for training a deep learning model with ordered loss, by increasingly weighting the loss of more severe cases, to enforce importance of certain errors over others. Training with the ordered loss yields fewer severe errors and can decrease the chances of missing true cancers. We evaluated our method on mammogram classification, using a weakly supervised deep learning method. Our data set included over 16K mammograms, with a large set of nearly 2,500 biopsy proven cancer cases. Evaluation of our proposed loss function showed a reduction in severe errors of missing true cancers, while preserving overall classification performance in the original task."
	},
	{
		namesBeforeRami: "R. Bakalo,",
		RamiBenAri: "Rami Ben-Ari",
		namesAfterRami: "and J. Goldberger",
		title: "Classification and detection in mammogram with weak supervision via dual branch deep neural network, ISBI, 2019 (Oral),",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "Nominated for the best paper award.",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "The high cost of generating expert annotations, poses a strong limitation for supervised machine learning methods in medical imaging. Weakly supervised methods may provide a solution to this tangle. In this study, we propose a novel deep learning architecture for multi-class classification of mammograms according to the severity of their containing anomalies, having only a global tag over the image. The suggested scheme further allows localization of the different types of findings in full resolution. The new scheme contains a dual branch network that combines region-level classification with region ranking. We evaluate our method on a large multi-center mammography dataset including ~3,000 mammograms with various anomalies and demonstrate the advantages of the proposed method over a previous weakly supervised strategy."
	}

]

var PublicationsTitleHtml = "snippets/Publications-title-snippet.html";
var PublicationsFirstRowHtml = "snippets/Publication-first-row-snippet.html";
var PublicationsOptionalRowHtml = "snippets/Publication-optional-row-snippet.html"
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

	if (pageName == "Publications") {
		buildAndShowPublication(publicationsArray);
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

function buildAndShowPublication (publicationsArray) {
		$ajaxUtils.sendGetRequest(PublicationsTitleHtml, function(PublicationsTitleHtml) {
			$ajaxUtils.sendGetRequest(PublicationsFirstRowHtml, function(PublicationsFirstRowHtml) {
				$ajaxUtils.sendGetRequest(PublicationsOptionalRowHtml, function(PublicationsOptionalRowHtml) {
					var PublicationsViewHTML = buildPublicationsViewHTML(publicationsArray, PublicationsTitleHtml, PublicationsFirstRowHtml, PublicationsOptionalRowHtml);
					document.querySelector("#main-content").innerHTML = PublicationsViewHTML;
				}, false);
			}, false);
		}, false);
}

function buildPublicationsViewHTML(publicationsArray, PublicationsTitleHtml, PublicationsFirstRowHtml, PublicationsOptionalRowHtml) {
	var finalHtml = PublicationsTitleHtml;

	for (var j = 0; j<publicationsArray.length;) {
		var html = "<li>";
		html += PublicationsFirstRowHtml;

		var namesBeforeRami = publicationsArray[j].namesBeforeRami;
		var RamiBenAri = publicationsArray[j].RamiBenAri;
		var namesAfterRami = publicationsArray[j].namesAfterRami;
		var title = publicationsArray[j].title;
		var linkTo = publicationsArray[j].linkTo;
		var linkName = publicationsArray[j].linkName;
		var achievement = publicationsArray[j].achievement;

		html = insertProperty(html, "namesBeforeRami", namesBeforeRami);
		html = insertProperty(html, "RamiBenAri", RamiBenAri);
		html = insertProperty(html, "namesAfterRami", namesAfterRami);
		html = insertProperty(html, "title", title);
		html = insertProperty(html, "linkTo", linkTo);
		html = insertProperty(html, "linkName", linkName);
		html = insertProperty(html, "achievement", achievement);

			if (publicationsArray[j].imageSource !== "") {
				html += PublicationsOptionalRowHtml;

				var imageSource = publicationsArray[j].imageSource;
				var abstractContent = publicationsArray[j].abstractContent;

				html = insertProperty(html, "imageSource", imageSource);
				html = insertProperty(html, "abstractContent", abstractContent);
			}
		html += "</li>";
		finalHtml += html;

		j++;
	}
	finalHtml += "</ul>";
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