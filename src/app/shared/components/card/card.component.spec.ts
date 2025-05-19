import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title and description', () => {
    component.title = "Test Title";
    component.description = "This is a description.";
    fixture.detectChanges();

    const titleEl = fixture.nativeElement.querySelector('.card__title');
    const descEl = fixture.nativeElement.querySelector('.card__description');

    expect(titleEl.textContent).toContain('Test Title');
    expect(descEl.textContent).toContain('This is a description.');
  });

  it('should display the correct icon image', () => {
    component.icon = 'test-icon.svg'
    fixture.detectChanges();

    const imgEl = fixture.nativeElement.querySelector('.card__icon');

    expect(imgEl.getAttribute('src')).toBe('/images/test-icon.svg');
    expect(imgEl.getAttribute('alt')).toBe('test-icon');
  });

  it('should apply the correct background color from the input', () => {
    component.color = 'primary'; // Assuming a CSS variable like --color-primary exists
    fixture.detectChanges();

    const topBarEl = fixture.nativeElement.querySelector('.card__top-bar');

    expect(topBarEl.getAttribute('style')).toContain('--color-primary');
  })
});
