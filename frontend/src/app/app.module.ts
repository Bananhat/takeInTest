import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { AdministrationToolComponent } from './administration-tool/administration-tool.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


const appRoutes: Routes = [
  {path : '', component : ListeProduitComponent},
  {path: 'produits/:categorie', component: ListeProduitComponent},
  {path : 'connexion', component: ConnexionComponent},
  {path : 'inscription', component : InscriptionComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
    AdministrationToolComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
