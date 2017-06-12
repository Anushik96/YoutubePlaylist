import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRoutes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {  HttpModule } from '@angular/http';
//noinspection TypeScriptCheckImport
//import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavbarComponent } from'./navbar/navbar.component';
import { SearchComponent } from'./search/search.component';
import { AboutComponent } from'./about/about.component';
import { SpotifyService } from'./services/spotify.service';
import { VideoComponent } from'./video_play/video.component';
import { HomeComponent } from'./home/home-page.component';
//import { HTTP_PROVIDERS } from'@angular/http'

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'search/video/:id',
                component: VideoComponent
            },
        ])
    ],
    declarations: [AppComponent,
        NavbarComponent,
        AboutComponent,
        SearchComponent,

        VideoComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent,
        //disableDeprecatedForms(), provideForms()
    ],
    providers:[SpotifyService]
})
export class AppModule {
}
