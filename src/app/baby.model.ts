export class Baby {
	public name: string;
	public description: string;
	public imgUrl: string;
	public astrologicSign: number;
	public isBoy: boolean;

	constructor(obj = {} as any) {
		const {
			name = "",
			description = "",
			astrologicSign,
			isBoy = true,
			imgUrl = isBoy ? "" : "",
		} = obj;

		this.name = name;
		this.description = description;
		this.imgUrl = imgUrl;
		this.astrologicSign = astrologicSign;
		this.isBoy = isBoy;
	}
}
