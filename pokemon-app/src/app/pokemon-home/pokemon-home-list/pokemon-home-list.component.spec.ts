import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeListComponent } from './pokemon-home-list.component';

describe('PokemonHomeListComponent', () => {
  let component: PokemonHomeListComponent;
  let fixture: ComponentFixture<PokemonHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
