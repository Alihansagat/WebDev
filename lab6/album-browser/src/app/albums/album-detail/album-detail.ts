import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService, Album } from '../../services/album';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html'
})
export class AlbumDetail implements OnInit {

  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe(a => this.album = a);
  }

  save() {
    this.service.updateAlbum(this.album).subscribe();
  }

  back() {
    this.router.navigate(['/albums']);
  }
}