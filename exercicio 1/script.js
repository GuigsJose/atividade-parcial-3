function snakeCase(texto){
    texto = texto.toLowerCase();

    texto = texto.replace(/\s+/g,'_');

    return texto;
}

console.log(snakeCase("OlA TUdo beM"));
console.log(snakeCase("EsSe É o SnaKe CASE"));

