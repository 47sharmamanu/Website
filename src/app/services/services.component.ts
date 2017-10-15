import { AppService } from './../app.service';
import { Component } from '@angular/core';
@Component({
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {

    constructor(private appService: AppService) {
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }

    services = [{
        title: 'IDEAS',
        description: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_ideas.jpg?alt=media&token=a7c68ba8-8e57-4b95-b70e-598b6142f7f1',
        actionString: 'I need to discuss an idea',
        pricing: '₹1500/HR'
    },
    {
        title: 'UX/UI',
        description: "I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_ux-ui.jpg?alt=media&token=d76d3c57-a73e-4228-a534-847afd3f227b',
        actionString: 'I want UX/UI services',
        pricing: '₹1500/HR'
    },
    {
        title: 'ANDROID DEVELOPMENT',
        description: "I design Android apps with clean, usable and intuitive interfaces while meeting the requirements. I create  apps that fit into the Android ecosystem by following Google’s material design guidelines.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_android-dev.jpg?alt=media&token=cb9863b0-7dbf-4693-bec9-150edd5d2c6f',
        actionString: 'I want an Android app',
        pricing: '₹1500/HR'
    },
    {
        title: 'iOS DEVELOPMENT',
        description: "I use the code of Swift to develop a fully functional native application, while complying to all the requirements. The interface would be creative and easily usable. App will be ready to launch when completed.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_ios-development.jpg?alt=media&token=835e695e-0fa2-4f09-995e-37300628cc0b',
        actionString: 'I want an iOS app',
        pricing: '₹1500/HR'
    },
    {
        title: 'MOBILE APPLICATION DESIGNING',
        description: "I understand that the perfect user interface should look good and work even better. Using the design guidelines of Android and iOS, I ensure your user experience goes hand-in-hand with the interface.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_mobile-app-design.jpg?alt=media&token=a66a3017-c3b7-42c0-810d-06a6fd31d8ed',
        actionString: 'I need mobile designs',
        pricing: '₹1500/HR'
    },
    {
        title: 'RESPONSIVE WEB DESIGN',
        description: "I develop mobile-first responsive websites using Bootstrap and Angular 4 frameworks, which makes it faster by 70% of the traditional website with in-built security.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_responsive-web-design.png?alt=media&token=dbe76c8d-3e01-4860-a03c-6fe951d89113',
        actionString: 'I need a website design',
        pricing: '₹1500/HR'
    },
    {
        title: 'WEBSITE DEVELOPMENT',
        description: "I develop mobile-first responsive websites using Bootstrap and Angular 4 frameworks, which makes it faster by 70% of the traditional website with in-built security.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_web-development.jpg?alt=media&token=6bd7386a-dbe8-4017-b53c-8c523b445194',
        actionString: 'I want an Website',
        pricing: '₹1500/HR'
    },
        // {
        //     title: 'HYBRID IONIC APP',
        //     description: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.",
        //     icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_seo.png?alt=media&token=baad0324-d5aa-49b6-84ed-bb551fbe7d67',
        //     actionString: 'I need SEO services',
        //     pricing: '₹1500/HR'
        // }
        // {
        //     title: 'SEO',
        //     description: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.",
        //     icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_seo.png?alt=media&token=baad0324-d5aa-49b6-84ed-bb551fbe7d67',
        //     actionString: 'I need SEO services',
        //     pricing: '₹1500/HR'
        // },
        // {
        //     title: 'PRINT MEDIA DESIGN',
        //     description: "I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.",
        //     icon: 'https://firebasestorage.googleapis.com/v0/b/manu-3bc48.appspot.com/o/services-related%2Frsz_print-media.jpg?alt=media&token=89e81c3b-3cc5-4927-b83f-164b8690dd93',
        //     actionString: 'I need to some printable designed',
        //     pricing: '₹1500/HR'
        // }
    ]
}