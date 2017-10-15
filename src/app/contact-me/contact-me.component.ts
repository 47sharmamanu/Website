import { AppService } from './../app.service';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Component({
    selector: 'contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

    name: string;
    email: string;
    subject: string;
    message: string;
    mailSentStatus: string = 'NEW'; // it could be three possible status NEW, SENT, ERROR

    constructor(public appService: AppService, private http: HttpClient) {
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }

    reset() {
        this.email = null;
        this.subject = null;
        this.message = null;
        this.mailSentStatus = 'NEW';
    }

    // sendMail() {
    //     console.log('Trying to send mail...')
    //     //validate values

    //     //create request option

    //     let headers = new HttpHeaders();
    //     headers.set('Accept', 'application/jsonp');
    //     headers.set('Access-Control-Allow-Origin', '*');
    //     headers.set('Access-Control-Allow-Headers', '*');
    //     let option = {
    //         headers: headers
    //     }

    //     //create a request body
    //     let body = {
    //         replyTo: this.email,
    //         subject: this.subject,
    //         message: this.message,
    //     }
    //     //make web request
    //     this.http.post('https://script.google.com/a/anvayaanalytics.com/macros/s/AKfycbwabWW8eGG99It1lSvpD9t1dSUcpKBmxsfRB6yQGC4PoJJlwrs/exec&callback=?', body, option).subscribe((data) => {
    //         console.log(data);
    //     })
    // }

    sendMail() {
        console.log('Trying to send mail...')
        //validate values
        if (!this.email) {
            //mail is null
            alert('Email is mandatory');
            return
        } else {
            this.email = this.email.trim();
            if (this.email.length == 0) {
                //mail is null
                alert('Email is mandatory');
                return;
            } else {
                if (!this.isValidMailFormat(this.email)) {
                    alert('Email is invalid. Example: xyz@gmail.com');
                    return;
                }
            }
        }

        if (!this.subject) {
            //subject is null
            alert('Subject is mandatory');
            return;
        } else {
            this.subject = this.subject.trim();
            if (this.subject.length == 0) {
                //message is null
                alert('Subject is mandatory');
                return;
            }
        }
        let subject = "Important " + this.subject

        if (!this.message) {
            //message is null
            alert('Message is mandatory');
            return;
        } else {
            this.message = this.message.trim();
            if (this.message.length == 0) {
                //message is null
                alert('Message is mandatory');
                return;
            }
        }


        let extensionString = '?replyTo=' + this.email + '&message=' + this.message;
        if (this.subject && this.subject.length > 0) {
            extensionString = extensionString + '&subject=' + subject;
        }
        //make web request
        this.http.get('https://script.google.com/a/anvayaanalytics.com/macros/s/AKfycbwabWW8eGG99It1lSvpD9t1dSUcpKBmxsfRB6yQGC4PoJJlwrs/exec' + extensionString).subscribe((data: MailResponse) => {
            if (data.code == 2000) {
                console.log('success');
                this.mailSentStatus = 'SENT';
            }
        });
    }

    isValidMailFormat(email: string): boolean {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if ((email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return false;
        }
        return true;
    }
}

export class MailResponse {
    code: number;
}