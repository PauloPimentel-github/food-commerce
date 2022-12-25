import { useState, useEffect } from 'react'

import { getIceCreams } from '../../../services/api'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function IceCreams() {
    const [iceCreams, setIceCreams] = useState([])

    useEffect(() => {
        (async () => {
            const burgerRequest = await getIceCreams()

            setIceCreams(burgerRequest.data)
        })()
    }, [])

    return (
        <>
            <Head title='Sorvetes' description='Nossos melhores sorvetes' />
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={iceCreams}></Snacks>
        </>
    )
}