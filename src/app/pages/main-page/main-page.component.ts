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
  aboutMeDescription: string;

  constructor(
    private starwarsHttpService: StarwarsService,
    private fb: FormBuilder
  ) {
    this.starWarsForm = this.fb.group({
      hero: this.fb.array([]),

      // // 1 Variant. It works.
      // aboutMe: this.fb.group({
      //   description: ['Hardcoded initial value', [Validators.required]]
      // })

      // // 2 Variant. It doesn't work.
      // aboutMe: this.fb.group({
      //   description: [this.aboutMeDescription, [Validators.required]]
      // })

    });
  }

  ngOnInit(): void {
    this.starwarsHttpService.getPeople().subscribe(item => {
      // @ts-ignore
      item.results.forEach(hero => {
        this.hero.push(
          this.fb.group({
            name: [hero.name],
            gender: [hero.gender],
          })
        );
      });
    });

    this.starwarsHttpService.getTextBlockData().subscribe(item => {
      this.aboutMeDescription = item.textBlockDescription;
      console.log(this.aboutMeDescription);
    });
  }

  get hero(): Partial<FormArray> {
    return this.starWarsForm.get('hero');
  }

  onClickSave() {
  }
}
