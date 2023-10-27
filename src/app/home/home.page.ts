import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

export interface Invitado {
  nombre: string;
  nombre2: string;

  userAgent: string;
  fecha: Date;
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

  constructor(private afs: AngularFirestore) {
    this.invitado = {
      nombre: '',
      nombre2: '',
      userAgent: window.navigator.userAgent,
      fecha: new Date()
    }

    this.acomp = false
    this.itemsCollection = afs.collection<Invitado>('asistencia180');
    this.items = this.itemsCollection.valueChanges();

  }

  guardarInformacion() {
    this.itemsCollection.add(this.invitado)

    this.invitado = {
      nombre: '',
      nombre2: '',
      userAgent: window.navigator.userAgent,
      fecha: new Date()
    }
  }
}
