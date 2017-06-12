import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../Artist'



@Component({
    selector: 'search',
    templateUrl:'app/search/search.html',
    providers:[SpotifyService],
})
export class SearchComponent{
    id: string;
    searchStr: string;
    searchRes: Artist[];

    constructor(private _spotifyService:SpotifyService){

    }
    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.items;
            })
    }

}