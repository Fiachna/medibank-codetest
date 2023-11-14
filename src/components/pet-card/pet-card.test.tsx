import { Pet, PetType } from "../../types/pet"
import { PET_CARD_TEST_ID } from "../../utilities/test-ids"
import { PetCard } from "./pet-card"
import { render, screen } from '@testing-library/react'

describe('#PetCard', () => {
	it('renders the name of the pet', () => {
		const name = 'stinky'
		const pet: Pet = { name, type: PetType.fish }

		render(<PetCard {...pet} />)
		expect(screen.getByTestId(PET_CARD_TEST_ID)?.textContent).toEqual(name)
	})
})