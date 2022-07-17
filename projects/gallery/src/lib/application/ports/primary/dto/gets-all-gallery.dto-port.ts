import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryDTO } from './gallery.dto';

export const GETS_ALL_GALLERY_DTO = new InjectionToken<GetsAllGalleryDtoPort>('GETS_ALL_GALLERY_DTO');

export interface GetsAllGalleryDtoPort {
  getAll(): Observable<GalleryDTO[]>;
}
