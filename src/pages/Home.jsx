import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from '../components';
import PizzaBlock from '../components/PizzaBlock';
import {fetchPizzas} from '../redux/actions/pizzas';
import {useDispatch, useSelector} from 'react-redux';
import filters from '../redux/reducers/filters';
import {setCategory, setSortBY} from '../redux/actions/filters';
import {addPizza} from '../redux/actions/cart';

const sortByItems = [
    {type: 'rating', name: 'популярности'},
    {type: 'price', name: 'цене'},
    {type: 'name', name: 'алфавиту'}
]
const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Home = () => {
    const dispatch = useDispatch()
    const pizzaItems = useSelector(({pizzas}) => pizzas.items)
    const {category, sortBy} = useSelector(({filters}) => filters)
    const cartItems = useSelector(({cart}) => cart.items)

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy.type))
    }, [category, sortBy])


    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    })

    const onSelectSortByType = useCallback((type) => {
        dispatch(setSortBY(type))
    })

    const onAddPizza = useCallback((obj) => {
        dispatch(addPizza(obj))
    })

    return(
        <div className="container">
            <div className="content__top">
                <Categories items={categoryItems} onClickCategory={onSelectCategory} activeCategory={category}/>
                <SortPopup items={sortByItems} onClickSortByType={onSelectSortByType} activeType={sortBy.type}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzaItems &&
                pizzaItems.map((obj) => (
                        <PizzaBlock
                            key={obj.id}
                            onClickPizzaAdd={onAddPizza}
                            countPizzas={!cartItems[obj.id] ? '' : cartItems[obj.id].length}
                            {...obj} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home