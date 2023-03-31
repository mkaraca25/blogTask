import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Yönlendirme rotası eklendi
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }, // Add this line
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


