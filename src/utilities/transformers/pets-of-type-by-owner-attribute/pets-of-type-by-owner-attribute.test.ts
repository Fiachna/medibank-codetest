import { Gender, Person } from "../../../types/person"
import { PetType } from "../../../types/pet"
import { petsOfTypeByOwnerAttribute } from "./pets-of-type-by-owner-attribute"

describe('#petsOfTypeByOwnerAttribute', () => {
	describe('when there is a group of owners all with pets', () => {
		const owners: Person[] = [
			{ name: 'Harold', gender: Gender.male, age: 32, pets: [
				{ name: 'Nibbles', type: PetType.dog },
				{ name: 'Stevil', type: PetType.cat }
			]},
			{ name: 'Gertrude', gender: Gender.other, age: 32, pets: [
				{ name: 'Angry Bruce', type: PetType.fish },
				{ name: 'Beelz', type: PetType.cat }
			] },
			{ name: 'Alison', gender: Gender.female, age: 32, pets: [
				{ name: 'Mildred', type: PetType.fish },
				{ name: 'Jim the pious', type: PetType.dog },
				{ name: 'Golfred', type: PetType.fish }
			] },
			{ name: 'Wynston', gender: Gender.male, age: 32, pets: [
				{ name: 'Abercrombie', type: PetType.cat }
			] },
			{ name: 'Gnarrr the destroyer', gender: Gender.female, age: 32, pets: [
				{ name: 'DESTRUCTORNATOR', type: PetType.fish },
				{ name: 'The Shadow', type: PetType.fish }
			] }
		]

		it('groups pets of a given type by a specified owner attribute', () => {
			const result = petsOfTypeByOwnerAttribute('gender', PetType.fish, owners)

			expect(result).toEqual({
				Male: [],
				Female: [
					{ name: 'Mildred', type: PetType.fish },
					{ name: 'Golfred', type: PetType.fish },
					{ name: 'DESTRUCTORNATOR', type: PetType.fish },
					{ name: 'The Shadow', type: PetType.fish }
				],
				Other: [
					{ name: 'Angry Bruce', type: PetType.fish }
				]
			})
		})
	})

	describe('when there is a group of owners and only some have pets', () => {
		const owners: Person[] = [
			{ name: 'Harold', gender: Gender.male, age: 32 },
			{ name: 'Gertrude', gender: Gender.other, age: 32, pets: [
				{ name: 'Angry Bruce', type: PetType.fish },
				{ name: 'Beelz', type: PetType.cat }
			] },
			{ name: 'Alison', gender: Gender.female, age: 32 },
			{ name: 'Wynston', gender: Gender.male, age: 32, pets: [
				{ name: 'Abercrombie', type: PetType.cat }
			] },
			{ name: 'Gnarrr the destroyer', gender: Gender.female, age: 32, pets: [
				{ name: 'DESTRUCTORNATOR', type: PetType.fish },
				{ name: 'The Shadow', type: PetType.fish }
			] }
		]

		it('groups pets of a given type by a specified owner attribute', () => {
			const result = petsOfTypeByOwnerAttribute('gender', PetType.fish, owners)

			expect(result).toEqual({
				Male: [],
				Female: [
					{ name: 'DESTRUCTORNATOR', type: PetType.fish },
					{ name: 'The Shadow', type: PetType.fish }
				],
				Other: [
					{ name: 'Angry Bruce', type: PetType.fish }
				]
			})
		})
	})

	describe('when there is a group of owners with no pets', () => {
		const owners: Person[] = [
			{ name: 'Harold', gender: Gender.male, age: 32 },
			{ name: 'Gertrude', gender: Gender.other, age: 32 },
			{ name: 'Alison', gender: Gender.female, age: 32 },
			{ name: 'Wynston', gender: Gender.male, age: 32 },
			{ name: 'Gnarrr the destroyer', gender: Gender.female, age: 32 }
		]

		it('groups pets of a given type by a specified owner attribute', () => {
			const result = petsOfTypeByOwnerAttribute('gender', PetType.fish, owners)

			expect(result).toEqual({
				Male: [],
				Female: [],
				Other: []
			})
		})
	})
})