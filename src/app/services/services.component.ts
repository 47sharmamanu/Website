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
        description: "Major in Idea nurturing and refining using technology and design to make a wow experience with reliable service, which stands out in the cluster of competitors.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz_ideas.jpg?alt=media&token=f5227392-60a9-46d1-8b6b-936d19344856',
        actionString: 'Need to discuss an idea?',
        pricing: '₹1500/HR'
    },
    {
        title: 'UX/UI',
        description: "You see the beauty, you urge for more and thats where UI/UX comes in the frame to attract audience to adopt a new thing. Come, let’s make the world beautiful and easy.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz_ux-ui.jpg?alt=media&token=7811a1e8-19be-4da7-bbe3-f8c30642c58f',
        actionString: 'Want UX/UI services?',
        pricing: '₹1500/HR'
    },
    {
        title: 'ANDROID DEVELOPMENT',
        description: "Capturing 87.5% of smartphone market share, Android is largest smartphone application ecosystem. Join and go global with your material design interface and high performance packed android application.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz_android-dev.jpg?alt=media&token=806613d0-b563-4819-99db-a1a62757bc8f',
        actionString: 'Want an Android app?',
        pricing: '₹1500/HR'
    },
    {
        title: 'iOS DEVELOPMENT',
        description: "Need to target niche class of consumers using iPhones, iPads or other apple products? Get your professional yet beautifully developed iOS app and make a footprint in Apple's app store.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz-ios-development.jpg?alt=media&token=e0438c4f-b57e-4a9d-bb4a-5cfb0d56d281',
        actionString: 'Want an iOS app?',
        pricing: '₹1500/HR'
    },
    {
        title: 'MOBILE APPLICATION DESIGNING',
        description: "A consumer centric business without a Mobile app? Too bad. Get your intuitive yet beautifully crafted mobile app designs now.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz_mobile-app-design.jpg?alt=media&token=135c4096-90be-41b1-b41b-6680cc24fdd3',
        actionString: 'Need mobile app designs?',
        pricing: '₹1500/HR'
    },
    {
        title: 'RESPONSIVE WEB DESIGN',
        description: "Website design for mobile is not optional. Design & create a seemless and fast browsing experience for people on there personnel device(s).",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz_responsive-web-design.png?alt=media&token=e9bacf2a-e27e-456a-933d-6fede760062f',
        actionString: 'Need website designs?',
        pricing: '₹1500/HR'
    },
    {
        title: 'WEBSITE DEVELOPMENT',
        description: "Developing visually intuitive websites for mobile to desktop screens. They are reliablly fast and secure and get you the leverage to give best user experience to your consumer.",
        icon: 'https://firebasestorage.googleapis.com/v0/b/manu-sharma.appspot.com/o/services-related%2Frsz_web-development.jpg?alt=media&token=01f1324f-a063-41a7-9a70-002f83951dc9',
        actionString: 'Want a Website?',
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