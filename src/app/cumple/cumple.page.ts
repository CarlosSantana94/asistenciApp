import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Invitado} from "../home/home.page";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cumple',
  templateUrl: './cumple.page.html',
  styleUrls: ['./cumple.page.scss'],
})
export class CumplePage implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Invitado>;
  //items: Observable<Invitado[]>;
  nombre: any;
  items: Observable<Invitado[]>;

  invitado: Invitado;
  acomp: boolean;

  constructor(private afs: AngularFirestore,
              private titleService: Title, private router: Router) {
    this.titleService.setTitle('🎉🎉Registro Cumple Mariana🎉🎉')
    this.invitado = {
      nombre: '',
      nombre2: '',
      userAgent: window.navigator.userAgent,
      fecha: new Date(),
      id: ''
    }

    this.acomp = false
    this.itemsCollection = afs.collection<Invitado>('asistenciaCumpleMariana');
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

    this.router.navigateByUrl('/confirmacion-cumple')
  }

  ngOnInit(): void {
  }
}
