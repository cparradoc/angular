import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailFaceComponent } from './pokemon-detail-face.component';

describe('PokemonDetailFaceComponent', () => {
  let component: PokemonDetailFaceComponent;
  let fixture: ComponentFixture<PokemonDetailFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
