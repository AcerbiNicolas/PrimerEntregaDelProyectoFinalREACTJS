import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'

const itemsFromAPI = [
    {
        id: 1,
        category: 'empanadas',
        title: 'Empanada vegetariana',
        description:
            'Relleno: Carne de soja, morrón colorado, morrón verde, ajo, cebolla, cebolla de verdeo, huevo y aceitunas.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1555236178.jpg',
    },
    {
        id: 2,
        category: 'empanadas',
        title: 'Empanada de carne',
        description:
            'Relleno: Carne molida, cebolla, morrón, ajo, huevo y aceitunas verdes.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207899.jpg',
    },
    {
        id: 3,
        category: 'empanadas',
        title: 'Empanada de carne cortada a cuchillo',
        description:
            'Relleno: Carne cortada a cuchillo, cebolla, morrón, ajo, huevo, ají picante y aceitunas verdes.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230009.jpg',
    },
    {
        id: 4,
        category: 'empanadas',
        title: 'Empanada de carne picante',
        description:
            'Relleno: Carne molida, cebolla, morrón, ajo, huevo, ají picante y aceitunas verdes.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207885.jpg',
    },
    {
        id: 5,
        category: 'empanadas',
        title: 'Empanada de jamón y queso',
        description: 'Relleno: Jamón y queso.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203994.jpg',
    },
    {
        id: 6,
        category: 'empanadas',
        title: 'Empanada de pollo',
        description: 'Relleno: Pollo, cebolla, morrón y ajo.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207875.jpg',
    },
    {
        id: 7,
        category: 'empanadas',
        title: 'Empanada capresse',
        description: 'Relleno: Muzzarella, tomate y albahaca.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207833.jpg',
    },
    {
        id: 8,
        category: 'empanadas',
        title: 'Empanada de roquefort',
        description: 'Relleno: Muzzarella y roquefort.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480203970.jpg',
    },
    {
        id: 9,
        category: 'empanadas',
        title: 'Empanada de humita',
        description: 'Relleno: Choclo y salsa blanca.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207848.jpg',
    },
    {
        id: 10,
        category: 'empanadas',
        title: 'Empanada de cebolla y queso',
        description: 'Relleno: Cebolla y muzzarella.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480207823.jpg',
    },
    {
        id: 11,
        category: 'empanadas',
        title: 'Empanada de verdura',
        description: 'Relleno: Acelga y salsa blanca.',
        price: 95,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228045.jpg',
    },

    {
        id: 12,
        category: 'pizzas',
        title: 'Muzzarella',
        description: 'Test description',
        price: 650,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480228383.jpg',
    },
    {
        id: 13,
        category: 'pizzas',
        title: 'Fugazzeta',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480256273.jpg',
    },
    {
        id: 14,
        category: 'pizzas',
        title: 'Napolitana',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480261320.jpg',
    },
    {
        id: 15,
        category: 'pizzas',
        title: 'Calabresa',
        description: 'Test description',
        price: 800,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230939.jpg',
    },
    {
        id: 16,
        category: 'pizzas',
        title: 'Pepperoni',
        description: 'Test description',
        price: 820,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1482883674.jpg',
    },
    {
        id: 17,
        category: 'pizzas',
        title: 'Veneciana',
        description: 'Test description',
        price: 820,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480230929.jpg',
    },
    {
        id: 18,
        category: 'pizzas',
        title: 'Muzzarella c/ jamón y morrón',
        description: 'Test description',
        price: 800,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480236996.jpg',
    },
    {
        id: 19,
        category: 'pizzas',
        title: 'Especial Don Boedo',
        description: 'Test description',
        price: 840,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480275596.jpg',
    },
    {
        id: 20,
        category: 'pizzas',
        title: 'Muzzarella c/ morrón',
        description: 'Test description',
        price: 740,
        pictureUrl:
            'https://d2j6dbq0eux0bg.cloudfront.net/images/29948464/1480256055.jpg',
    },
]

const getItems = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsFromAPI)
        }, 1000)
    })

export const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        if (category) {
            getItems()
                .then(result => {
                    setItems(result.filter(i => i.category === category))
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false))
        } else {
            getItems()
                .then(result => {
                    setItems(result)
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false))
        }
    }, [category])

    return (
        <ItemList items={items} stock={5} initial={1} isLoading={isLoading} />
    )
}
