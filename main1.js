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
  productos.push(new Producto(1, "arroz", "50", "2", "Es un buen producto"));
  productos.push(new Producto(2, "poroto", "20", "3", "Es un buen producto"));
  productos.push(new Producto(3, "fideo", "30", "1", "Es un buen producto"));
  console.log(productos);
  //funcion
  for (const Producto of productos) {
    Producto.sumaIva();
    Producto.subtotal = Producto.precio * Producto.cantidad;
    Producto.vendido = true;
  }
  subtotal();
  