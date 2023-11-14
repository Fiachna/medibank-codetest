import { Pet, PetType } from "../../types/pet"

import { render, screen } from '@testing-library/react'
import { PetCategory } from "./pet-category"
import { PET_CATEGORY_LABEL_TEST_ID, PET_CARD_TEST_ID, PET_CATEGORY_TEST_ID } from "../../utilities/test-ids"

describe('#PetCategory', () => {
	const category = 'labrador'

	describe('when there are pets in a category', () => {
		const pets: Pet[] = [
			{ name: 'Chunky J', type: PetType.dog },
			{ name: 'Biggins', type: PetType.dog },
			{ name: 'Humbert P Fluffykins', type: PetType.dog }
		]

		it('renders the name of the category', () => {
			render(<PetCategory category={category} pets={pets} />)
			expect(screen.getByTestId(PET_CATEGORY_LABEL_TEST_ID)?.textContent).toEqual(category)
		})

		it('renders a list of the pets', () => {
			render(<PetCategory category={category} pets={pets} />)
			expect(screen.getAllByTestId(PET_CARD_TEST_ID)).toHaveLength(pets.length)
		})

		it('renders the pets by their names in alphabetical order', () => {
			render(<PetCategory category={category} pets={pets} />)
			expect(screen.getAllByTestId(PET_CARD_TEST_ID).map((element) => element.textContent)).toEqual(['Biggins', 'Chunky J', 'Humbert P Fluffykins'])
		})
	})

	describe('when there are no pets in a category', () => {
		const pets: Pet[] = []

		it('does not render anything', async () => {
			render(<PetCategory category={category} pets={pets} />)
			expect(screen.queryByTestId(PET_CATEGORY_TEST_ID)).toBeFalsy()
		})
	})
})