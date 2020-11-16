import React from 'react'
import { useSelector } from 'react-redux'

export const TrackerRouter = () => {
	const { mail } = useSelector((state) => state.MainReducer)

	return <div>Coucou, {mail}</div>
}
