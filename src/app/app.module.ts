import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppService } from './app.service';
import { CoverComponent } from './cover/cover.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'about-me', loadChildren: "./about-me/about-me.module#AboutMeModule" },
  { path: 'contact-me', loadChildren: "./contact-me/contact-me.module#ContactMeModule" },
  { path: 'bolg', component: BlogComponent },
  { path: 'services', loadChildren: "./services/services.module#ServicesModule" },
  { path: 'projects', loadChildren: "./project/project.module#ProjectModule" },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, CoverComponent, PageNotFoundComponent, FooterComponent, BlogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
