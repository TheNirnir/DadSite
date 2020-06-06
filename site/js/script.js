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
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "D. Rotman and A. Bornstein",
		title: "Evaluation of Combined Artificial Intelligence and Radiologist Assessment to Interpret Screening Mammograms,",
		linkTo: "#",
		linkName: " JAMA Network Open, 2020.",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "T. Shaffter et. al.",
		RamiBenAri: "",
		namesAfterRami: "",
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
		RamiBenAri: "Rami Ben-Ari",
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
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "and J. Goldberger",
		title: "Unsupervised clustering of mammograms for outlier detection and breast density estimation,ICPR 2018,",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "The flourishing of machine learning use for cognitive tasks has driven an increased demand for large annotated training datasets. In the medical imaging domain, such datasets are scarce, and the process of labeling them is costly, error prone and requires high expertise. Unsupervised learning is therefore an attractive approach for analyzing unlabeled medical images. In this paper we describe an unsupervised analysis method, consisting of feature learning by Stacked Auto-Encoders, K-means clustering for building a data model, and encoding of new images using the model. We utilize this method for image-level and patch-level analysis of breast mammograms. At the image-level, we demonstrate that our cluster-based image encoding is able to identify outlier images such as images with implants or non-standard acquisition views. At the patch-level, we show that image signatures using patch clustering can be used for unsupervised semantic segmentation of breast tissues, as well as for separating mammograms with high and low breast density. We evaluate our suggested methods on large datasets and discuss potential applications for data curation, machine-guided annotation and automatic interpretation of medical images."
	},
	{
		namesBeforeRami: "T. Tlustly, G. Amit and",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "Y. Shoshan and T. Tlusty",
		title: "Mammogram Classification with Ordered Loss, Artificial Intelligence in Medicine 2019 (Oral)-20% acceptance rate,",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "Breast radiologists inspect mammograms with the utmost consideration to capture true cancer cases. Yet, machine learning models are typically designed to perform a binary classification, by joining several severities into one positive class. In such scenarios with mixed gradings, a reliable classifier would make less mistakes between distant severities such as missing a true cancer case and calling it as normal or vise versa. To this end, we suggest a simple yet elegant formulation for training a deep learning model with ordered loss, by increasingly weighting the loss of more severe cases, to enforce importance of certain errors over others. Training with the ordered loss yields fewer severe errors and can decrease the chances of missing true cancers. We evaluated our method on mammogram classification, using a weakly supervised deep learning method. Our data set included over 16K mammograms, with a large set of nearly 2,500 biopsy proven cancer cases. Evaluation of our proposed loss function showed a reduction in severe errors of missing true cancers, while preserving overall classification performance in the original task."
	},
	{
		namesBeforeRami: "",
		RamiBenAri: "Rami Ben-Ari",
		namesAfterRami: "",
		title: "Digital Mammography DREAM Challenge: The Core of Top Performing Methods, IEEE Biomedical and Health Informatics - Special Session, March 2018,",
		linkTo: "#",
		linkName: "Extended Abstract(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "The Digital Mammography DREAM (Dialog for Reverse Engineering Assessment and Methods) offered access to an unprecedented amount of curated data. Teams around the globe had the opportunity to tackle the computational diagnosis of screening mammography, with the vision of changing the work-flow for radiologists of the future. This work summarizes the main concepts behind the top performing methods in the competition phase of the challenge."
	},
	{
		namesBeforeRami: "A. Akselrod-Ballin, L. Karlinsky, S. Alpert, S. Hashoul,",
		RamiBenAri: "Rami Ben-Ari",
		namesAfterRami: "and E. Barkan",
		title: "A Region Based Convolutional Neural Network for Mass Detection and Classification in Breast Mammography Computer Methods in Biomechanics and Biomedical Engineering: Imaging and Visualization (TCIV), 2017",
		linkTo: "#",
		linkName: "",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "J. Sulam,",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "and P. Kisilev",
		title: "Maximizing AUC with Deep Learning for Classification of Imbalanced Mammogram Datasets Eurographics Workshop on Visual Computing for Biology and Medicine, 2017",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "Breast cancer is the second most common cause of death in women. Common computer-aided diagnosis typically demand for carefully annotated data, precise tumor allocation and delineation of the boundaries, which is rarely available in the medical system. In this paper we present a new deep learning approach for classification of mammograms that requires only a global (binary) label. Traditional deep learning methods typically employ classification error losses, which are highly biased by class imbalance – a situation naturally arises in medical classification problems. We hereby suggest a novel loss measure that directly maximizes the Area Under the ROC Curve (AUC), providing an unbiased loss. We validate the proposed model on two mammogram datasets: IMG, comprising of 796 patients, 80 positive (164 images) and 716 negative (1869 images), and the publicly available dataset INbreast. Our results are encouraging, as the proposed scheme achieves an AUC of 0.76 and 0.65 for IMG and INbreast, respectively."
	},
	{
		namesBeforeRami: "G. Amit, O. Hadad, S. Alphert, T. Tlusty, Y. Gur,",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "and S. Hashoul",
		title: "Hybrid Mass Detection in Breast MRI combining Unsupervised Saliency Analysis and Deep Learning MICCAI, 2017",
		linkTo: "#",
		linkName: "",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "A. Akselrod-Ballin, L. Karlinsky and S. Hashoul",
		title: "Domain Specific Convolutional Neural Nets for Detection of Architectural Distortion in Mammograms ISBI, 2017",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "Detection of Architectural distortion (AD) is important for ruling out possible pre-malignant lesions in breast, but due to its subtlety, it is often missed on the screening mammograms. In this work we suggest a novel AD detection method based on region proposal convolution neural nets (R-CNN). When the data is scarce, as typically the case in medical domain, R-CNN yields poor results. In this study, we suggest a new R-CNN method addressing this shortcoming by using a pretrained network on a candidate region guided by clinical observations. We test our method on the publicly available DDSM data set, with comparison to the latest faster R-CNN and previous works. Our detection accuracy allows binary image classification (normal vs. containing AD) with over 80% sensitivity and specificity, and yields 0.46 false-positives per image at 83% true-positive rate, for localization accuracy. These measures significantly improve the best results in the literature."
	},
	{
		namesBeforeRami: "G. Amit",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "O. Hadad, E. Monovitch, N. Granot and S. Hashoul",
		title: "Classification of Breast MRI Lesions using Small-Size Training Sets: Comparison to Deep Learning Approaches SPIE-Medical Imaging, 2017",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "Diagnostic interpretation of breast MRI studies requires meticulous work and high expertise. Computerized algorithms may assist radiologists by automatically characterizing the detected lesions. Deep learning approaches have shown promising results in natural image classification, but their applicability to medical imaging is limited by the deficiency of large annotated training sets. In this work, we address automatic classification of breast MRI lesions using two different deep learning approaches. We propose a novel image representation for dynamic contrast enhanced (DCE) breast MRI lesions, which combines the morphological discriminating between benign and malignant lesions: training a designated convolutional neural network and using a pre-trained deep network to extract features for a shallow classifier. The domain-specific trained network provided higher classification accuracy, compared to the pre-trained model, with area under the ROC curve of 0.91 vs. 0.81 and accuracy of 0.83 vs. 0.71. Similar accuracy was achieved in classifying benign lesions, malignant lesions and normal tissue images. The trained network was able to improve by using the multi-channel image representation, and was more robust to reductions in the size of the training set. A small-size convolutional neural network can learn to accurately classify findings in medical images using as little as few hundreds of images from few dozens of patients. With sufficient data augmentation, such network can be trained to outperform a pre-trained out-of-domain classifier. Development of domainspecific deep-learning models for medical imaging may facilitate technological advancements in computeraided diagnosis."
	},
	{
		namesBeforeRami: "A. Akselrod-Ballin, L. Karlinsky, S. Alpert, S. Hashoul,",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "E. Barkan",
		title: "A Region Based Convolutional Network for Tumor Detection and Classification in Breast Mammography MICCAI-DLMIA Workshop, 2016",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "This paper addresses the problem of detection and classification of tumors in breast mammograms. We introduce a novel system that integrates several modules including a breast segmentation module, and a fuzzy logic prior anatomical module for fibroglan ular tissue segmentation into a modified faster regionbased convolutional network. Our method is evaluated on a large multi-center clinical dataset and compared to ground truth annotated by expert radiologists. Preliminary experimental results show the high accuracy and efficiency obtained by the suggested network structure. As the volume and complexity of data in healthcare continues to accelerate generalizing such an approach may have a profound impact on patient care in many applications."
	},
	{
		namesBeforeRami: "S. Hashoul, E. Walach, A. Khateeb, A. Walach, G. Amit,",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "E. Barkan and P. Kisilev",
		title: "Efficiency of an automatic decision support system in facilitating diagnosis of Thyroid diseases RSNA 2016.",
		linkTo: "#",
		linkName: "",
		achievement: "",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "Y. Frommer,",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "and N. Kiryati",
		title: "Adaptive Shape from Focus with High order Derivatives IMVC 2016",
		linkTo: "#",
		linkName: "",
		achievement: "Best Student Paper",
		imageSource: "",
		abstractContent: ""
	},
	{
		namesBeforeRami: "",
		RamiBenAri: "Rami Ben-Ari,",
		namesAfterRami: "A. Zlotnick, S. Hashoul",
		title: "A Weakly Labeled Approach for Breast Tissue Segmentation and Breast Density Estimation in Digital Mammography, IEEE International Symposium on Bionmedical Imaging (ISBI) 2016.",
		linkTo: "#",
		linkName: "Paper(PDF)",
		achievement: "",
		imageSource: "images/home-placeholder.jpg",
		abstractContent: "Breast tissue segmentation is a fundamental task in digital mammography. Commonly, this segmentation is applied prior to breast density estimation. However, observations show a strong correlation between the segmentation parameters and the breast density, resulting in a chicken and egg problem. This paper presents a new method for breast segmentation, based on training with weakly labeled data, namely breast density categories. To this end, a Fuzzy-logic module is employed computing an adaptive parameter for segmentation. The suggested scheme consists of a feedback stage where a preliminary segmentation is used to allow extracting domain specific features from an early estimation of the tissue regions. Selected features are then fed into a fuzzy logic module to yield an updated threshold for segmentation. Our evaluation is based on 50 fibroglandular delineated images and on breast density classification, obtained on a large data set of 1243 full-field digital mammograms. The data set contained images from different devices. The proposed analysis provided an average Jaccard spatial similarity coefficient of 0.4 with improvement of this measure in 70\% of cases where the suggested module was applied. In breast density classification, average classification accuracy of 75\% was obtained, which significantly improved the baseline method (67.4\%). Major improvement is obtained in low breast densities where higher threshold levels rejects false positive regions. These results show a promise for the clinical application of this method in breast segmentation, without the need for laborious tissue annotation."
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