import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecentActivity } from './recent-activity';

import { Observable } from 'windowed-observable'

@Injectable({
  providedIn: 'root'
})
export class RecentActivityService {

  private obs = new Observable("recent-activities");
  // private store: RecentActivity[] = [];
  // private recentActivities = new BehaviorSubject<RecentActivity[]>([{title: 'test', timeStamp: new Date()}]);

  recentActivities$ = this.obs;

  add(activity: RecentActivity) {

    this.obs.publish(activity);
    // this.store.push(activity);
    // console.log('state of the store', this.store);
    // this.recentActivities.next(this.store);
  }
}

