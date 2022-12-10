import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [RecentActivitiesComponent],
  exports: [RecentActivitiesComponent]
})
export class SharedRecentActivityModule {}
