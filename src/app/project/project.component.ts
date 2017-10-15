import { AppService } from './../app.service';
import { Component } from '@angular/core';
@Component({
    selector: 'project',
    templateUrl: './project.component.html'
})
export class ProjectComponent {

    constructor(private appService: AppService) {
        appService.shouldShowCover = true;
    }

    projects = [{
        title: 'MyCarAndBike.com | Angular 2 Website',
        when: '2017',
        description: `MyCarAndBike is an automotive platform to get the best discounts and exclusive financial deals for potential buyers in Bangalore. 
The website is build with mobile first responsive design guidelines using cutting edge technology - Angular 2`,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/bookmytime%2Fmycarandbike.jpg?alt=media&token=cabc200e-599d-4574-b6be-17a9c232900e',
        teckStack: ['Angular 2', 'Firebase', 'Google maps'],
        link: 'https://www.mycarandbike.com'
    }, {
        title: 'YTV India | Android App',
        when: '2017',
        description: `Android application for live streaming and videos from YTV India PVT. LTD.
        YTV is Bangalore’s first regional English infotainment Television channel.
I built an app to stream their channel live and showcase their exclusive shows. It was designed using Google's material design guidelines; live stream and dailymotion apis were used to integrate the content.`,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/YTV%2Fytv_project_image.png?alt=media&token=d2745ba0-c494-4d60-90c5-da139995fbb3',
        teckStack: ['Live streaming', 'Dailymotion Api', 'Android development', 'Gradle'],
        link: 'https://play.google.com/store/apps/details?id=com.ytvindia.ytvlive'
    }, {
        title: 'MyCarAndBike | Android app',
        when: '2016',
        description: `An native Android Application for car owners to book car services, car care services, repairs etc; and also for potential buyers who opt to buy new cars and get bulk buying discounts from MyCarAndBike. This application follows Google’s material design guidelines.`,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/bookmytime%2Fbmt_android_project_image.png?alt=media&token=0aea934c-e92e-415c-9dea-9fb333bafd20',
        teckStack: ['Firebase', 'Google maps', 'Android development', 'Gradle'],
        link: 'https://play.google.com/store/apps/details?id=com.opteamix.bookmytime&hl=en'
    }]
}