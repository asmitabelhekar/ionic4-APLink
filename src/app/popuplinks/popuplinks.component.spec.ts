import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopuplinksComponent } from './popuplinks.component';

describe('PopuplinksComponent', () => {
  let component: PopuplinksComponent;
  let fixture: ComponentFixture<PopuplinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuplinksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopuplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
