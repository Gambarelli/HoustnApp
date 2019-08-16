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
  departments: Observable<any[]>;listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

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
