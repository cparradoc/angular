import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeWebinfoComponent } from './pokemon-home-webinfo.component';

describe('PokemonHomeWebinfoComponent', () => {
  let component: PokemonHomeWebinfoComponent;
  let fixture: ComponentFixture<PokemonHomeWebinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomeWebinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeWebinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
