import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { StatsService } from './services/stats.service';
import { StatService } from './services/stat.service';
import { WatchplayerService } from './services/watchplayer.service';
import { EquipService } from './equip.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

//import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UserdataComponent } from './userdata/userdata.component';
import { NavComponent } from './nav/nav.component';
import { StatsComponent } from './stats/stats.component';
import { ShowstatsComponent } from './showstats/showstats.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChatComponent } from './chat/chat.component';
import { WatchplayerComponent } from './watchplayer/watchplayer.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FeedComponent } from './feed/feed.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivityComponent } from './activity/activity.component';
import { CreateactivityComponent } from './createactivity/createactivity.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { ApplyActivityComponent } from './apply-activity/apply-activity.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ApplicantsComponent } from './applicants/applicants.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { ReplyApplicationsComponent } from './reply-applications/reply-applications.component';
import { UploadEquipmentComponent } from './upload-equipment/upload-equipment.component';
import { BuyEquipmentComponent } from './buy-equipment/buy-equipment.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MsgEquipmentComponent } from './msg-equipment/msg-equipment.component';
import { NotificationComponent } from './notification/notification.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventComponent } from './event/event.component';
import { EventanalyticsComponent } from './eventanalytics/eventanalytics.component';
import { EventCalenderComponent } from './event-calender/event-calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { AnalyticsService } from './analytics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MyeventComponent } from './myevent/myevent.component';
import { ApplyEventComponent } from './apply-event/apply-event.component';
import { EventapplicantsComponent } from './eventapplicants/eventapplicants.component';
import { EventTeamsComponent } from './event-teams/event-teams.component';
import { ReplyeventComponent } from './replyevent/replyevent.component';
import { UploaddataComponent } from './uploaddata/uploaddata.component';
import { TeamComponent } from './team/team.component';
import { TeamcreateComponent } from './teamcreate/teamcreate.component';
import { AddteamComponent } from './addteam/addteam.component';
import {MatSelectModule} from '@angular/material/select';
import { RankingtableComponent } from './rankingtable/rankingtable.component';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    MainComponent,
    UserdataComponent,
    NavComponent,
    StatsComponent,
    ShowstatsComponent,
    ChatComponent,
    WatchplayerComponent,
    UserprofileComponent,
    FeedComponent,
    EquipmentComponent,
    ActivityComponent,
    CreateactivityComponent,
    MyActivitiesComponent,
    ApplyActivityComponent,
    ApplicantsComponent,
    ReplyApplicationsComponent,
    UploadEquipmentComponent,
    BuyEquipmentComponent,
    UpdateUserComponent,
    MsgEquipmentComponent,
    NotificationComponent,
    CreateeventComponent,
    EventComponent,
    EventanalyticsComponent,
    EventCalenderComponent,
    MyeventComponent,
    ApplyEventComponent,
    EventapplicantsComponent,
    EventTeamsComponent,
    ReplyeventComponent,
    UploaddataComponent,
    TeamComponent,
    TeamcreateComponent,
    AddteamComponent,
    RankingtableComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    NgbModalModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatBadgeModule,
    MatSelectModule,
    FullCalendarModule,
    NgxChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    




    ToastrModule.forRoot(),
    RouterModule.forRoot([

      { path: 'signup', component: SignupComponent },
      { path: 'signup/:id', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'navbar', component: NavbarComponent,canActivate:[AuthGuard] },
      { path: 'profile', component: ProfileComponent },
      { path: '', component: HomeComponent },
      { path: 'main', component: MainComponent },
      { path: 'userdata', component: UserdataComponent,canActivate:[AuthGuard]  },
      { path: 'nav', component: NavComponent,canActivate:[AuthGuard]  },
      { path: 'stats', component: StatsComponent,canActivate:[AuthGuard]  },
      { path: 'showstats/:id', component: ShowstatsComponent,canActivate:[AuthGuard]  },
      { path: 'chat', component: ChatComponent,canActivate:[AuthGuard]  },
      { path: 'watchplayer', component: WatchplayerComponent,canActivate:[AuthGuard]  },
      { path: 'userprofile', component: UserprofileComponent,canActivate:[AuthGuard]  },
      { path: 'feed', component: FeedComponent,canActivate:[AuthGuard]  },
      { path: 'equipments', component: EquipmentComponent,canActivate:[AuthGuard]  },
      { path: 'activity', component: ActivityComponent,canActivate:[AuthGuard]  },
      { path: 'createactivity', component: CreateactivityComponent,canActivate:[AuthGuard]  },
      { path: 'myactivity', component: MyActivitiesComponent,canActivate:[AuthGuard]  },
      { path: 'equipment', component: EquipmentComponent,canActivate:[AuthGuard]  },
      { path: 'createevent', component: CreateeventComponent,canActivate:[AuthGuard] },
      {path: 'event' , component: EventComponent,canActivate:[AuthGuard] },
      {path: 'eventanalytics' , component: EventanalyticsComponent,canActivate:[AuthGuard] },
      {path: 'eventcalender' , component: EventCalenderComponent,canActivate:[AuthGuard] },
      {path: 'myevents' , component: MyeventComponent,canActivate:[AuthGuard] },
      {path: 'eventteams' , component: EventTeamsComponent},
      {path:'createteam',component:TeamcreateComponent,canActivate:[AuthGuard] },
      {path:'rankingtable',component:RankingtableComponent,canActivate:[AuthGuard] },
      {path: 'myteam', component:TeamComponent,canActivate:[AuthGuard] }



    ]),
  ],
  providers: [
    AuthService,
    AuthGuard,
    StatsService,
    StatService,
    WatchplayerService,
    EquipService,
    AnalyticsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
