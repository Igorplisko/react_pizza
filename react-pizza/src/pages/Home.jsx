import React from 'react'

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <Categories
                  onClick={(name) => console.log(name)}
                  items={['Meat', 'Vegetarian', 'Grill', 'Closed', 'Spicy'
                  ]}
               />
               <SortPopup items={[
                  { name: 'popularity', type: 'popular' },
                  { name: 'price', type: 'price' },
                  { name: 'alphabet', type: 'alphabet' },
               ]} />
            </div>
            <h2 className="content__title">All pizza</h2>
            <div className="content__items">

               {
                  items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)

               }


            </div>
         </div>
      </div>

   )
}

export default Home








