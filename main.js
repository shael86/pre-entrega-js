//bienvenidos

alert ('Bienvenidos a TODO MADERA!')

const comprarProductos = () => {

    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    do {

    alert ('Los precios son por metros cuadros')
    producto = prompt('¿Queres comprar Aglomerado, Terciado o Pino?'). toUpperCase()
    cantidad = parseInt(prompt('¿Cuantos metros deseas comprar?'))
    let cantidadValidada = validarCantidad(cantidad)


    switch (producto) {
        case 'AGLOMERADO':
        precio = 1500
        break;

        case 'TERCIADO':
        precio = 2500
        break;

        case 'PINO':
        precio = 3500
        break;

        default:
        alert('Algunos de los datos ingresados no son correctos')
        precio = 0
        cantidadValidada = 0
    }


        subtotal += precio * cantidadValidada

    seguirComprando = confirm('¿Desea seguir comprando?')

    } while (seguirComprando);
    return subtotal
    }

    const validarCantidad = (cantidad) => {
        while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Debe agregar una cantidad válida!')
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'))
        }
    return cantidad
    }

    let total = comprarProductos();

    alert('El total de tu compra es : $'+total);

    //descuentos

    alert('Tienes un %15 de descuento en el total de tu compra');

    let desc = total * 15 / 100
    let precioDefinitivo =  total - desc

    alert ('Total a pagar con descuento $'+precioDefinitivo);

    // Calcular cuotas

    let cuota = prompt('¿Desea pagar en 1, 3, 6 o 9 cuotas?');
    {
    let calcularCuota = precioDefinitivo / cuota

    if (cuota == 3) {
        alert('Debes pagar 3 cuotas de $' +calcularCuota );
    } else if (cuota == 6) {
        alert('Debes pagar 6 cuotas de $' +calcularCuota );
    } else if (cuota == 9) {
        alert('Debes pagar 9 cuotas de $' +calcularCuota );
    } else if(cuota == 1) {
        alert('Debes pagar un total de $'+precioDefinitivo );
    }
    }

    alert('Muchas gracias por su compra. Esperemos lo disfrutes y vuelvas pronto, atte TODO MADERA!')


