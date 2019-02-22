import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'hero', component: HeroComponent },            // Página principal
    { path: 'contact', component: ContactComponent }  // Página de contacto
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
