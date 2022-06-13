import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssiduiteComponent } from './assiduite/assiduite.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatiereComponent } from './matiere/matiere.component';
import { CalendarComponent } from './calendar/calendar.component';



import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AssiduiteService } from './service/assiduite.service';
import { SelectionneurSeanceComponent } from './navbar/selectionneur-seance/selectionneur-seance.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileService } from './service/profile.service';
import { Role } from './enum/role.enum';
import { UiSwitchModule } from 'ngx-ui-switch';
import {EtudiantService} from "./service/etudiant.service";
import { HttpClientModule } from '@angular/common/http';




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [

    AppComponent,
    AssiduiteComponent,
    ProfileComponent,
    NavbarComponent,
    MatiereComponent,
    CalendarComponent,
    SelectionneurSeanceComponent,
    ListEtudiantComponent
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    UiSwitchModule,
    HttpClientModule

  ],
  providers: [
    ProfileService,
    MatDatepickerModule,
    EtudiantService,
    SelectionneurSeanceComponent


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
