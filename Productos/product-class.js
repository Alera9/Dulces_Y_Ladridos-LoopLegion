/* Creación de clases 
 
 */
const fs = require("node:fs");
class Postre {
  #stock;
  constructor(name, dogoName, description, price, pieces) {
    
    this.name = name;
    this.dogoName = dogoName;
    this.description = description;
    this.price = price;
    this.pieces = pieces;
    this.#stock = pieces >0 ? true: false;
    this.imagen = 1;

    /* idea función para las interfaces objetos tarjetas */
    console.log(`Me llamo ${this.name}`);
  }
}
class Galleta extends Postre {
  #stock;
  constructor(name, dogoName, description, price, pieces,classification){
    super(name, dogoName, description, price, pieces);
    this.#stock = pieces >0 ? true: false;
    this.classification = "Galleta"
  };
}
class Brownie extends Postre {
  #stock;
  constructor(name, dogoName, description, price, pieces,classification){
    super(name, dogoName, description, price, pieces);
    this.#stock = pieces >0 ? true: false;
    this.classification = "Brownie"
  };
}
class Pasteles extends Postre {
  #stock;
  constructor(name, dogoName, description, price, pieces,classification){
    super(name, dogoName, description, price, pieces);
    this.#stock = pieces >0 ? true: false;
    this.classification = "Pasteles"
  };
}
// class Brownies {
//   #stock;
//   constructor(name) {
//     this.name = name;
//     this.dogoName = "Galleta perro";
//     this.description = "Default";
//     this.price = 50;
//     this.pieces = 10;
//     this.#stock = true;
//     this.imagen = 1;

//     /* idea función para las interfaces objetos tarjetas */
//     console.log(`Me llamo ${this.name}`);
//   }
// }
//constructor(name, dogoName, description, price, pieces)
const arregloDeProductos = [
  new Postre(
    "name",
    "dogoName",
    "description",
    "price",
    "pieces",
    20
  ),
  new Galleta(
    "Galleta de Chocolate",
    "Terrier de Chocolate",
    "Galleta de chocolate con relleno de chocolate",
    35,
    1,
  ),
    new Galleta(
     "Galleta de Mantequilla",
     "Corgi Cookies",
     "Galleta de mantequilla suave con forma de Corgi",
     120,
     6,
    ), 

    new Galleta(
        "Galleta de Avena",
        "Poodle Oat Puffs",
        "Galleta de avena bañadas en azucar glass",
        35,
        1,
    ), 
   
    new Galleta(
        "Galleta de Chispas",
        "Dalmata Delight",
        "Galleta de mantequilla con chispas de chocolate",
        35,
        1,
    ), 


  new Brownie(
    "Brownie de Chocolate",
    "Labrabownie",
    "Pastelillo de chocolate con relleno de chocolate",
    50,
    1,
  ),
  new Brownie(
    "Brownie de Frambuesa",
    "Pastorcito de Frambuesa",
    "Pastelillo de chocolate con decoracion de frambuesa",
    50,
    1,
  ),
  new Pasteles(
    "Pastel de Tres Leches",
    "Husky de 3 Leches",
    "Pastel de Tres Leches",
    50,
    1,
  ),

  new Pasteles(
    "Pastel de Chocolate",
    "Chocolate Retriever",
    "Pastel de chocolate con cubierta de chocolate",
    50,
    1,
  ),

  new Pasteles(
    "Pastel de Zanahoria",
    "Pug de zanahoria /carrot bite",
    "Pastel de zanahoria con betún de queso crema ",
    50,
    1,
  ),

  new Pasteles(
    "Pastel Cheesecake",
    "Cheehuhua Dream",
    "Pastel de cheesecake con decoracion de chocolate",
    50,
    1,
  ),

];
console.log(arregloDeProductos);
arregloDeProductos.push(
  new Postre(
    "galletaChispas",
    "Dalmata Delight",
    "Galleta de mantequilla con chispas de chocolate",
    35
  )
);
console.log(arregloDeProductos);
//usar un setItem() para guardar arreglo de productos en localstorage

// const addDataToJson = (objectToSave) => {
//getItem traer el arreglo para crear el archivo json
//   fs.writeFile("archivo.json", JSON.stringify(objectToSave), "utf8", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// };
// addDataToJson(arregloDeProductos);
// export { Galletas, Brownies, /*addDataToJson*/ };


