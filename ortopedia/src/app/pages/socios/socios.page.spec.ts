import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SociosPage } from './socios.page';

describe('SociosPage', () => {
  let component: SociosPage;
  let fixture: ComponentFixture<SociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
