import { FC } from "react"
import { Pet } from "../../types/pet"
import { PetCard } from "../pet-card/pet-card"
import { petNameSortComparator } from "../../utilities/sorters/pet-name/pet-name-sort"

interface Props {
	category: string,
	pets?: Pet[]
}

export const PetCategory: FC<Props> = ({ category, pets = [] }) => {
	if (pets.length) {
		return (
			<div data-testid='pet-category'>
				<h2 data-testid='pet-category-label'>{category}</h2>
				<ul>
					{pets.sort(petNameSortComparator).map((pet, i) => (
						<li key={i}><PetCard {...pet} /></li>
					))}
				</ul>
			</div>
		)
	} else {
		return null
	}
}