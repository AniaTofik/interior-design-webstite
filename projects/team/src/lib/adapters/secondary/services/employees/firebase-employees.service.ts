import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllEmployeeDtoPort } from '../../../../application/ports/primary/dto/gets-all-employee.dto-port';
import { EmployeeDTO } from '../../../../application/ports/primary/dto/employee.dto';

@Injectable()
export class FirebaseEmployeesService implements GetsAllEmployeeDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<EmployeeDTO[]> {
    return this._client.collection<EmployeeDTO>('employees').valueChanges(({idField: 'id'}));
  }
}
