import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.less']
})
export class DepartmentsComponent implements OnInit {
  loading = true;
  departments: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.departments = db.collection('departments').valueChanges()
    this.departments.subscribe(data => {
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
