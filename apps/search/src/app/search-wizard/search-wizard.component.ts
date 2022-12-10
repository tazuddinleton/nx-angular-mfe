import { Component, OnInit } from '@angular/core';
import { RecentActivityService } from '@mfe2/shared/recent-activity';

@Component({
  selector: 'mfe2-search-wizard',
  templateUrl: './search-wizard.component.html',
  styleUrls: ['./search-wizard.component.scss'],
})
export class SearchWizardComponent implements OnInit{
  constructor(private recentActService: RecentActivityService) {

  }

  ngOnInit(): void {
    console.log('adding new activity');
    this.recentActService.add({title: 'Search Wizard', detail: 'Just visited search wizard', timeStamp: new Date()})
  }
}
