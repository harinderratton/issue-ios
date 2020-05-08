import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplepayPage } from './applepay.page';

describe('ApplepayPage', () => {
  let component: ApplepayPage;
  let fixture: ComponentFixture<ApplepayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplepayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplepayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
