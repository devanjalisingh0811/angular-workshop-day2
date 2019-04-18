import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FilterdataPipe } from './pipes/filterdata.pipe';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ObservableExampleComponent } from './components/observable-example/observable-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    FilterdataPipe,
    ReactiveFormComponent,
    TdFormComponent,
    ObservableExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
