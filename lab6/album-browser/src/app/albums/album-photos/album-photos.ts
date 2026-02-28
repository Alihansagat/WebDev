import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService, Photo } from '../../services/album';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html'
})
export class AlbumPhotos implements OnInit {

  photos$!: Observable<Photo[]>;
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumService
  ) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.service.getAlbumPhotos(this.albumId);
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}