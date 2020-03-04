import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PalabrasPage } from './palabras.page';

describe('PalabrasPage', () => {
  let component: PalabrasPage;
  let fixture: ComponentFixture<PalabrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PalabrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
