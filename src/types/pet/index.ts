export enum PetType {
	cat = "Cat",
	dog = "Dog",
	fish = "Fish"
}

export interface Pet {
	name: string,
	type: PetType
}