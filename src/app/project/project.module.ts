import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: ProjectComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [ProjectComponent]
})
export class ProjectModule { }