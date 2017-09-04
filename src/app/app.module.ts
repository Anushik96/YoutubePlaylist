import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {  HttpModule } from '@angular/http';
import {TranslateModule} from "ng2-translate";

import { AppComponent }  from './app.component';
import { NavbarComponent } from'./navbar/navbar.component';
import { SearchComponent } from'./search/search.component';
import { AboutComponent } from'./about/about.component';
import { SpotifyService } from'./services/spotify.service';
import { VideoComponent } from'./video_play/video.component';
import { HomeComponent } from'./home/home-page.component';
import { LoginComponent } from'./login/login.component';
import { RegisterComponent } from'./register/register.component';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot([
            {
                path: 'home',
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
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ])
    ],
    declarations: [AppComponent,
        NavbarComponent,
        AboutComponent,
        SearchComponent,
        LoginComponent,
        VideoComponent,
        HomeComponent,
        RegisterComponent
    ],
    bootstrap: [AppComponent],
    providers:[SpotifyService]
})
export class AppModule {
}
