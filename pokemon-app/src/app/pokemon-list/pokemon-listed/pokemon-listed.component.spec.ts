import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListedComponent } from './pokemon-listed.component';

describe('PokemonListedComponent', () => {
  let component: PokemonListedComponent;
  let fixture: ComponentFixture<PokemonListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
