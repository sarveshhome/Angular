import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainbodyComponent } from './containbody.component';

describe('ContainbodyComponent', () => {
  let component: ContainbodyComponent;
  let fixture: ComponentFixture<ContainbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
