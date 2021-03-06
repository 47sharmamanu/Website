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
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/projects-related%2FBookMyTime%2Fmycarandbike.jpg?alt=media&token=82e79b59-2eca-49d5-9311-fa6da7ea2f5e',
        teckStack: ['Angular 2', 'Firebase', 'Google maps'],
        link: 'https://www.mycarandbike.com'
    }, {
        title: 'YTV India | Android App',
        when: '2017',
        description: `Android application for live streaming and videos from YTV India PVT. LTD.
        YTV is Bangalore’s first regional English infotainment Television channel.
I built an app to stream their channel live and showcase their exclusive shows. It was designed using Google's material design guidelines; live stream and dailymotion apis were used to integrate the content.`,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/projects-related%2FYTV%2Fytv_project_image.png?alt=media&token=d8238154-4eeb-4a7e-b40d-944b6afa7049',
        teckStack: ['Live streaming', 'Dailymotion Api', 'Android development', 'Gradle'],
        link: 'https://play.google.com/store/apps/details?id=com.ytvindia.ytvlive'
    }, {
        title: 'MyCarAndBike | Android app',
        when: '2016',
        description: `An native Android Application for car owners to book car services, car care services, repairs etc; and also for potential buyers who opt to buy new cars and get bulk buying discounts from MyCarAndBike. This application follows Google’s material design guidelines.`,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/projects-related%2FBookMyTime%2Fbmt_android_project_image.png?alt=media&token=9663b0e6-35bd-41f2-a4a4-6d0efbb53835',
        teckStack: ['Firebase', 'Google maps', 'Android development', 'Gradle'],
        link: 'https://play.google.com/store/apps/details?id=com.opteamix.bookmytime&hl=en'
    }]
}