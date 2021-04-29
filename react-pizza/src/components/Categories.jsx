import React from 'react';

const Categories = ({ items, onClick }) => {

   console.log(items);
   return (
      <div>
         <div className="categories">
            <ul>
               <li className="active">All</li>
               {items.map((name, index) => (

                  <li onClick={() => onClick(name)} key={`${name}_${index}`}>{name}</li>


               ))}


            </ul>
         </div>
      </div >
   );
}

export default Categories;


