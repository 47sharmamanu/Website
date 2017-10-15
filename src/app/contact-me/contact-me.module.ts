import { ContactMeComponent } from './contact-me.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: ContactMeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [ContactMeComponent]
})
export class ContactMeModule { }