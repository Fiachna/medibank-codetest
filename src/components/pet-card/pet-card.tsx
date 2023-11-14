import { FC } from "react"
import { Pet } from "../../types/pet"
import { PET_CARD_TEST_ID } from "../../utilities/test-ids"

interface Props extends Pet {}

export const PetCard: FC<Props> = ({ name }) => {
	return (
		<div data-testid={PET_CARD_TEST_ID}>{name}</div>
	)
}