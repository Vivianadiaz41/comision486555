//clases
class Producto {
  constructor(id, nombre, precio, cantidad, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.cantidad = Number(cantidad);
    this.descripcion = descripcion;
    this.vendido = false;
    this.subtotal = 0;
  }
  //metodo
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
//declaracionarray
const productos = [];
productos.push(
  new Producto(
    1,
    "Anteojos luna",
    "5000",
    "20",
    "Disponibles marcos rojos  y trasparentes"
  )
);
productos.push(
  new Producto(2, "Anteojos Monroe", "20000", "10", "Disponibles venta On line")
);
productos.push(
  new Producto(3, "Anteojos Reef", "12400", "11", "Stock limitado")
);
console.log(productos);
//funcion
function subtotal() {
  for (const Producto of productos) {
    Producto.sumaIva();
    Producto.subtotal = Producto.precio * Producto.cantidad;
    Producto.vendido = true;
  }
}

subtotal();
console.log(subtotal);
