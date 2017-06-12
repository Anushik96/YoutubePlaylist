import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private videoUrl: string;

    constructor(private _http:Http){

    }

    // https://www.googleapis.com/youtube/v3/search?q=angular2&part=snippet&key=AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0
    // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUadgMpPaifXAES3Ms_xszy9X_vhMlUEe&key=AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0


    searchMusic(str:string) {
        this.searchUrl = `${BASE_URL}?q=${str}&part=snippet&key=${API_TOKEN}`;
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }

    topMusic(){
        this.videoUrl = `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${API_TOKEN}&part=snippet&maxResults=4`;
        return this._http.get(this.videoUrl)
            .map(res => res.json());
    }

}