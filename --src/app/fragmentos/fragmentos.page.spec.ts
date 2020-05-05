import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FragmentosPage } from './fragmentos.page';

describe('FragmentosPage', () => {
  let component: FragmentosPage;
  let fixture: ComponentFixture<FragmentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragmentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FragmentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
