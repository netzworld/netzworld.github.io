var curResume = "";
function loadResume(ref){
	const resumeSec = document.getElementById("resume-structured");
	curResume = ref;	
	const div = document.createElement("canvas");
	div.id = "pdf-canvas";
	resumeSec.appendChild(div);
	const pdf1 = pdfjsLib.getDocument(ref);
	pdf1.promise.then((pdf) => {
		pdf.getPage(1).then((page) => {
			var scale = 1.5;
			var viewport = page.getViewport({ scale: scale, });
			// Support HiDPI-screens.
			var outputScale = window.devicePixelRatio || 1;
			var canvas = document.getElementById('pdf-canvas');
			var context = canvas.getContext('2d');

			canvas.width = Math.floor(viewport.width * outputScale);
			canvas.height = Math.floor(viewport.height * outputScale);
			canvas.style.width = Math.floor(viewport.width) + "px";
			canvas.style.height =  Math.floor(viewport.height) + "px";

			var transform = outputScale !== 1
			  ? [outputScale, 0, 0, outputScale, 0, 0]
			  : null;

			var renderContext = {
			  canvasContext: context,
			  transform: transform,
			  viewport: viewport
			};

page.render(renderContext);
		});
	});

}
var random = Math.floor(Math.random()*2);
// Random Resume each time the site loads!
loadResume(random % 2 == 0 ? "refs/NicolasRandazzoResumeSWE.pdf" : "refs/NicolasRandazzoResumeDE.pdf");
function downloadResume(element){
	if(curResume == "") return;
	const a = document.createElement("a");
	a.href = curResume;
	element.appendChild(a);
	a.click();
	element.removeChild(a);
console.log("downloading ", a.href);

}
