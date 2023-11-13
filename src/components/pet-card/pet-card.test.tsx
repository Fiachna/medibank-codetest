import { Pet, PetType } from "../../types/pet"
import { PetCard } from "./pet-card"
import { render, screen } from '@testing-library/react'

const PET_CARD_TEST_ID = 'pet-card'

describe('#PetCard', () => {
	it('renders the name of the pet', () => {
		const name = 'stinky'
		const pet: Pet = { name, type: PetType.fish }

		render(<PetCard {...pet} />)
		expect(screen.getByTestId(PET_CARD_TEST_ID)?.textContent).toEqual(name)
	})
})