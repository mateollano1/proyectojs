import { ListaItem } from './lista-item.models';
export class Lista {
    id: number;
    titulo: string;
    creada: Date; 
    terminada: Date;
    finalizada: Boolean;
    items: ListaItem[];

    constructor (titulo: string) {
        this.titulo = titulo;
        this.finalizada = false;
        this.creada = new Date ();
        this.items = [];
        this.id = new Date().getTime();
    }
}