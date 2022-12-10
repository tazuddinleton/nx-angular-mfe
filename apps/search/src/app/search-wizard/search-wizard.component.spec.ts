import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWizardComponent } from './search-wizard.component';

describe('SearchWizardComponent', () => {
  let component: SearchWizardComponent;
  let fixture: ComponentFixture<SearchWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWizardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
