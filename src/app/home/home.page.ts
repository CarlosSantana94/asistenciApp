import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Route, Router} from "@angular/router";

export interface Invitado {
  nombre: string;
  nombre2: string;

  userAgent: string;
  fecha: Date;

  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private itemsCollection: AngularFirestoreCollection<Invitado>;
  //items: Observable<Invitado[]>;
  nombre: any;
  items: Observable<Invitado[]>;

  invitado: Invitado;
  acomp: boolean;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.invitado = {
      nombre: '',
      nombre2: '',
      userAgent: window.navigator.userAgent,
      fecha: new Date(),
      id: ''
    }

    this.acomp = false
    this.itemsCollection = afs.collection<Invitado>('asistencia180');
    this.items = this.itemsCollection.valueChanges();

  }

  guardarInformacion() {
    const id = this.afs.createId();
    this.invitado.id = id;
    this.itemsCollection.doc(id).set(this.invitado);

    this.invitado = {
      nombre: '',
      nombre2: '',
      userAgent: window.navigator.userAgent,
      fecha: new Date(),
      id: ''
    }

    this.router.navigateByUrl('/confirmacion-posadimms')
  }
}
