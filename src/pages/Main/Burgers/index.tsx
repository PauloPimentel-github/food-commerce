import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
    const data = [
        {
            id: 1,
            snack: 'burger',
            name: 'Mega',
            description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
            price: 25.5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 2,
            snack: 'burger',
            name: 'Extra bacon',
            description: 'Criado para os amantes de bacon, possui em topdas as suas camadas bacon bem assado a ainda queijo e carne.',
            price: 23.5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        }
    ]

    return (
        <>
            <Head title='Hambúrgueres' description='Nossos melhores burgers' />
            <SnackTitle>Hambúrgeres</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    )
}