import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletTechnologiesPopComponent } from './delet-technologies-pop.component';

describe('DeletTechnologiesPopComponent', () => {
  let component: DeletTechnologiesPopComponent;
  let fixture: ComponentFixture<DeletTechnologiesPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletTechnologiesPopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletTechnologiesPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
