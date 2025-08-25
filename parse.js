const url = 'refs/NicolasRandazzoResume.pdf';

// SECTION HEADINGS to look for in the PDF text
const sections = ["Education", "Experience", "Projects", "Skills"];

function structureResumeText(rawText) {
    let structured = {};
    let current = "Header";

    rawText.split(/\n/).forEach(line => {
        line = line.trim();
        if (!line) return;

        // If line matches a section heading, switch
        if (sections.includes(line)) {
            current = line;
            structured[current] = [];
        } else {
            if (!structured[current]) structured[current] = [];
            structured[current].push(line);
        }
    });

    return structured;
}

const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function (pdf) {
    let textContent = [];

    const numPages = pdf.numPages;
    let promises = [];

    for (let i = 1; i <= numPages; i++) {
        promises.push(
            pdf.getPage(i).then(page =>
                page.getTextContent().then(text => {
                    const strings = text.items.map(item => item.str);
                    textContent.push(strings.join("\n"));
                })
            )
        );
    }

    Promise.all(promises).then(() => {
        const raw = textContent.join("\n");
        const structured = structureResumeText(raw);

        let html = "";
        for (const [section, lines] of Object.entries(structured)) {
            if (section === "Header") {
                html += `<div class="header"><p>${lines.join("<br>")}</p></div>`;
            } else {
                html += `<div class="section"><h2>${section}</h2><ul>`;
                lines.forEach(l => html += `<li>${l}</li>`);
                html += `</ul></div>`;
            }
        }

        document.getElementById("resume-structured").innerHTML = html;
    });
});
