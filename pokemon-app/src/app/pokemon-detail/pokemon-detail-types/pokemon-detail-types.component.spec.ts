import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailTypesComponent } from './pokemon-detail-types.component';

describe('PokemonDetailTypesComponent', () => {
  let component: PokemonDetailTypesComponent;
  let fixture: ComponentFixture<PokemonDetailTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
