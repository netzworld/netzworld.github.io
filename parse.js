var curResume = "";

function loadResume(ref){
	const resumeSec = document.getElementById("resume-structured");
	const div = resumeSec.createElement("div");
	const pdf1 = await pdfjsLib.getDocument(ref);
	console.log(pdf1);


}

function parsePdfHtml(file){


}



function downloadResume(){



}

