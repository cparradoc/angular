import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeInfoComponent } from './pokemon-home-info.component';

describe('PokemonHomeInfoComponent', () => {
  let component: PokemonHomeInfoComponent;
  let fixture: ComponentFixture<PokemonHomeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
