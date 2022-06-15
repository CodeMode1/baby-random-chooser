import { Component } from '@angular/core';

// Application imports.
import { Baby } from './baby.model';
import { BabyService } from './baby.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public baby: Baby | null = null;

	constructor(private _babyService: BabyService) { }

	public onGetGirlNames(): void {
		this.baby = this._babyService.getRandomGirlName();
	}

	public onGetBoyNames(): void {
		this.baby = this._babyService.getRandomBoyName();
	}
}
