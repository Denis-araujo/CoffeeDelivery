import ExpressoTradicional from '../../../assets/coffees/ExpressoTradicional.svg'
import ExpressoAmericano from '../../../assets/coffees/ExpressoAmericano.svg'
import ExpressoCremoso from '../../../assets/coffees/ExpressoCremoso.svg'
import ExpressoGelado from '../../../assets/coffees/ExpressoGelado.svg'
import CafeComLeite from '../../../assets/coffees/CafeComLeite.svg'
import Latte from '../../../assets/coffees/Latte.svg'
import Capuccino from '../../../assets/coffees/Capuccino.svg'
import Machiato from '../../../assets/coffees/Machiato.svg'

export const Coffees = [
  {
    id: Math.random(),
    img: ExpressoTradicional,
    type: ['Tradicional'],
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: ExpressoAmericano,
    type: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: ExpressoCremoso,
    type: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: ExpressoGelado,
    type: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: CafeComLeite,
    type: ['Tradicional', 'Com Leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: Latte,
    type: ['Tradicional', 'Com Leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: Capuccino,
    type: ['Tradicional', 'Com Leite'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
  {
    id: Math.random(),
    img: Machiato,
    type: ['Tradicional', 'Com Leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    quantityCurrent: 1,
    quantityInventory: 10,
    price: 9.9,
  },
]
