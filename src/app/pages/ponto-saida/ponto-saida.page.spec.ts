import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontoSaidaPage } from './ponto-saida.page';

describe('PontoSaidaPage', () => {
  let component: PontoSaidaPage;
  let fixture: ComponentFixture<PontoSaidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontoSaidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontoSaidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
