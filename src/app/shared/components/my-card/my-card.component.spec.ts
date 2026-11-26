import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCardComponent } from './my-card.component';

describe('MyCardComponent', () => {
  let component: MyCardComponent;
  let fixture: ComponentFixture<MyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
