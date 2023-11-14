import { FC, useEffect, useState } from "react";
import { CategorisedPet, petsOfTypeByOwnerAttribute } from "../../utilities/transformers/pets-of-type-by-owner-attribute/pets-of-type-by-owner-attribute";
import useRequest from "../../hooks/use-request/use-request";
import { PetType } from "../../types/pet";
import { Person } from "../../types/person";
import { PetCategory } from "../pet-category/pet-category";
import { CAT_LIST_TEST_ID } from "../../utilities/test-ids";

interface Props {
	url: string
}

export const CatList: FC<Props> = ({ url }) => {
	const owners = useRequest<Person[] | undefined>({ url })
	const [categorisedCats, setCategorisedCats] = useState<CategorisedPet>()

	useEffect(() => {
		setCategorisedCats(petsOfTypeByOwnerAttribute('gender', PetType.cat, owners))
	}, [owners])
	
	const mappableCategories = () => {
		return categorisedCats && Object.entries(categorisedCats) || []
	}

	return (
		<div data-testid={CAT_LIST_TEST_ID}>
			{mappableCategories().map((category, i) => (
				<PetCategory category={category[0]} pets={category[1]} key={i} />
			))}
		</div>
	)
}