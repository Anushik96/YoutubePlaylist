import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Video } from '../../Video'



@Component({
    selector: 'search',
    templateUrl:'app/search/search.html',
    providers:[SpotifyService],
})
export class SearchComponent{
    id: string;
    searchStr: string;
    searchRes: Video[];

    constructor(private _spotifyService:SpotifyService){

    }
    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.items;
            })
    }

}