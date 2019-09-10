import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-queue-management',
  templateUrl: './queue-management.component.html',
  styleUrls: ['./queue-management.component.less']
})
export class QueueManagementComponent implements OnInit {
  db: AngularFirestore;
  user: any;
  department: any;
  activeDepartment: any;
  tickets: any;

  constructor(db: AngularFirestore) {
    this.db = db;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.department = JSON.parse(localStorage.getItem('department'));
    this.db
    .collection('departments', ref => ref.where('queueId', '==', this.department.queueId))
    .valueChanges()
    .subscribe( data => {
      this.activeDepartment = data[0];
    });

    this.tickets = this.db.collection('ticket', ref => ref.where('queueId', '==', this.department.queueId)).valueChanges();
    this.tickets.subscribe(data => {
      console.log(data);
    })
   }

  ngOnInit() {
    console.log(this.user);
    console.log(this.department);
  }

}
