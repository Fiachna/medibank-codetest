import { PetType } from "../../../types/pet"
import { petNameSortComparator } from "./pet-name-sort"

describe('#petNameSortComparator', () => {
	describe('when the list of pets have names in a consistent case', () => {
		const pets = [
			{ name: 'zach', type: PetType.cat },
			{ name: 'evil bob', type: PetType.fish },
			{ name: 'heironomous', type: PetType.dog }
		]

		it('sorts an array of pets by their name A -> Z', () => {
			expect(pets.sort(petNameSortComparator).map((pet) => pet.name)).toEqual([ 'evil bob', 'heironomous', 'zach' ])
		})
	})

	describe('when the list of pets have names in inconsistent casing', () => {
		const pets = [
			{ name: 'Aardvark', type: PetType.cat },
			{ name: 'aArdman', type: PetType.dog },
			{ name: 'aaArgh', type: PetType.fish }
		]

		it('sorts an array of pets by their name A -> Z', () => {
			expect(pets.sort(petNameSortComparator).map((pet) => pet.name)).toEqual(['aaArgh', 'aArdman', 'Aardvark'])
		})
	})

	describe('when the list of pets have names with numerical values', () => {
		const pets = [
			{ name: '10', type: PetType.cat },
			{ name: '7', type: PetType.dog },
			{ name: '206', type: PetType.fish }
		]

		it('sorts an array of pets by their name as strings (non numeric sorting)', () => {
			expect(pets.sort(petNameSortComparator).map((pet) => pet.name)).toEqual(['10', '206', '7'])
		})
	})
})