import { Person } from "../../../types/person";
import { Pet, PetType } from "../../../types/pet";

type Accumulator = {
	[key: string]: Pet[]
}

export const petsOfTypeByOwnerAttribute = (ownerAttribute: keyof Omit<Person, 'pets'>, petType: PetType, owners: Person[] = []) => {
	return owners.reduce((accumulator: Accumulator, owner) => {
		const group = owner[ownerAttribute]
		const pets = accumulator[group] || []
		accumulator[group] = pets.concat(owner.pets?.filter((pet) => pet.type === petType) || [])

		return accumulator
	}, {})
}