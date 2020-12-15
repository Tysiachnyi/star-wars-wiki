import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StarwarsService} from '../../services/starwars.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  starWarsForm: FormGroup;
  constructor(
    private starwarsHttpService: StarwarsService,
    private fb: FormBuilder
  ) {
    this.starWarsForm = this.fb.group({
      hero: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.starwarsHttpService.getPeople().subscribe(item => {
      // @ts-ignore
      item.results.forEach(hero => {
        this.hero.push(
          this.fb.group({
            name: new FormControl(hero.name),
            gender: new FormControl(hero.gender),
          })
        );
      });
    });
  }

  get hero(): Partial<FormArray> {
    return this.starWarsForm.get('hero');
  }

  onClickSave() {
  }
}
