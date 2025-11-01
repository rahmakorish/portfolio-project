import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatecontact } from './updatecontact';

describe('Updatecontact', () => {
  let component: Updatecontact;
  let fixture: ComponentFixture<Updatecontact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatecontact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatecontact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
