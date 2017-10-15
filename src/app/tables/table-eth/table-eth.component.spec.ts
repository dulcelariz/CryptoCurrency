import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableETHComponent } from './table-eth.component';

describe('TableETHComponent', () => {
  let component: TableETHComponent;
  let fixture: ComponentFixture<TableETHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableETHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableETHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
