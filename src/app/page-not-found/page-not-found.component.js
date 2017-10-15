var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AppService } from './../app.service';
import { Component } from '@angular/core';
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(appService) {
        this.appService = appService;
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Component({
        template: "<div class='col' style='text-align:center;min-height:400px;padding-top:100px;'>\n    <h1>Oh my 404 !</h1>\n    <p>This page got destroyed during Big bang. I feel sorry :(</p>\n    <br>\n    <a href='/' style='background-color:black; max-width:400px;'class='full-button'>Breathe & Go back home</a>\n                </div>"
    }),
    __metadata("design:paramtypes", [AppService])
], PageNotFoundComponent);
export { PageNotFoundComponent };
//# sourceMappingURL=page-not-found.component.js.map