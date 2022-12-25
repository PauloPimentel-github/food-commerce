import { useState, useEffect } from 'react'

import { getDrinks } from '../../../services/api'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Drinks() {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        (async () => {
            const burgerRequest = await getDrinks()

            setDrinks(burgerRequest.data)
        })()
    }, [])
    

    return (
        <>
            <Head title='Bebidas' description='Nossas melhores bebidas' />
            <SnackTitle>Bebidas</SnackTitle>
            <Snacks snacks={drinks}></Snacks>
        </>
    )
}