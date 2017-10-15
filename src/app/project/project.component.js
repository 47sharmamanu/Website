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
var ProjectComponent = (function () {
    function ProjectComponent(appService) {
        this.appService = appService;
        this.projects = [{
                title: 'MyCarAndBike.com | Angular 2 Website',
                when: '2017',
                description: "MyCarAndBike is an automotive platform to get the best discounts and exclusive financial deals for potential buyers in Bangalore. \nThe website is build with mobile first responsive design guidelines using cutting edge technology - Angular 2",
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/bookmytime%2Fmycarandbike.jpg?alt=media&token=cabc200e-599d-4574-b6be-17a9c232900e',
                teckStack: ['Angular 2', 'Firebase', 'Google maps'],
                link: 'https://www.mycarandbike.com'
            }, {
                title: 'YTV India | Android App',
                when: '2017',
                description: "Android application for live streaming and videos from YTV India PVT. LTD.\n        YTV is Bangalore\u2019s first regional English infotainment Television channel.\nI built an app to stream their channel live and showcase their exclusive shows. It was designed using Google's material design guidelines; live stream and dailymotion apis were used to integrate the content.",
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/YTV%2Fytv_project_image.png?alt=media&token=d2745ba0-c494-4d60-90c5-da139995fbb3',
                teckStack: ['Live streaming', 'Dailymotion Api', 'Android development', 'Gradle'],
                link: 'https://play.google.com/store/apps/details?id=com.ytvindia.ytvlive'
            }, {
                title: 'MyCarAndBike | Android app',
                when: '2016',
                description: "An native Android Application for car owners to book car services, car care services, repairs etc; and also for potential buyers who opt to buy new cars and get bulk buying discounts from MyCarAndBike. This application follows Google\u2019s material design guidelines.",
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/bookmytime%2Fbmt_android_project_image.png?alt=media&token=0aea934c-e92e-415c-9dea-9fb333bafd20',
                teckStack: ['Firebase', 'Google maps', 'Android development', 'Gradle'],
                link: 'https://play.google.com/store/apps/details?id=com.opteamix.bookmytime&hl=en'
            }];
        appService.shouldShowCover = true;
    }
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Component({
        selector: 'project',
        templateUrl: './project.component.html'
    }),
    __metadata("design:paramtypes", [AppService])
], ProjectComponent);
export { ProjectComponent };
//# sourceMappingURL=project.component.js.map