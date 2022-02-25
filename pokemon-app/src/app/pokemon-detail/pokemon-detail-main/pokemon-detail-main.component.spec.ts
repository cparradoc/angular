import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailMainComponent } from './pokemon-detail-main.component';

describe('PokemonDetailMainComponent', () => {
  let component: PokemonDetailMainComponent;
  let fixture: ComponentFixture<PokemonDetailMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
