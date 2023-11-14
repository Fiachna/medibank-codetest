import { act, render, screen } from "@testing-library/react";
import { CatList } from "./cat-list";
import { PET_CARD_TEST_ID, PET_CATEGORY_LABEL_TEST_ID } from "../../utilities/test-ids";

const fetchMock = () => Promise.resolve({
	json: () => Promise.resolve(
		[
			{
				"name": "Bob",
				"gender": "Male",
				"age": 23,
				"pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }]
			},
			{ "name": "Jennifer", "gender": "Female", "age": 18, "pets": [{ "name": "Garfield", "type": "Cat" }] },
			{ "name": "Steve", "gender": "Male", "age": 45, "pets": null },
			{
				"name": "Fred",
				"gender": "Male",
				"age": 40,
				"pets": [
					{ "name": "Tom", "type": "Cat" },
					{ "name": "Max", "type": "Cat" },
					{ "name": "Sam", "type": "Dog" },
					{ "name": "Jim", "type": "Cat" }
				]
			},
			{ "name": "Samantha", "gender": "Female", "age": 40, "pets": [{ "name": "Tabby", "type": "Cat" }] },
			{
				"name": "Alice",
				"gender": "Female",
				"age": 64,
				"pets": [{ "name": "Simba", "type": "Cat" }, { "name": "Nemo", "type": "Fish" }]
			}
		]
	)
})

// ensure fetch exists or things will explode since fetch was removed from globals
// in Node18+
global.fetch = global.fetch || fetchMock

describe('#CatList', () => {
	let fetchSpy: jest.SpyInstance;

	const url = 'https://example.com'

	beforeAll(() => {
		fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(fetchMock as () => Promise<Response>)
	})

	beforeEach(() => {
		fetchSpy.mockClear()
	})

	it('renders the gender of the owners as categories ', async () => {
		await act(() => render(<CatList url={url} />))

		expect(screen.getAllByTestId(PET_CATEGORY_LABEL_TEST_ID).map((category) => category.textContent)).toEqual(['Male', 'Female'])
	})

	it('renders a list of cats under each category', async () => {
		await act(() => render(<CatList url={url} />))

		expect(screen.getAllByTestId(PET_CARD_TEST_ID).map((category) => category.textContent)).toEqual(['Garfield', 'Jim', 'Max', 'Tom', 'Garfield', 'Simba', 'Tabby'])
	})
})