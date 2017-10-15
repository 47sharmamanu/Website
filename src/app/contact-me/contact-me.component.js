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
import { HttpClient } from '@angular/common/http';
var ContactMeComponent = (function () {
    function ContactMeComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.mailSentStatus = 'NEW'; // it could be three possible status NEW, SENT, ERROR
        appService.shouldShowCover = false;
        document.getElementById("navbar").style.backgroundColor = 'black';
    }
    ContactMeComponent.prototype.reset = function () {
        this.email = null;
        this.subject = null;
        this.message = null;
        this.mailSentStatus = 'NEW';
    };
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
    ContactMeComponent.prototype.sendMail = function () {
        var _this = this;
        console.log('Trying to send mail...');
        //validate values
        if (!this.email) {
            //mail is null
            alert('Email is mandatory');
            return;
        }
        else {
            this.email = this.email.trim();
            if (this.email.length == 0) {
                //mail is null
                alert('Email is mandatory');
                return;
            }
            else {
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
        }
        else {
            this.subject = this.subject.trim();
            if (this.subject.length == 0) {
                //message is null
                alert('Subject is mandatory');
                return;
            }
        }
        var subject = "Important " + this.subject;
        if (!this.message) {
            //message is null
            alert('Message is mandatory');
            return;
        }
        else {
            this.message = this.message.trim();
            if (this.message.length == 0) {
                //message is null
                alert('Message is mandatory');
                return;
            }
        }
        var extensionString = '?replyTo=' + this.email + '&message=' + this.message;
        if (this.subject && this.subject.length > 0) {
            extensionString = extensionString + '&subject=' + subject;
        }
        //make web request
        this.http.get('https://script.google.com/a/anvayaanalytics.com/macros/s/AKfycbwabWW8eGG99It1lSvpD9t1dSUcpKBmxsfRB6yQGC4PoJJlwrs/exec' + extensionString).subscribe(function (data) {
            if (data.code == 2000) {
                console.log('success');
                _this.mailSentStatus = 'SENT';
            }
        });
    };
    ContactMeComponent.prototype.isValidMailFormat = function (email) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if ((email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return false;
        }
        return true;
    };
    return ContactMeComponent;
}());
ContactMeComponent = __decorate([
    Component({
        selector: 'contact-me',
        templateUrl: './contact-me.component.html',
        styleUrls: ['./contact-me.component.css']
    }),
    __metadata("design:paramtypes", [AppService, HttpClient])
], ContactMeComponent);
export { ContactMeComponent };
var MailResponse = (function () {
    function MailResponse() {
    }
    return MailResponse;
}());
export { MailResponse };
//# sourceMappingURL=contact-me.component.js.map