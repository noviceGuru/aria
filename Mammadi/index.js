import { names , cats } from "./data/names.js";
import createH1TagsForBody from "./js/amin.js";


console.log(names, cats)

names.forEach(el=>createH1TagsForBody(el));
cats.forEach((el)=>createH1TagsForBody(el));