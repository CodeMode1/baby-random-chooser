import { Injectable } from '@angular/core';

// Application imports
import { Baby } from './baby.model';

@Injectable({
	providedIn: 'root'
})
export class BabyService {
	private girlNames: Map<number, Baby> = new Map<number, Baby>();
	private boyNames: Map<number, Baby> = new Map<number, Baby>();

	constructor() {
		this.girlNames.set(0, new Baby({ name: "Olivia", isBoy: false }));
		this.girlNames.set(1, new Baby({ name: "Emma", isBoy: false }));
		this.girlNames.set(2, new Baby({ name: "Ava", isBoy: false }));
		this.girlNames.set(3, new Baby({ name: "Charlotte", isBoy: false }));
		this.girlNames.set(4, new Baby({ name: "Sophia", isBoy: false }));
		this.girlNames.set(5, new Baby({ name: "Amelia", isBoy: false }));
		this.girlNames.set(6, new Baby({ name: "Isabella", isBoy: false }));
		this.girlNames.set(7, new Baby({ name: "Mia", isBoy: false }));
		this.girlNames.set(8, new Baby({ name: "Evelyn", isBoy: false }));
		this.girlNames.set(9, new Baby({ name: "Harper", isBoy: false }));
		this.girlNames.set(10, new Baby({ name: "Gianna", isBoy: false }));
		this.girlNames.set(11, new Baby({ name: "Luna", isBoy: false }));
		this.girlNames.set(12, new Baby({ name: "Ella", isBoy: false }));
		this.girlNames.set(13, new Baby({ name: "Sofia", isBoy: false }));
		this.girlNames.set(14, new Baby({ name: "Autumn", isBoy: false }));
		this.girlNames.set(15, new Baby({ name: "Josephine", isBoy: false }));
		this.girlNames.set(16, new Baby({ name: "Adeline", isBoy: false }));

		this.boyNames.set(0, new Baby({ name: "Liam" }))
		this.boyNames.set(1, new Baby({ name: "Noah" }));
		this.boyNames.set(2, new Baby({ name: "Oliver" }));
		this.boyNames.set(3, new Baby({ name: "James" }));
		this.boyNames.set(4, new Baby({ name: "Levi" }));
		this.boyNames.set(5, new Baby({ name: "Julian" }));
		this.boyNames.set(6, new Baby({ name: "Nathan" }));
		this.boyNames.set(7, new Baby({ name: "Nolan" }));
		this.boyNames.set(8, new Baby({ name: "Antoine" }));
		this.boyNames.set(10, new Baby({ name: "Auguste" }));
		this.boyNames.set(11, new Baby({ name: "Armand" }));
		this.boyNames.set(12, new Baby({ name: "Leo" }));
		this.boyNames.set(13, new Baby({ name: "Mathias" }));
		this.boyNames.set(14, new Baby({ name: "Lucas" }));
		this.boyNames.set(15, new Baby({ name: "William" }));
		this.boyNames.set(16, new Baby({ name: "Louis" }));
		this.boyNames.set(17, new Baby({ name: "Charles" }));
		this.boyNames.set(18, new Baby({ name: "Léon" }));
	}

	public getRandomGirlName(): Baby {
		const key = Math.floor(Math.random() * Array.from(this.girlNames.keys()).length);
		return this.girlNames.get(key);
	}

	public getRandomBoyName(): Baby {
		const key = Math.floor(Math.random() * Array.from(this.boyNames.keys()).length);
		return this.boyNames.get(key);
	}
}
