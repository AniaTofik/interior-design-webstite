import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../../application/ports/primary/dto/employee.dto';
import {
  GETS_ALL_EMPLOYEE_DTO,
  GetsAllEmployeeDtoPort,
} from '../../../../application/ports/primary/dto/gets-all-employee.dto-port';

@Component({
  selector: 'lib-team',
  templateUrl: './team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  texts$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(
    @Inject(GETS_ALL_EMPLOYEE_DTO)
    private _getsAllEmployeeDto: GetsAllEmployeeDtoPort
  ) {}
}
