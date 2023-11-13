import { Pet } from "../pet"

export enum Gender {
	male = "Male",
	female = "Female",
	other = "Other"
}

export interface Person {
	name: string,
	gender: Gender
	age: number
	pets?: Pet[]
}