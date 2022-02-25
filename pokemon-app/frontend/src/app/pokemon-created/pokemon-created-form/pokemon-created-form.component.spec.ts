import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCreatedFormComponent } from './pokemon-created-form.component';

describe('PokemonCreatedFormComponent', () => {
  let component: PokemonCreatedFormComponent;
  let fixture: ComponentFixture<PokemonCreatedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCreatedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCreatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
