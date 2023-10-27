import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Invitado} from "../home/home.page";
import {Observable} from "rxjs";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Invitado>;
  conteo: number
  items: Observable<Invitado[]>;

  constructor(private afs: AngularFirestore) {
    this.conteo = 0;
    this.itemsCollection = afs.collection<Invitado>('asistencia180');
    this.items = this.itemsCollection.valueChanges();

    this.itemsCollection.valueChanges().subscribe(data => {
      console.log(data);
      this.conteo = 0;
      data.forEach((inv => {


        if (inv.nombre !== '') {
          this.conteo++;
        }

        if (inv.nombre2 !== '') {
          this.conteo++;
        }
      }))

    })
  }

  ngOnInit() {
  }

}
