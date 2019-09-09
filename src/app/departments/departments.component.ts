import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.less']
})
export class DepartmentsComponent implements OnInit {
  loading = true;
  departments: Observable<any[]>;
  users: Observable<any[]>;
  selectedUsers: any;
  departmentForm: FormGroup;
  selectedDepartment: any;
  db: AngularFirestore;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = ['a10', 'c12'];
  visible = false;
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];
//   companyId
// "CT"
// departmentId
// "RG"
// departmentName
// "Registro"
// (cadena)
// nowServing
// "2"
// queueId
// "R"

  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

  constructor(db: AngularFirestore) {
    this.departments = db.collection('departments').valueChanges();
    this.users = db.collection('users').valueChanges();
    this.users.subscribe(data => {
      console.log(data);
    });
    this.departments.subscribe(data => {
      this.loading = false;
    });
    this.db = db;
    this.departmentForm = new FormGroup({
      departmentName: new FormControl(),
      queueId: new FormControl(),
      assignedUsers: new FormControl()
   });
   }



   ngOnInit(): void {

    const departmentName = this.departmentForm.get('departmentName');

    departmentName.valueChanges.subscribe((data) => {
      this.departmentForm.controls['queueId'].setValue( departmentName.value.substring(0, 1));
      // this.departmentForm.controls['queueId'].disable();
    });

   }

  selectDepartment(data){
    console.log(data);
    this.selectedDepartment = data;
  }

  addNewDepartment(data) {
    console.log(data);
    this.db.collection('departments').add({
      departmentName: data.departmentName,
      queueId: data.queueId,
      assignedUsers: data.assignedUsers,
      nowServing: 1
    })
    // tslint:disable-next-line:only-arrow-functions
    .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
    })
    // tslint:disable-next-line:only-arrow-functions
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
