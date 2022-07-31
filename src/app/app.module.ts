import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';

import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // StoreModule.forRoot(ROOT_REDUCERS),
    // StoreDevtoolsModule.instrument({
    //   maxAge:25,
    //   logOnly:true,
    //   autoPause:true
    // }),
    // EffectsModule.forRoot([WordEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
