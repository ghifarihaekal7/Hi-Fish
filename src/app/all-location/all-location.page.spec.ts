import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllLocationPage } from './all-location.page';

describe('AllLocationPage', () => {
  let component: AllLocationPage;
  let fixture: ComponentFixture<AllLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
