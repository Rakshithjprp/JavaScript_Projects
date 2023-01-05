
const camelcase = document.querySelector("#camel-case");
const pascalcase = document.querySelector("#pascal-case");
const kebabcase = document.querySelector("#kebab-case");
const screamingkebabcase = document.querySelector("#screaming-kebab-case");
const snakecase = document.querySelector("#snake-case");
const screamingsnakecase = document.querySelector("#screaming-snake-case");
const naming_conversion = document.querySelector(".naming_conversion");
const text = document.querySelector("#text");




camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
};
  

const toPascalCase = str =>
    str
        .replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());


        const toSnakeCase = str => {
   const strArr = str.split(' ');
   const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
   }, []);
   return snakeArr.join('_');
};

       const toScreamingSnakeCase = str => {
   const strArr = str.split(' ');
   const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toUpperCase());
   }, []);
   return snakeArr.join('_');
};
    
    

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
        .join('-');

const toScreamingKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toUpperCase())
        .join('-');
    

 

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

//         function cases() {
           
//             camelcase.innerText = document.getElementById("text").value;
//             camelcase.innerText = camelize(camelcase.innerText);
// }

naming_conversion.addEventListener('click', function onClick(event) {

    camelcase.innerText = document.getElementById("text").value;
    camelcase.innerText = camelize(camelcase.innerText);

    pascalcase.innerText = document.getElementById("text").value;
    pascalcase.innerText = toPascalCase(pascalcase.innerText);

    snakecase.innerText = document.getElementById("text").value;
    snakecase.innerText = toSnakeCase(snakecase.innerText);

    screamingsnakecase.innerText = document.getElementById("text").value;
    screamingsnakecase.innerText = toScreamingSnakeCase(screamingsnakecase.innerText);

    kebabcase.innerText = document.getElementById("text").value;
    kebabcase.innerText = toKebabCase(kebabcase.innerText);
    
    screamingkebabcase.innerText = document.getElementById("text").value;
    screamingkebabcase.innerText = toScreamingKebabCase(screamingkebabcase.innerText);

});





