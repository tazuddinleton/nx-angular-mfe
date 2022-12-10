import { Component, OnInit } from '@angular/core';
import { RecentActivityService } from '@mfe2/shared/recent-activity';

@Component({
  selector: 'mfe2-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.scss'],
})
export class SearchAdvancedComponent implements OnInit{
  constructor(private recentActService: RecentActivityService) {}

  ngOnInit(): void {
    this.recentActService.add({title: 'Advance search', detail: 'Just visited advanced search', timeStamp: new Date()})
  }
}
