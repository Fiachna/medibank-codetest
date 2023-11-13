import { useEffect, useState } from "react"

interface Props {
	url: string
}

function useRequest<T>({ url = '' }: Props): T | undefined {
	const [result, setResult] = useState<T | undefined>()

	useEffect(() => {
		const doRequest = async () => {
			const response = await fetch(url)
			setResult(await response.json())
		}
		
		url && doRequest();
	}, [url])

	return result
}

export default useRequest