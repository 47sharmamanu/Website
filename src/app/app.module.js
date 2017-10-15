var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppService } from './app.service';
import { CoverComponent } from './cover/cover.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
var appRoutes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact-me', component: ContactMeComponent },
    { path: 'services', component: ServicesComponent },
    {
        path: 'projects',
        component: ProjectComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent, ProjectComponent, AboutMeComponent, BlogComponent, CoverComponent, PageNotFoundComponent, ContactMeComponent, FooterComponent, ServicesComponent
        ],
        imports: [
            FormsModule,
            CommonModule,
            RouterModule.forRoot(appRoutes),
            BrowserModule,
            HttpClientModule
        ],
        providers: [AppService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map