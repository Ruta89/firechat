import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '../common/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {SignInComponent} from './sign-in.component';

const routes: Routes = [
    {path: 'sign-in', component: SignInComponent}
];

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class SignInModule { }
