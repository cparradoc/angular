import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMixComponent } from './pokemon-mix.component';

describe('PokemonMixComponent', () => {
  let component: PokemonMixComponent;
  let fixture: ComponentFixture<PokemonMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonMixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
