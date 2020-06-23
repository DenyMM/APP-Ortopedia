import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsejoPage } from './consejo.page';

describe('ConsejoPage', () => {
  let component: ConsejoPage;
  let fixture: ComponentFixture<ConsejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
