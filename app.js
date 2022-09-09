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

