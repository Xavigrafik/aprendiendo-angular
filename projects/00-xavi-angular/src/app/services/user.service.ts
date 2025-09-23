import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import IUser from '../models/User';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    readonly API_URL: string = "https://jsonplaceholder.typicode.com/users";
    // readonly API_URL: string ='https://caae6476b5adba464dc0.free.beeceptor.com/api/users';
    // readonly API_URL: string ='https://ca0b567a69d2eab41123.free.beeceptor.com/api/users';
    // readonly API_URL: string ='https://ca7b4ab987edfb8f232c.free.beeceptor.com/api/users/';

    public users: any[] = [];

    //  variable privada para el usuario por defecto.
    private readonly defaultUser = {
        id: 1,
        name: 'USUARIO DEFAULT',
        username: 'error 429',
        email: 'desde el servicio',
        address: { street: 'Kulas Light', city: 'Gwenborough' },
    };

    constructor(private http: HttpClient) {
          // Inicia la carga de usuarios tan pronto como se crea el servicio.
         this.getUsers().subscribe();
    }

    // El método getUsers contiene toda la lógica de manejo de errores.
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL).pipe(
            // Almacena los datos en la propiedad 'users' si la llamada es exitosa.
            tap((data) => {
                this.users = data;
            }),

            // Centraliza el manejo de errores.
            catchError((error) => {
                console.log('Error al obtener usuarios:', error);
                if (error.status === 429) {
                    console.log(
                        'Demasiadas peticiones. Cargando usuarios por defecto.'
                    );
                    this.users = [this.defaultUser];
                } else {
                    console.error(
                        'Error no controlado. No se pudo obtener la lista de usuarios.'
                    );
                    this.users = []; // Limpia la lista si hay otro tipo de error.
                }
                // Devuelve un observable con la lista de usuarios por defecto
                // para que el componente siga funcionando.
                return of(this.users);
            })
        );
    }

    // Este método getUser puede permanecer en el servicio, buscando primero en el caché.
    getUser(id: number): Observable<any> {
        const user = this.users.find((u) => u.id === id);

        if (user) {
            return of(user);
        }

        // Si no está en la caché, se hace una llamada para obtener un solo usuario.
        const url = `${this.API_URL}/${id}`;
        return this.http.get<any>(url).pipe(
            catchError((error) => {
                console.error('Error al obtener un usuario individual', error);
                // Si el error es 429, se devuelve un observable con el usuario por defecto.
                if (error.status === 429) {
                    console.log(
                        'Error 429 en getUser. Devolviendo usuario por defecto.'
                    );
                    // Usamos la variable 'defaultUser' aquí.
                    return of(this.defaultUser);
                } else {
                    // Si el error es de otro tipo, se devuelve un observable con 'null'.
                    return of(null);
                }
            })
        );
    }

    postUser(user: any): Observable<any> {
        return this.http.post<any>(this.API_URL, user)
        .pipe(
            // Usamos tap para refrescar la lista de usuarios después del post exitoso.
            tap(() => {
                console.log('Usuario creado exitosamente. Refrescando la lista...');
                this.getUsers().subscribe();

            }),
            catchError(error => {
                console.error("Error al crear el usuario:", error);
                return of(null);
            })
        );
    }

    deleteUser(id: number): Observable<any> {
        console.log('DELETING:', id);
        return this.http.delete<any[]>(`${this.API_URL}/${id}`).pipe(
            catchError(error => {
                console.error("Error al ELIMINAR el usuario:", error);
                // Propagar el error para que el componente lo maneje
                return throwError(() => new Error('Error al eliminar el usuario.'));
            })
        );
    }

    getTotalUsers() {
        return this.users.length;
    }
}
