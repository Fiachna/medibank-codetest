import { Pet } from "../../../types/pet";

export const petNameSortComparator = (a: Pet, b: Pet) => {
	if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1
	} else if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1
	} else {
		return 0
	}
}