import { Person } from "../../../types/person";
import { Pet, PetType } from "../../../types/pet";

export interface CategorisedPet {
	[key: string]: Pet[]
}

export const petsOfTypeByOwnerAttribute = (ownerAttribute: keyof Omit<Person, 'pets'>, petType: PetType, owners: Person[] = []) => {
	return owners.reduce((accumulator: CategorisedPet, owner) => {
		const group = owner[ownerAttribute]
		const pets = accumulator[group] || []
		accumulator[group] = pets.concat(owner.pets?.filter((pet) => pet.type === petType) || [])

		return accumulator
	}, {})
}