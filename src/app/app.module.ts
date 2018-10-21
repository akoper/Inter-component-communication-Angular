import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';
import {ParentOfSiblingsComponent} from './parent-of-siblings/parent-of-siblings.component';
import {SiblingOneComponent} from './sibling-one/sibling-one.component';
import {SiblingTwoComponent} from './sibling-two/sibling-two.component';
import {AppRoutingModule} from './/app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
        ChildComponent,
        ParentOfSiblingsComponent,
        SiblingOneComponent,
        SiblingTwoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
