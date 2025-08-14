import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child', // Define el nombre de la etiqueta HTML para usar este componente, como `<app-child>`.
  imports: [], // Lista de módulos que este componente necesita. En este caso, no necesita ninguno.
  templateUrl: './app-child.component.html', // Asocia el archivo HTML (la vista) con esta clase.
  styleUrl: './app-child.component.scss' // Asocia el archivo de estilos (CSS/SCSS) con esta clase.
})
export class AppChildComponent {

    // @Input() permite que los datos fluyan desde el componente padre hacia este componente hijo.
    @Input() msg: string = "";
    @Input() hasButton: boolean = false;

    
    // @Output() permite que este componente hijo emita un evento personalizado que el padre puede escuchar.
    // 'eventoPersonalizado' es el nombre de nuestro evento.
    // 'new EventEmitter<string>()' crea una instancia de EventEmitter que puede enviar datos de tipo 'string'.
    @Output() eventoPersonalizado = new EventEmitter<string>();

    // Este método se llama desde el evento '(click)' del botón en el archivo HTML.
    notificarPadre(): void {
        // Se define una variable 'mensaje' que contiene los datos que queremos enviar.
        const mensaje = 'Hola desde el hijo';

        this.hasButton = false; // Cambia el estado de 'hasButton' a false, lo que puede ocultar el botón en la vista.
        
        // El método '.emit()' dispara el evento, enviando el 'mensaje' al componente padre.
        this.eventoPersonalizado.emit(mensaje);
    }
    
}
