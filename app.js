let CantidadDeProductos = 0;

const menu = document.getElementById("encabezado")
  const nav = document.createElement("nav")

  const actualizarCantidadDeProductos = (cantidad) =>{

 
  menu.innerHTML=""
  nav.classList.add("navbar","navbar-expand-lg","bg-light")
  console.log()
  nav.innerHTML=`<div class="container-fluid ">
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
    <button onclick=dibujarcarrito() type="button" class="btn btn-secondary carrito_notificacion" >
        <i class="fa-solid fa-cart-shopping"></i>
        <span id="carrito_cantidad" class="badge text-bg-secondary">${cantidad}</span>
    </button>
    <span class="navbar-text">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search">
            <button class="btn btn-outline-secondary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
    </span>
  </div>
  </div>
  `
  menu.appendChild(nav)
  
}
actualizarCantidadDeProductos(CantidadDeProductos)
class Producto {
    constructor(nombre,precio,stock,imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
    }
  }
let productos =[];
fetch("./datos.json")
.then(resp => resp.json())
.then((date) => {
    mostrarProductos(date)
    console.log(date)
    }) 

let limpiar = 0


const galeria = document.getElementById("galeria")

const mostrarProductos = (a) =>{
    if (limpiar === 1)
    {  
      galeria.innerHTML =""
    }     
     productos = a
     productos.forEach((producto,i) =>{
     const card = document.createElement("div")
     card.classList.add("card","col-lg-4","col-md-12","col-sm-12")
     card.innerHTML =
     `<div class="card border-dark text-center index_menu" style="width: 20rem;">
      <img src="${producto.imagen}" class="d-block w-100" alt="imagen ropa">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p>$${producto.precio}</p>
      <p>Stock: ${producto.stock}</p>
      <a onclick="agregarCarrito(${i})" class="btn btn-secondary">Agregar al carrito</a>
      </div>
      </div>`
      galeria.appendChild(card)
      })
      
  }
  
  let carrito=[]
  let modalcarrito = document.getElementById("cart") 
  const agregarCarrito = (i) =>{
    const indiceEncontrado = carrito.findIndex((elemento)=>{
    return elemento.id === productos[i].id
    })

    CantidadDeProductos = CantidadDeProductos + 1
    console.log(CantidadDeProductos)
   
    limpiar =1
    if (indiceEncontrado === -1){
      const nuevoProducto = productos[i]
      nuevoProducto.cantidad = 1
      nuevoProducto.stock -= 1
      if (nuevoProducto.stock < 0)
      {
        swal(`No hay stock ${nuevoProducto.nombre} `,"", "error");
      }
      else{
        carrito.push(nuevoProducto)
        
        actualizarCantidadDeProductos(CantidadDeProductos)
        mostrarProductos(productos)
      }          
    }
    else {
      carrito[indiceEncontrado].cantidad += 1
      carrito[indiceEncontrado].stock -= 1
      if (carrito[indiceEncontrado].stock < 0)
      {
        
        swal(`No hay stock ${carrito[indiceEncontrado].nombre} `,"", "error");
      }
      else
      { 
        actualizarCantidadDeProductos(CantidadDeProductos)
        mostrarProductos(productos)
      }        
    }
  }
  let total = 0
  const dibujarcarrito = () =>{
    modalcarrito.innerHTML= `<p class="titulo"><strong>CARRITO DE COMPRAS</strong></p> `
      if(carrito.length >0){
          carrito.forEach((producto,i) =>{
            total = total + (producto.precio*producto.cantidad)
            
            const carritoContainer = document.createElement("div")
            carritoContainer.className = "carrito";
            carritoContainer.innerHTML =
            `<img src="${producto.imagen}"/>
            <div class="tituloCarrito">
              ${producto.nombre}
            </div>
            <div class="tituloCarrito">
            Cantidad:
            </div>
            <div>
            ${producto.cantidad}
            </div>
            <div class="tituloCarrito">
              Precio:
            </div>
            <div>
              $${producto.precio}
            </div>
            <div class="tituloCarrito">
              Subtotal: 
            </div>
            <div class="tituloCarrito">
              $${producto.precio * producto.cantidad}
            </div>
            <a onclick="eliminarDeCarrito(${i})" class="btn btn-secondary">Eliminar</a>`
            modalcarrito.appendChild(carritoContainer)
        })
        const totalizador = document.createElement("div");
        totalizador.innerHTML = `<div class="Total"> TOTAL: $ ${total}</div>
        <button class= "btn btn-warning botonComprar" onClick="finalizar()"> Comprar </button>`;
        modalcarrito.appendChild(totalizador);
      }
      else{const carritoContainer = document.createElement("div")
      carritoContainer.className = "carrito";
      carritoContainer.innerHTML =`<p>No hay productos</p>`
      modalcarrito.appendChild(carritoContainer)
      }
  }
  const eliminarDeCarrito = (i) =>{
   carrito.splice(i,1)
   swal("Producto eliminado","", "success");
   CantidadDeProductos=CantidadDeProductos-1
   actualizarCantidadDeProductos(CantidadDeProductos)
   dibujarcarrito()
  }
  class datosCompra{
    constructor(nombre,email,direccion){
     this.nombre=nombre
     this.email =email
     this.direccion=direccion
    }
  }
  function mostrarMensaje(){
    const datos = localStorage.getItem("datosCompra") 
    const obj = JSON.parse(datos)
    swal("Compra realizada! ", `Gracias ${obj.nombre}. Pagaste $${total}. Los datos de la compra se enviarán a tu correo ${obj.email}`, "success");
      
  }
  
  function cargarDatosCliente(){
    let nombre = document.getElementById("Nombre").value
    let email= document.getElementById("email").value
    let direccion= document.getElementById("direccion").value
    let datos = new datosCompra(nombre,email,direccion)
    const aJson= JSON.stringify(datos)
    localStorage.setItem("datosCompra",aJson)
    mostrarMensaje()
    pagar.innerHTML = ""
  }
  const pagar = document.createElement("div");
  const finalizar = (i) =>{
    modalcarrito.innerHTML=""
    pagar.classList.add("row")
    pagar.innerHTML = `
    <p class="titulo"><strong>Ingrese datos para envío</strong></p> 
    <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label">Nombre completo</label>
    <input type="" class="form-control" id="Nombre" aria-describedby="emailHelp">
    </div>
    <div class="mb-2">
    <label for="" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
    <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label">Dirección</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" id="direccion">
    </div>
    <div class="linea">
    </div>
    <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label"><strong>Vas a pagar $${total}</strong></label>
    </div>
    <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label">Datos de la tarjeta</label>
    <input type="tarjeta" class="form-control" aria-describedby="" id="tarjeta">
    </div>
    <button type="" class="btn btn-success" id="boton" onclick="cargarDatosCliente()">Enviar</button>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 ">
    <img src="./imagenes/sweater_1.png"  class="img-fluid"  alt="imagen muffin publicidad"..">
    </div>
    </div>`
    modalcarrito.appendChild(pagar);
  }
  