import { act, renderHook } from '@testing-library/react'
import useRequest from './use-request'

describe('#useRequest', () => {
	let fetchSpy: jest.SpyInstance

	beforeAll(() => {
		const fetchMock = () => Promise.resolve({
			json: () => Promise.resolve({ key: 'value' })
		}) as Promise<Response>

		// workaround for missing fetch on global in Node 18+
		global.fetch = global.fetch || fetchMock

		fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(fetchMock)
	})

	beforeEach(() => {
		fetchSpy.mockClear()
	})

	describe('when there is a url provided', () => {
		const url = 'https://example.com'

		it('executes a request against the url', async () => {
			await act(() => renderHook(useRequest, { initialProps: { url } }))

			expect(fetchSpy).toHaveBeenCalled()
		})
	})

	describe('when there is a blank url provided', () => {
		const url = ''

		it('does not execute a request', async () => {
			await act(() => renderHook(useRequest, { initialProps: { url } }))

			expect(fetchSpy).not.toHaveBeenCalled()
		})
	})
})