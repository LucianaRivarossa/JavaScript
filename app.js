function iniciar(){
    alert(`Tienda de ropa`)
}
function saludar(nombre){
    alert(`Bienvenido ${nombre}`)
}
function mostrarMenu(){
    opcion = prompt(`¿Qué desea comprar? \n 1. Vestido $5.000 \n 2. Remera $2.000\n 3. Jean $6.000\n 4. Sweater $1.000 \n 5. Producto Exclusivo en oferta \n 6. Salir `)
}
function calcularTotal(productos){
    let totalcompra = productos.reduce((accum, producto) => {
       return accum + producto.precio * producto.cantidad 
    },0);
    return totalcompra
}
function listarCompra(productos){
    let lista = ""
    //for (let i = 0 ; i< productos.length ; i++){
      //  lista = lista + productos[i].cantidad + " " + productos[i].nombre +"\n "
    //}
    //return lista
    productos.forEach((producto) => {
        lista += producto.cantidad + " " + producto.nombre +"\n "
    });
    return lista
}
function comprarProducto(){
    let cantidad=0
    nombre=""
    precio=0
    if (opcion ==="1"){
        nombre= "Vestido"
        precio = 5000
    }
    else if (opcion ==="2"){
        nombre= "Remera"
        precio = 2000
    }
    else if (opcion ==="3"){
        nombre= "Jean"
        precio=6000
    }
    else if (opcion ==="4"){
        nombre= "Sweater"
        precio=1000
    }
    else if (opcion=== "5"){
        const filtrado = productosExclusivos.filter((producto) => producto.precio < 12000);
        for (const filtra of filtrado){
            nombre = filtra.nombre
            precio = filtra.precio
        }       
    }
    cantidad= prompt(`Ingrese cantidad de ${nombre} a comprar a $${precio} cada uno `)
    let articuloIngresado = new Producto(nombre, precio, cantidad);
    productos.push(articuloIngresado);     
}
function salir(){
    alert(`Gracias por su visita`)
}

iniciar()
let encabezado = document.getElementById("encabezado");
let nav= document.createElement("nav");
nav.classList.add("navbar","navbar-expand-lg","bg-light")
nav.innerHTML = `<div class="container-fluid ">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse " id="navbarText">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Winter Sale</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">New Collection</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">All Shop</a>
    </li>
    <a class="navbar-brand titulo "><span><strong>Mora Indumentaria</strong></span> </a>
  </ul>
  <button type="button" class="btn btn-secondary carrito_notificacion">
      <i class="fa-solid fa-cart-shopping"></i>
      <span class="badge text-bg-secondary">4</span>
  </button>
  <span class="navbar-text">
      <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search">
          <button class="btn btn-outline-secondary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
  </span>
</div>
</div>`
encabezado.appendChild(nav)
let main = document.getElementById("main_carrosuel");

let galeria= document.createElement("div");
console.log(galeria)
galeria.innerHTML = `

<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
  <img src="imagenes/banner_1.png" class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
  <img src="imagenes/banner_2.png" class="d-block w-100" alt="...">
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-4 col-md-12 col-sm-12">
  <div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="./imagenes/remera_1.png" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
        <h5 class="card-title">Remera Lisette </h5>
        <p>$1.500</p>
        <a href="./paginas/productos.html" class="btn btn-secondary">Agregar al carrito</a>
      </div>
  </div>
</div>
<div class="col-lg-4 col-md-12 col-sm-12">
  <div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="./imagenes/vestido_1.png" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
        <h5 class="card-title">Vetido Fiorella</h5>
        <p>$2.500</p>
        <a href="./paginas/productos.html" class="btn btn-secondary">Agregar al carrito</a>
      </div>
  </div>
</div>
<div class="col-lg-4 col-md-12 col-sm-12">
  <div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="./imagenes/jean_1.png" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
        <h5 class="card-title"> Jean Holanda</h5>
        <p>$5.500</p>
        <a href="./paginas/productos.html" class="btn btn-secondary">Agregar al carrito</a>
      </div>
  </div>
</div>
<div class="col-lg-4 col-md-12 col-sm-12">
  <div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="./imagenes/camisa_1.png" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
        <h5 class="card-title">Camisa Azul</h5>
        <p>$1.800</p>
        <a href="./paginas/productos.html" class="btn btn-secondary">Agregar al carrito</a>
      </div>
  </div>
</div>
<div class="col-lg-4 col-md-12 col-sm-12">
  <div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="./imagenes/sweater_1.png" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
        <h5 class="card-title">Sweater Isa</h5>
        <p>$2.500</p>
        <a href="./paginas/productos.html" class="btn btn-secondary">Agregar al carrito</a>
      </div>
  </div>
</div>
<div class="col-lg-4 col-md-12 col-sm-12">
  <div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="./imagenes/remera_2.png" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
        <h5 class="card-title"> Remera Paris </h5>
        <p>$800</p>
        <a href="./paginas/productos.html" class="btn btn-secondary">Agregar al carrito</a>
      </div>
  </div>
</div>
`
main.appendChild(galeria)
nombre= prompt(`Ingrese nombre de usuario`)
contraseña= prompt(`Ingrese contraseña`)
let opcion = 0
const productos = [];
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
const productosExclusivos =[
    {nombre:"Vestido Exclusivo", precio: 15000 , cantidad: 1000},
    {nombre:"Remera Exclusivo", precio: 12000 , cantidad: 1000},
    {nombre:"Jean Exclusivo", precio: 16000 , cantidad: 1000},
    {nombre:"Sweater Exclusivo", precio: 11000 , cantidad: 1000},
  ];
if (contraseña === "123"){
    saludar(nombre)
    mostrarMenu()
    while(opcion != 6){
        comprarProducto()
        respuesta = prompt("¿Desea seguir comprando?(si/no)")
        if (respuesta === "si" || respuesta === "Si" || respuesta === "SI"){
            mostrarMenu()
        }
        else if (respuesta === "no" || respuesta === "No" || respuesta === "NO")
       {
            opcion ="6"
       }   
    }
    total_compra = calcularTotal(productos)
    lista = listarCompra(productos)
    if (lista != "" && total_compra != 0)
    {
        alert(`Usted compró:\n ${lista}`)
        alert(`El total de la compra es: $${total_compra}`)
    }
    salir()
}

