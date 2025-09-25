import { Usuario, TaxCalculationOptions,Audioplayer } from './interfaces';


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


export function taxCalculation(options:TaxCalculationOptions): [number, number] {
    
    const { tax, products } = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });
    const effectiveTax = tax ?? 0.15;
    console.log("taxCalculation():" , total, tax ? (`Tax: ${tax}`) : (`Fallback tax: ${effectiveTax}`));

    return [total, total * effectiveTax]

}


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


