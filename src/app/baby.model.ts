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
			imgUrl,
			astrologicSign,
			isBoy = true
		} = obj;

		this.name = name;
		this.description = description;
		this.imgUrl = imgUrl;
		this.astrologicSign = astrologicSign;
		this.isBoy = isBoy;
	}
}
