function iniciar(){
    alert(`Tienda de ropa`)
}
function saludar(nombre){
    alert(`Bienvenido ${nombre}`)
}
function mostrarMenu(){
    let categoria = Number(prompt(`¿Qué desea comprar? \n 1. Vestido $5.000 \n 2. Remera $2.000\n 3. Jean $6.000\n 4. Sweater $1.000 \n 5. Salir `))
    return categoria
}
function calcularTotal(productos){
    let totalcompra = 0
    for (let i = 0 ; i< productos.length ; i++){
        totalcompra = totalcompra + productos[i].precio * productos[i].cantidad
    }
    return totalcompra
}
function listarCompra(productos){
    let lista = ""
    for (let i = 0 ; i< productos.length ; i++){
        lista = lista + productos[i].cantidad + " " + productos[i].nombre +"\n "
    }
    return lista
}
function comprarProducto(codigo_producto){
    let cantidad=0
    nombre=""
    precio=0
    if (codigo_producto ===1){
        nombre= "Vestido"
        precio = 5000
        console.log("entro")
    }
    else if (codigo_producto ===2){
        nombre= "Remera"
        precio = 2000
    }
    else if (codigo_producto ===3){
        nombre= "Jean"
        precio=6000
    }
    else if (codigo_producto ===4){
        nombre= "Sweater"
        precio=1000
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
let codigo_producto=0
const productos = [];
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
if (contraseña === "123"){
    saludar(nombre)
    while(codigo_producto != 5){
        codigo_producto=mostrarMenu()
        console.log(codigo_producto)
        comprarProducto(codigo_producto)
        respuesta = prompt("¿Desea seguir comprando?(si/no)")
        if (respuesta === "si" || respuesta === "Si" || respuesta === "SI"){
            codigo_producto = 0
        }
        else if (respuesta === "no" || respuesta === "No" || respuesta === "NO")
       {
            codigo_producto =5
       }
       
    }
    total_compra = calcularTotal(productos)
    lista = listarCompra(productos)
    alert(`Usted compró:\n ${lista}`)
    alert(`El total de la compra es: $${total_compra}`)
    salir()
    
}

