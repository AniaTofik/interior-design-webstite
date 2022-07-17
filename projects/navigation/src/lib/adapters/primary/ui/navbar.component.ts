import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarDTO } from '../../../application/ports/primary/dto/navbar.dto';
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
  navbar$: Observable<NavbarDTO> = this._getsOneNavbarDto.getOne(
    'EZDlGMjCSH3gu1lQfT4d'
  );

  constructor(
    @Inject(GETS_ONE_NAVBAR_DTO) private _getsOneNavbarDto: GetsOneNavbarDtoPort
  ) {}
}
