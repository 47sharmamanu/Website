import { AppService } from './../app.service';
import { Component } from '@angular/core';
@Component({
    selector: 'blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent {

    constructor(private appService: AppService) {
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }

}