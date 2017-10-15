import { ServicesComponent } from './services.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: ServicesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [ServicesComponent]
})
export class ServicesModule { }