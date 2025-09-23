import { Usuario } from './interfaces';


// Define una clase que implementa la interfaz
export class Administrador implements Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: string; // Propiedad adicional

    constructor(id: number, nombre: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = 'admin';
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}`);
    }
}

interface Audioplayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: Audioplayer = {
    audioVolume: 90,
    songDuration: 90,
    song: "Mess",
    details: {
        author: 'Ed',
        year: 2015,
    }
}

////// OBJ DESTRUCTURING :
const {
    song: song,
    details,
} = audioPlayer;

const { author } = details;


export function logCosas(): void {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> logCosas ');
    console.log('Song: ', audioPlayer.song);
    console.log('Song destructured: ', song);
    console.log('Autor destructured OK: ', author);

}


///// ARRAY DESTRUCTURING
const dbz: string[] = ["Goku", "Gohan", "Trunks"];
const [p1, p2, trunks]:string[] = dbz;
console.log(p1, p2, trunks);


