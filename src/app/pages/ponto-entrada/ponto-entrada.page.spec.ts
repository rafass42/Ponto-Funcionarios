import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontoEntradaPage } from './ponto-entrada.page';

describe('PontoEntradaPage', () => {
  let component: PontoEntradaPage;
  let fixture: ComponentFixture<PontoEntradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontoEntradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontoEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
