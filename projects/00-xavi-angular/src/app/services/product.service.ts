import { Injectable } from '@angular/core';
import IProduct from "../models/Product";

// El decorador '@Injectable' marca a la clase como un servicio que puede ser inyectado.
// 'providedIn: 'root'' significa que este servicio estará disponible en toda la aplicación (a nivel global).
// Esto hace que el servicio sea un 'singleton', es decir, solo habrá una instancia de él en toda la app.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

    // Declara una propiedad 'product' que es de tipo 'IProduct'.
    // Esto asegura que 'product' siempre tendrá la estructura definida en la interfaz.
    product: IProduct;

    constructor() {
      // Inicializa la propiedad 'product' con un objeto que cumple con la interfaz 'IProduct'.
      this.product = {
          id: 1,
          name: "Nombre producto",
          price: 1000,
          isForSale: true,
      }
    }
    
    // Este método público permite modificar el nombre del producto.
    setProductName(name: string):void {
        this.product.name = name;
    }
}
