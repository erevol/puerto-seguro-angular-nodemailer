import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
    { path: '', component: HeroComponent },            // Página principal
    { path: 'nosotros', component: NosotrosComponent },            // Página principal
    { path: 'contacto', component: ContactComponent }  // Página de contacto
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
