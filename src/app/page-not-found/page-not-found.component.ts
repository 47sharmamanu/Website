import { AppService } from './../app.service';
import { Component } from '@angular/core';
@Component({
    template: `<div class='col' style='text-align:center;min-height:400px;padding-top:100px;'>
    <h1>Oh my 404 !</h1>
    <p>This page got destroyed during Big bang. I feel sorry :(</p>
    <br>
    <a href='/' style='background-color:black; max-width:400px;'class='full-button'>Breathe & Go back home</a>
                </div>`
})
export class PageNotFoundComponent {

    constructor(private appService: AppService) {
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }
}