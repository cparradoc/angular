import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailImagesComponent } from './pokemon-detail-images.component';

describe('PokemonDetailImagesComponent', () => {
  let component: PokemonDetailImagesComponent;
  let fixture: ComponentFixture<PokemonDetailImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
