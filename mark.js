const marked = require("marked");
const { readFileSync } = require("fs");

const targetFile = process.argv[2];

console.info(`Processing File: ${targetFile}`);

const renderer = new marked.Renderer();
renderer.code = (code, lang) => {
	return `<p>${code}</p>`;
};

console.log(
	marked(readFileSync(targetFile, "utf8"), {
		renderer: renderer
	})
);
