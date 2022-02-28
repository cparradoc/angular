import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCreatedDetailComponent } from './pokemon-created-detail.component';

describe('PokemonCreatedDetailComponent', () => {
  let component: PokemonCreatedDetailComponent;
  let fixture: ComponentFixture<PokemonCreatedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCreatedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCreatedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
