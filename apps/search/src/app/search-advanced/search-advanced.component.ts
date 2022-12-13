import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EndecapodService } from '@mfe2/shared/endeca';
import { RecentActivityService } from '@mfe2/shared/recent-activity';

@Component({
  selector: 'mfe2-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.scss'],
})
export class SearchAdvancedComponent implements OnInit {
  countries: Country[] = [];
  relatedCountries: Country[] = [];

  selectedCountries: Country[] = [];
  selectedRelatedCountries: Country[] = [];

  countryFormControl = new FormControl('');
  relatedCountryFormControl = new FormControl('');
  constructor(
    private recentActService: RecentActivityService,
    private endecaService: EndecapodService
    ) {}

  ngOnInit(): void {
    this.recentActService.add({title: 'Advance search', detail: 'Just visited advanced search', timeStamp: new Date()});
    this.loadCountries();
    this.loadRelatedCountry();
  }

  loadCountries() {
    const url = "N=0&Ne=603291&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|2";
    this.endecaService.queryUrl(url)
    .subscribe(res => {
      this.countries = res.dimensions.find((x: Country) => x.id === 603291).values;
      console.log('DEBUG: countries', this.countries);
    });
  }

  loadRelatedCountry() {
    const url = 'N=0&Ne=603292&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|1';
    this.endecaService.queryUrl(url)
    .subscribe(res => {
      this.relatedCountries = res.dimensions.find((x: Country) => x.id === 603292).values;
      console.log('DEBUG: related countries', res);
    });
  }
}


interface Country {
  id: number;
  name?: string;
}
