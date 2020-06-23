import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembresiaPage } from './membresia.page';

describe('MembresiaPage', () => {
  let component: MembresiaPage;
  let fixture: ComponentFixture<MembresiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembresiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
