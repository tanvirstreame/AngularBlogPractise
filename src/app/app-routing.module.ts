import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{path:'About',component:AboutComponent},
{path:'Contact',component:ContactComponent
},
{path:'Topic',component:TopicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[AboutComponent,ContactComponent,TopicComponent]