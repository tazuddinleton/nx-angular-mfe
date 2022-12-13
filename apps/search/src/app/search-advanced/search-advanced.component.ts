import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
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

  selectedCountries: number[] = [];
  selectedRelatedCountries: number[] = [];

  countryFormControl = new FormControl('');
  relatedCountryFormControl = new FormControl('');

  chips : Country[] = [];
  searchResults: any[] = [];
  constructor(
    private recentActService: RecentActivityService,
    private endecaService: EndecapodService
    ) {}

  ngOnInit(): void {
    this.recentActService.add({title: 'Advance search', detail: 'Just visited advanced search', timeStamp: new Date()});
    this.loadCountries();
    this.loadMainResult();
  }

  loadCountries() {
    const url = "N=0&Ne=603291&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|2";
    this.endecaService.queryUrl(url)
    .subscribe(res => {
      this.countries = res.dimensions.find((x: Country) => x.id === 603291).values;
      console.log('DEBUG: countries', this.countries);
    });
  }

  onCountryChange(c: MatSelectChange) {
    console.log('DEBUG: selected countries', c, this.selectedCountries);
    this.chips = [...this.countries.filter(c => this.selectedCountries.includes(c.id))];
    this.loadMainResult(this.selectedCountries);
  }

  loadMainResult(dims: number[] = []) {
    const d = dims.join("+");
    const optional = (d: string) => d ? `N=0+${d}` : `N=0`;
    const url = `${optional(d)}&Ne=7487&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Ns=sort_date_common|1`;
    this.endecaService.queryUrl(url).subscribe(res => {
      const r = res.records.map(
        (r: Result) => r.records?.map((rr: Result) => {
            return {
              title: rr?.properties?.global_title[0]
            }
          })
        ).flat();

        const s = new Set(r);
        this.searchResults = Array.from(s);


        console.log('DEBUG: result', this.searchResults);
    });
  }
}


interface Result {
  records?: Result[];
  properties?: {
    global_title: string[]
  }
}



interface Country {
  id: number;
  name?: string;
}
