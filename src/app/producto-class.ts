export class Producto {
  create(Constructor: typeof Producto) {
        Constructor.prototype; // works
    }
  nombre: string;
  precio: number;  
  descripcion: string;
}


/*
export const Productos = [
  {
    nombre: 'Huawei P30 PRO',
    precio: 799,
    descripcion: 'Excelente smartphone pero sin tienda de aplicaciones'
  },
  {
    nombre: 'Iphone Mini',
    precio: 699,
    descripcion: 'Diseño compacto de un iPhone'
  },
  {
    nombre: 'iPhone X',
    precio: 999,
    descripcion: 'Excelente equipo para tus aventuras'
  }
];

*/