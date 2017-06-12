"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/operator/delay');
require('rxjs/operator/mergeMap');
require('rxjs/operator/switchMap');
var BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
var API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    // https://www.googleapis.com/youtube/v3/search?q=angular2&part=snippet&key=AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0
    // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUadgMpPaifXAES3Ms_xszy9X_vhMlUEe&key=AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0
    SpotifyService.prototype.searchMusic = function (str) {
        this.searchUrl = BASE_URL + "?q=" + str + "&part=snippet&key=" + API_TOKEN;
        return this._http.get(this.searchUrl)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.topMusic = function () {
        this.videoUrl = "https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=" + API_TOKEN + "&part=snippet&maxResults=4";
        return this._http.get(this.videoUrl)
            .map(function (res) { return res.json(); });
    };
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map