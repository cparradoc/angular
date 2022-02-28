import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCreatedListComponent } from './pokemon-created-list.component';

describe('PokemonCreatedListComponent', () => {
  let component: PokemonCreatedListComponent;
  let fixture: ComponentFixture<PokemonCreatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCreatedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCreatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
