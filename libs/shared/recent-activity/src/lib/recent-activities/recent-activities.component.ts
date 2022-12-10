import { Component, OnInit } from '@angular/core';
import { RecentActivity } from '../recent-activity';
import { RecentActivityService } from '../recent-activity.service';

@Component({
  selector: 'mfe2-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss'],
})
export class RecentActivitiesComponent implements OnInit {

  recentActivities: RecentActivity[] = [];
  constructor(private recentActService: RecentActivityService) {

  }
  ngOnInit(): void {
    // console.log('Recent activities component', this.recentActService.recentActivities$.getLastEvent());
    this.recentActivities = this.recentActService.recentActivities$.getEvents();
      // this.recentActService.recentActivities$
      //   .subscribe((d: RecentActivity) => {
      //     this.recentActivities.push(d);
      //     console.log('subscribing to recent activities', d, this.recentActivities);
      //   });
  }
}
