import { Asesores } from "./asesores";
import { Turno } from "./turno";

export class Reporte {
    id_reporte:number;
    contenido:string;
    asesor:Asesores;
    turno:Turno;
}
