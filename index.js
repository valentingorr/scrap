const JsonDataBase = require("json-atlas");

const JsonDb = new JsonDataBase({  dir: "./data/" });
const db = JsonDb.connectTo("quotes");

db.table("authors").schema = {
	alias: "author",
	unique: true,
	items: {
		name: {
			unique: true,
			required: true,
			type: "string"
		},
		link: {
			unique: true,
			required: true,
			type: "string"
		},
		profession: {
			required: true,
			type: "string"
		},
		country: {
			required: true,
			type: "string"
		}
	}
};

const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// puppeteer.launch({
// 	headless: false
// }).then(async browser => {
// 	const page = await browser.newPage();
// 	for(let i = db.items.authorsIndex || 1; i <= 227; i++) {
// 		await page.goto(`https://www.linternaute.fr/citation/auteur/11/${i}/`);
// 		const authors = await page.$$eval("table:nth-child(2) tr", nodes => nodes.map(node => {
// 			if(!node.querySelector("a.nom_personnage")) return false;
// 			return {
// 				name: node.querySelector("td:nth-child(2)").innerText,
// 				country: node.querySelector("td:nth-child(3)").innerText,
// 				profession: node.querySelector("td:nth-child(4)").innerText,
// 				link: node.querySelector("a.nom_personnage").href
// 			};
// 		}).filter(item => item !== false));
// 		db.table("authors").insert(authors);
// 		db.items.authorsIndex = (i + 1);	
// 	}
// });

// puppeteer.launch({
// 	headless: false
// }).then(async browser => {
// 	const page = await browser.newPage();
// 	for(let i = db.items.authorsIndex || 1; i <= 227; i++) {
// 		await page.goto(`https://www.linternaute.fr/citation/auteur/11/${i}/`);
// 		const authors = await page.$$eval("table:nth-child(2) tr", nodes => nodes.map(node => {
// 			if(!node.querySelector("a.nom_personnage")) return false;
// 			return {
// 				name: node.querySelector("td:nth-child(2)").innerText,
// 				country: node.querySelector("td:nth-child(3)").innerText,
// 				profession: node.querySelector("td:nth-child(4)").innerText,
// 				link: node.querySelector("a.nom_personnage").href
// 			};
// 		}).filter(item => item !== false));
// 		db.table("authors").insert(authors);
// 		db.items.authorsIndex = (i + 1);	
// 	}
// });

db.table("authors").map(item => true, item => {
	return {...item, done: false};
});