import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateskills } from './updateskills';

describe('Updateskills', () => {
  let component: Updateskills;
  let fixture: ComponentFixture<Updateskills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateskills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateskills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
