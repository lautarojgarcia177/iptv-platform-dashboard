import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserPlatformComponent } from './components/charts/user-platform/user-platform.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelsViewsComponent } from './components/charts/channels-views/channels-views.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MostViewedChannelsComponent } from './components/charts/most-viewed-channels/most-viewed-channels.component';
import { DeviceVisualizationComponent } from './components/charts/device-visualization/device-visualization.component';
import { MostViewedChannelsNowComponent } from './components/charts/most-viewed-channels-now/most-viewed-channels-now.component';
import { TotalUsersComponent } from './components/charts/total-users/total-users.component';
import { MostViewedProgramsComponent } from './components/charts/most-viewed-programs/most-viewed-programs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserPlatformComponent,
    ChannelsViewsComponent,
    MostViewedChannelsComponent,
    DeviceVisualizationComponent,
    MostViewedChannelsNowComponent,
    TotalUsersComponent,
    MostViewedProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
