import { useState, useEffect } from 'react'

import { getPizzas } from '../../../services/api'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Pizzas() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        (async () => {
            const burgerRequest = await getPizzas()

            setPizzas(burgerRequest.data)
        })()
    }, [])

    return (
        <>
            <Head title='Pizzas' description='Nossas melhores pizzas' />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={pizzas}></Snacks>
        </>
    )
}