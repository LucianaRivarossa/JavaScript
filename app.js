function iniciar(){
    alert(`Tienda de ropa`)
}
function saludar(nombre){
    alert(`Bienvenido ${nombre}`)
}
function mostrarMenu(){
    let categoria = Number(prompt(`¿Qué estás buscando? \n 1. Vestidos \n 2. Remeras \n 3. Jeans \n 4. Sweaters \n 5. Salir `))
    return categoria
}
function mostrarVestidos(){
    let opcion = Number(prompt(`VESTIDOS \n 1. Vestido Rojo \n 2. Vestido Verde \n 3. Vestido Azul \n 4. Vestido Amarillo \n 5. Volver al menú anterior`))
    return opcion
}
function mostrarRemeras(){
    let opcion = Number(prompt(`REMERAS \n 1. Remera Roja \n 2. Remera Verde \n 3. Remera Azul \n 4. Remera Amarilla \n 5. Volver al menú anterior`))
    return opcion
}
function mostrarJeans(){
    let opcion = Number(prompt(`JEANS \n 1. Jean Rojo \n 2. Jean Verde \n 3. Jean Azul \n 4. Jean Amarillo \n 5. Volver al menú anterior`))
    return opcion
}
function mostrarSweaters(){
    let opcion = Number(prompt(`SWEATERS \n 1. Sweater Rojo \n 2. Sweater Verde \n 3. Sweater Azul \n 4. Sweater Amarillo \n 5. Volver al menú anterior`))
    return opcion
}
function comprarPrenda(prenda,precio){
    alert (`Compraste ${prenda} a $${precio}`)
    let seguirComprando=false
    respuesta = prompt("¿Desea seguir comprando?(si/no)")
    if (respuesta === "si" || respuesta === "Si" || respuesta === "SI")
        seguirComprando =true
    return seguirComprando
}
function salir(){
    alert(`Gracias por su visita`)
}
iniciar()
nombre= prompt(`Ingrese nombre de usuario`)
contraseña= prompt(`Ingrese contraseña`)
let opcion = 0
let categoria=0
let seguirComprando=true
if (contraseña === "123"){
    saludar(nombre)
    categoria =mostrarMenu()
    while(seguirComprando){
        
        console.log(`${categoria}`)
        if (categoria ===1){
            opcion = Number(mostrarVestidos())
            if (opcion != 5){
                if (opcion === 1)
                    seguirComprando= comprarPrenda("Vestido Rojo",1000)
                else if (opcion === 2)
                    seguirComprando=comprarPrenda("Vestido Verde",5000)
                else if (opcion === 3)
                    seguirComprando=  comprarPrenda("Vestido Azul",4000)
                else if (opcion === 4)
                    seguirComprando=comprarPrenda("Vestido Amarillo",1000)
                }
            else 
                {   console.log("entre")
                    mostrarMenu()
                }
                    
            
        }
        else if(categoria===2){
                opcion = mostrarRemeras()
                if (opcion != 5){
                    if (opcion === 1)
                          seguirComprando=comprarPrenda("Remera Roja",1000)
                    else if (opcion === 2)
                         seguirComprando=comprarPrenda("Remera Verde",2000)
                    else if (opcion === 3)
                         seguirComprando=comprarPrenda("Remera Azul",4000)
                    else if (opcion === 4)
                         seguirComprando=comprarPrenda("Remera Amarilla",5000)
                }
                else 
                    {mostrarMenu()}
                }
        else if (categoria===3){
                opcion = mostrarJeans()
                if (opcion != 5){
                    if (opcion === 1)
                          seguirComprando= comprarPrenda("Jean Rojo",4000)
                    else if (opcion === 2)
                         seguirComprando=  comprarPrenda("Jean Verde",3000)
                    else if (opcion === 3)
                          seguirComprando=  comprarPrenda("Jean Azul",2000)
                    else if (opcion === 4)
                         seguirComprando= comprarPrenda("Jean Amarillo",4000)
                }
                else 
                    {mostrarMenu()}
                }
        else if (categoria===4){ 
                opcion = mostrarSweaters()
                if (opcion != 5){
                    if (opcion === 1)
                         seguirComprando=comprarPrenda("Sweater Rojo",1000)
                    else if (opcion === 2)
                         seguirComprando= comprarPrenda("Sweater Verde",2000)
                    else if (opcion === 3)
                         seguirComprando= comprarPrenda("Sweater Azul",3000)
                    else if (opcion === 4)
                         seguirComprando= comprarPrenda("Sweater Amarillo",1000)
                }
                else 
                    {mostrarMenu()}
                }
                
        else if (categoria===5){ 
                    seguirComprando=false
                }
        else {
                alert(`Opción incorrecta. Vuelva a seleccionar la opción`)
                categoria= mostrarMenu()
            }
        
    }
    salir()
    
}

