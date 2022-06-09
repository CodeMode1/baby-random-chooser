import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  private girlNames: Map<number, string> = new Map<number, string>();
  private boyNames: Map<number, string> = new Map<number, string>();

  constructor() {
    this.girlNames.set(0, "Olivia");
    this.girlNames.set(1, "Emma");
    this.girlNames.set(2, "Ava");
    this.girlNames.set(3, "Charlotte");
    this.girlNames.set(4, "Sophia");
    this.girlNames.set(5, "Amelia");
    this.girlNames.set(6, "Isabella");
    this.girlNames.set(7, "Mia");
    this.girlNames.set(8, "Evelyn");
    this.girlNames.set(9, "Harper");
    this.girlNames.set(10, "Gianna");
    this.girlNames.set(11, "Luna");
    this.girlNames.set(12, "Ella");
    this.girlNames.set(13, "Sofia");
    this.girlNames.set(14, "Autumn");
    this.girlNames.set(15, "Josephine");
    this.girlNames.set(16, "Adeline");

    this.boyNames.set(0, "Liam");
    this.boyNames.set(1, "Noah");
    this.boyNames.set(2, "Oliver");
    this.boyNames.set(3, "James");
    this.boyNames.set(4, "Levi");
    this.boyNames.set(5, "Julian");
    this.boyNames.set(6, "Nathan");
    this.boyNames.set(7, "Nolan");
    this.boyNames.set(8, "Antoine");
    this.boyNames.set(9, "Leon");
    this.boyNames.set(10, "Auguste");
    this.boyNames.set(11, "Armand");
    this.boyNames.set(12, "Leo");
    this.boyNames.set(13, "Mathias");
    this.boyNames.set(14, "Lucas");
    this.boyNames.set(15, "William");
    this.boyNames.set(16, "Louis");
   }

   public getRandomGirlName(): string {
    const key = Math.floor(Math.random() * Array.from(this.girlNames.keys()).length);
    return this.girlNames.get(key);
  }

  public getRandomBoyName(): string {
    const key = Math.floor(Math.random() * Array.from(this.boyNames.keys()).length);
    return this.boyNames.get(key);
  }
}
