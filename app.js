
class Producto {
    constructor(nombre,precio,stock,imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
    }
  }
const productos =[
    {id:0,nombre:"Remera", precio: 15000 , stock: 10,imagen:"./imagenes/remera_1.png"},
    {id:1,nombre:"Vestido", precio: 12000 , stock: 5,imagen:"./imagenes/vestido_1.png" },
    {id:2,nombre:"Jean", precio: 16000 , stock: 3,imagen:"./imagenes/jean_1.png" },
    {id:3,nombre:"Camisa", precio: 11000 , stock: 11,imagen:"./imagenes/camisa_1.png" },
    {id:4,nombre:"Sweater", precio: 11000 , stock: 2,imagen:"./imagenes/sweater_1.png" },
    {id:5,nombre:"Remera Paris", precio: 11000 , stock: 1,imagen:"./imagenes/remera_2.png" },
  ];
  let limpiar = 0
  const galeria = document.getElementById("galeria")
  const mostrarProductos = () =>{
    if (limpiar === 1)
    {  
      galeria.innerHTML =""
    }     
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
  mostrarProductos()
  let carrito=[]
  let modalcarrito = document.getElementById("cart") 
  const agregarCarrito = (i) =>{
    const indiceEncontrado = carrito.findIndex((elemento)=>{
    return elemento.id === productos[i].id
    })
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
        dibujarcarrito()
        mostrarProductos()
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
        dibujarcarrito()
        mostrarProductos()
      }        
    }
  }
  let total = 0
  const dibujarcarrito = () =>{
    modalcarrito.innerHTML=" "
      if(carrito.length >0){
          carrito.forEach((producto,i) =>{
            total = total + (producto.precio*producto.cantidad)
            const carritoContainer = document.createElement("div")
            carritoContainer.className = "carrito";
            carritoContainer.innerHTML =
            `<img src="${producto.imagen}"/>
            <div>
              ${producto.nombre}
            </div>
            <div>
            Cantidad:${producto.cantidad}
            </div>
            <div>
              Precio:$${producto.precio}
            </div>
            <div>
              Subtotal: $${producto.precio * producto.cantidad}
            </div>
            <a onclick="eliminarDeCarrito(${i})" class="btn btn-secondary">Eliminar</a>`
            modalcarrito.appendChild(carritoContainer)
        })
        const totalizador = document.createElement("div");
        totalizador.innerHTML = `<div> total $ ${total}</div>
        <button class= "btn btn-info" onClick="finalizar()"> Comprar </button>`;
        modalcarrito.appendChild(totalizador);
      }
  }
  const eliminarDeCarrito = (i) =>{
   carrito.splice(i,1)
   swal("Producto eliminado","", "success");
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
    swal("Compra realizada!", `Gracias ${obj.nombre} Los datos de la compra se enviarán a tu correo ${obj.email}`, "success");
      
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
    pagar.innerHTML = `<div class= "row"> 
    <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre completo</label>
    <input type="" class="form-control" id="Nombre" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
    <label for="" class="form-label">Email</label>
    <input type="email" class="form-control" id="email">
    <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Dirección</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" id="direccion">
    </div>
    <button type="" class="btn btn-warning" id="boton" onclick="cargarDatosCliente()">Enviar</button>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12">
    <img src="./imagenes/sweater_1.png"  class="img-fluid"  alt="imagen muffin publicidad"..">
    </div>
    </div>`
    modalcarrito.appendChild(pagar);
  }
