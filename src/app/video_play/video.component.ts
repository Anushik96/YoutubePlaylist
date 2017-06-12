import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../Artist'
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'video-play',
    templateUrl: 'app/video_play/video.html',
})
export class VideoComponent implements OnInit{
    searchStr: string;
    searchRes: Artist[];
    sanitizer:any;
    baseUrl:string = 'https://www.youtube.com/embed/';
    constructor(private _sanitizer: DomSanitizer, private _spotifyService:SpotifyService, private _router: ActivatedRoute) {
        this.sanitizer = this._sanitizer;
    }
    ngOnInit(){
        this._router.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.searchMusic(id)
                    .subscribe(res => {
                        this.searchRes = res.items;
                    })
            })
    }
}

