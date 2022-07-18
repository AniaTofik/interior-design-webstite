import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarDTO } from '../../../application/ports/primary/dto/navbar.dto';
import {
  SETS_NAVBAR_DTO,
  SetsNavbarDtoPort,
} from '../../../application/ports/primary/dto/sets-navbar.dto-port';
import {
  GETS_ALL_NAVBAR_DTO,
  GetsAllNavbarDtoPort,
} from '../../../application/ports/primary/dto/gets-all-navbar.dto-port';
import {
  GETS_ONE_NAVBAR_DTO,
  GetsOneNavbarDtoPort,
} from '../../../application/ports/primary/dto/gets-one-navbar.dto-port';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navbars$: Observable<NavbarDTO[]> = this._getsAllNavbarDto.getAll();
  logo$: Observable<NavbarDTO> = this._getsOneNavbarDto.getOne(
    't9h9tuVizVCh2AeWn4fC'
  );

  constructor(
    @Inject(SETS_NAVBAR_DTO) private _setsNavbarDto: SetsNavbarDtoPort,
    @Inject(GETS_ALL_NAVBAR_DTO)
    private _getsAllNavbarDto: GetsAllNavbarDtoPort,
    @Inject(GETS_ONE_NAVBAR_DTO) private _getsOneNavbarDto: GetsOneNavbarDtoPort
  ) {}
  isChecked = false;

  onCloseNavbarMenuClicked(navbar: any): void {
    if (navbar.isChecked === false) {
      this._setsNavbarDto.set({
        id: navbar.id,
        isChecked: true,
      });
    } else {
      this._setsNavbarDto.set({
        id: navbar.id,
        isChecked: false,
      });
    }
  }
}
