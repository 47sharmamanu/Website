import { AppService } from './../app.service';
import { Component } from '@angular/core';
@Component({
    selector: 'about-me',
    templateUrl: './about-me.component.html'
})
export class AboutMeComponent {

    aboutMeText = ``

    constructor(public appService: AppService) {
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }
}