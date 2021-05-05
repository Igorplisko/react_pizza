import React, { useState } from 'react';

const Categories = ({ items, onClick }) => {

   const [activeItem, setActiveItem] = useState(null)


   const onSelectItem = (i) => {
      setActiveItem(i)

   }

   return (
      <div>
         <div className="categories">
            <ul>
               <li className={activeItem === null ? 'active' : ''}
                  onClick={() => onSelectItem(null)}>
                  All
                  </li>
               {items &&
                  items.map((name, index1) => (
                     <li className={activeItem === index1 ? 'active' : ''}
                        onClick={() => onSelectItem(index1)}
                        key={`${name}_${index1}`}>
                        {name}
                     </li>             //!  key={`${name}_${index}`}
                  ))}


            </ul>
         </div>
      </div >
   );
}

export default Categories;


