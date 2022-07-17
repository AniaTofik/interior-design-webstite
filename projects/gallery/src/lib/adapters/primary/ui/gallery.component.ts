import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryDTO } from '../../../application/ports/primary/dto/gallery.dto';
import {
  GETS_ALL_GALLERY_DTO,
  GetsAllGalleryDtoPort,
} from '../../../application/ports/primary/dto/gets-all-gallery.dto-port';

@Component({
  selector: 'lib-gallery',
  templateUrl: './gallery.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  galleries$: Observable<GalleryDTO[]> = this._getsAllGalleryDto.getAll();

  constructor(
    @Inject(GETS_ALL_GALLERY_DTO)
    private _getsAllGalleryDto: GetsAllGalleryDtoPort
  ) {}
}
