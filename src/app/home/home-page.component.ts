import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service'
import { Video } from '../../Video';

@Component({
    selector: 'home',
    templateUrl:'app/home/home.html',
    providers:[SpotifyService]

})
export class HomeComponent implements OnInit{
    id: string;
    seRes: Video[];
    searchStr: string;

    constructor(private _spotifyService:SpotifyService){

    }
    ngOnInit(){
        this._spotifyService.topMusic()
            .subscribe(res => {
                this.seRes = res.items;
            })
    }
}
