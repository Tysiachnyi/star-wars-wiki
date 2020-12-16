import {Component, OnInit} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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

      // // 1 Variant. It works .  --- Bcs u hardcoded string
      // aboutMe: this.fb.group({
      //   description: ['Hardcoded initial value', [Validators.required]]
      // })

      // // 2 Variant. It doesn't work. --- Bcs this.aboutMeDescription is undefined, you get data later.
      // aboutMe: this.fb.group({
      //   description: [this.aboutMeDescription, [Validators.required]]
      // })
    });
  }

  ngOnInit(): void {
    this.starwarsHttpService.getTextBlockData().subscribe(item => {
      this.hero.push(
        this.fb.group({
          description: [item.textBlockDescription, [Validators.required]],
        })
      );
    });
  }

  get hero(): Partial<FormArray> {
    return this.starWarsForm.get('hero');
  }

  onClickSave() {}
}
