import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCreatedComponent } from './pokemon-created.component';

describe('PokemonCreatedComponent', () => {
  let component: PokemonCreatedComponent;
  let fixture: ComponentFixture<PokemonCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
