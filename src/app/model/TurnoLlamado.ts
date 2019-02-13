import { Asesor } from './Asesor.model';
import { Categoria } from './Categoria.model';

export interface TurnoLlamado{
    name: String;
    time: Date;
    state: string;
    adviser: Asesor;
    category: Categoria;
}