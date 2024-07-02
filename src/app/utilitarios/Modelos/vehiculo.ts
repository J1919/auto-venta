export interface Vehiculo{
    codigo:string
    marca?: string;
    modelo?:string;
    kilometraje?:string;
    precio?:number;
    foto?: string |null;
    anio?:number;
    calificacion?:number
    fecha_creacion?: string;
    fecha_modificacion?: string;
 usuario?: string;
}