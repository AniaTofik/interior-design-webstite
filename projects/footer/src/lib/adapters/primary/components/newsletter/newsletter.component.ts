import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FooterTextDTO } from '../../../../application/ports/primary/dto/footer-text.dto';
import {
  ADDS_NEWSLETTER_DTO,
  AddsNewsletterDtoPort,
} from '../../../../application/ports/primary/dto/adds-newsletter.dto-port';

@Component({
  selector: 'lib-newsletter',
  templateUrl: './newsletter.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent {
  readonly newsletterForm: FormGroup = new FormGroup({
    email: new FormControl(),
  });

  constructor(
    @Inject(ADDS_NEWSLETTER_DTO)
    private _addsNewsletterDto: AddsNewsletterDtoPort
  ) {}

  onSubmitFormClicked(newsletterForm: FormGroup): void {
    if (newsletterForm.invalid) {
      return;
    }
    this._addsNewsletterDto.add({
      email: newsletterForm.get('email')?.value,
    });
    newsletterForm.reset();
  }
}
