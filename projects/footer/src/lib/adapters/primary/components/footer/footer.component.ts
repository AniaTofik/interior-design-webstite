import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FooterTextDTO } from '../../../../application/ports/primary/dto/footer-text.dto';
import {
  GETS_ONE_FOOTER_TEXT_DTO,
  GetsOneFooterTextDtoPort,
} from '../../../../application/ports/primary/dto/gets-one-footer-text.dto-port';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  text$: Observable<FooterTextDTO> = this._getsOneFooterTextDto.getOne(
    '7ttyEZxsbXFbZ2ggqSCj'
  );

  constructor(
    @Inject(GETS_ONE_FOOTER_TEXT_DTO)
    private _getsOneFooterTextDto: GetsOneFooterTextDtoPort
  ) {}
}
