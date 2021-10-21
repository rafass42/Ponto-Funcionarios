import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoFuncPage } from './info-func.page';

describe('InfoFuncPage', () => {
  let component: InfoFuncPage;
  let fixture: ComponentFixture<InfoFuncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFuncPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoFuncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
