import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: AboutMeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [AboutMeComponent]
})
export class AboutMeModule { }