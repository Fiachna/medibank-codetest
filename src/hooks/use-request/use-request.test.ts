import { renderHook } from '@testing-library/react'
import useRequest from './use-request'

describe('#useRequest', () => {
	let fetchSpy: jest.SpyInstance

	beforeAll(() => {
		const fetchMock = () => Promise.resolve({
			json: () => Promise.resolve({ key: 'value' })
		}) as Promise<Response>

		fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(fetchMock)
	})

	beforeEach(() => {
		fetchSpy.mockClear()
	})

	describe('when there is a url provided', () => {
		const url = 'https://example.com'

		it('executes a request against the url', () => {
			renderHook(useRequest, { initialProps: { url } })

			expect(fetchSpy).toHaveBeenCalled()
		})
	})

	describe('when there is a blank url provided', () => {
		const url = ''

		it('does not execute a request', () => {
			renderHook(useRequest, { initialProps: { url } })

			expect(fetchSpy).not.toHaveBeenCalled()
		})
	})
})