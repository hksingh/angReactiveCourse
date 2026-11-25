import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavFooterComponent } from './nav-footer.component';

describe('NavFooterComponent', () => {
  let component: NavFooterComponent;
  let fixture: ComponentFixture<NavFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavFooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
