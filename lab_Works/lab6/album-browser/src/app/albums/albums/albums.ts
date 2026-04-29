import { Component, OnInit } from '@angular/core';
import { AlbumService, Album } from '../../services/album';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin, map } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {

  albums: Array<{ album: Album, thumbnail?: string }> = [];
  loading = true;

  constructor(private service: AlbumService) {}

  ngOnInit() {
    // Fetch all albums
    this.service.getAlbums().subscribe(albums => {

      // For each album, fetch first photo as thumbnail
      const requests = albums.map(a =>
        this.service.getAlbumPhotos(a.id).pipe(
          map(photos => ({
            album: a,
            thumbnail: photos[0]?.thumbnailUrl // first photo
          }))
        )
      );

      // Wait for all requests to finish
      forkJoin(requests).subscribe(results => {
        this.albums = results;
        this.loading = false; // hide loading spinner
      });

    });
  }

  delete(id: number) {
    this.service.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.album.id !== id);
    });
  }
}