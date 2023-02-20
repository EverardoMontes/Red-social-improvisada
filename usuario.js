class Usuario{
    constructor(){
      this.datos = [
        {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        },
        {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
        }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
        }
        },
        {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
        }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
        }
        },
        {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
        }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
        }
        },
        {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
        }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
        }
        },
        {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
        }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
        }
        } ]; 
    }
    agregarUsuario(nuevo){
      nuevo.id = Number(this.buscarUltimoId()+1);
      this.datos.push(nuevo);
    }
    buscarUltimoId(){
      let aux;
      for(let i=0; i<=this.datos.length; i++){
        aux = Number(this.datos[i].id);
        if(this.datos[i+1]!=undefined){
          if (aux<Number(this.datos[i+1].id)) {
            aux = Number(this.datos[i+1].id);
          }
        }
        else{
          return aux;
        }
      }
      return aux;
      
    }
    buscarUsuario(usuarionombre){
      let aux;
      for(let i=0;i<=this.datos.length;i++){
        if(this.datos[i].username == usuarionombre){
          //return "Id :" + this.datos[i].id + "Nombre :" + this.datos[i].name +"Nombre Usuario :" + this.datos[i].username +"Email :" + this.datos[i].email +"Direccion :" + this.datos[i].address +"Calle :" + this.datos[i].street +"Suite :" + this.datos[i].suite + "Ciudad :" + this.datos[i].city + "zipcode :" + this.datos[i].zipcode + "Geo :" + this.datos[i].geo + "Lat :" + this.datos[i].lat +"Lng :" + this.datos[i].lng + "telefono :" + this.datos[i].phone + "Sitio web :" + this.datos[i].website + "Nombre compañía :" + this.datos[i].id +
          return this.datos[i];
          //O ACASO REGRESAMOS LA POSICIÓN??? ES DECIR I
        }
      }
     
      return null;
    }
    listar(){
     return this.datos;
    }
}
//Todo esto para probar que ya funciona esta parte del código

let bdUsers = new Usuario();
console.log(bdUsers.datos[1]);
console.log("El ultimo id es: "+bdUsers.buscarUltimoId());
let nuevo = {
  "id": " ",
  "name": "asd asd",
  "username": "les",
  "email": "Ter@billy.biz",
  "address": {
  "street": "Rex Trail",
  "suite": "S0",
  "city": "Howemouth",
  "zipcode": "58099",
  "geo": {
  "lat": "2418",
  "lng": "214"
  }
  },
  "phone": "210.32",
  "website": "els.io",
  "company": {
  "name": "Joup",
  "catchPhrase": "Configurask-force",
  "bs": "generate elers"
  }
  };
bdUsers.agregarUsuario(nuevo);
console.log("El ultimo id es: "+bdUsers.buscarUltimoId());
console.log(bdUsers.buscarUsuario("les"));
console.log(bdUsers.listar());
