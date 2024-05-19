import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {


  let component: HomeComponent; // the component to test
  let fixture: ComponentFixture<HomeComponent>; // the ComponentFixtureAutoDetect -> settings box to test my component

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLElement = fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe('Workshop Angular');
    //expect(header.textContent).toContain('Workshop Angular');
  })

});
