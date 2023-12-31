import {useState} from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
   // console.log(categories)
    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return
        
        setCategories([ newCategory, ...categories ])
       // setCategories([  'Valorant', ...categories])
       
    }
    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //  setCategories={ setCategories}
            onNewCategory = { (event) => onAddCategory(event) }

        />
        {/* Listado de GIf*/}
  

            {
                categories.map( ( category ) => (
                    <GifGrid 
                            key={ category } 
                            category={ category } />
                 ))
                
            } 
     


       
    </>

  )
}

