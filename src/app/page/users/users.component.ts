import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})

export class UsersComponent implements OnInit {
  loading = true;
  users: Observable<any[]>;
  userForm: FormGroup;
  db: AngularFirestore;
  selectedUser: any;

  

  constructor(db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
    this.users.subscribe(data => {
      this.loading = false;
    });
    this.db = db;
    this.userForm = new FormGroup({
      userName: new FormControl(''),
      accessCode: new FormControl(''),
      QueueId: new FormControl()
   });
   }

  ngOnInit() {
  }


  selectUser(data){
    console.log(data);
    this.selectedUser = data;
  }

  addNewUser(data){
    console.log(data);
    this.db.collection("users").add({
      userName: data.userName,
      accessCode: data.accessCode,
      userType: 'agent'
  })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
