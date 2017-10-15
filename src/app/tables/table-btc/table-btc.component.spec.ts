import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBTCComponent } from './table-btc.component';

describe('TableBTCComponent', () => {
  let component: TableBTCComponent;
  let fixture: ComponentFixture<TableBTCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBTCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
