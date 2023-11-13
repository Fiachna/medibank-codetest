import { FC } from "react"
import { Pet } from "../../types/pet"

interface Props extends Pet {}

export const PetCard: FC<Props> = ({ name }) => {
	return (
		<div data-testid="pet-card">{name}</div>
	)
}