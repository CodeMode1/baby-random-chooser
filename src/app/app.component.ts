import { Component } from '@angular/core';

import { BabyService } from './baby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public babyName: string = '';

  constructor(private _babyService: BabyService) { }

  public onGetGirlNames(): void {
    this.babyName = this._babyService.getRandomGirlName();
  }

  public onGetBoyNames(): void {
    this.babyName = this._babyService.getRandomBoyName();
  }
}
