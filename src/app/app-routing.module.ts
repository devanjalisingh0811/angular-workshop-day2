import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ObservableExampleComponent } from './components/observable-example/observable-example.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'components',
  component: ParentComponent
},
{
  path: 'reactive-forms',
  component: ReactiveFormComponent
},
{
  path: 'template-driven-form',
  component: TdFormComponent
},
{
  path: 'observables',
  component: ObservableExampleComponent
},
{
  path:"**",
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
