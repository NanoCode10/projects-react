import PropTrypes from 'prop-types'

export const FirstApp = ( {title, subTitle, name} ) => {

  //  console.log(title)  

  return (
    <> 
       <h1>{title}</h1>
       {/* <code> { JSON.stringify { newMessage} } </code> */}
       <p>{subTitle}</p>
       <p>{ name }</p>  
    </>


 )
}


FirstApp.PropTrypes = {
   title: PropTrypes.string.isRequired,
   subTitle: PropTrypes.string
  
}

FirstApp.defaultProps = {
   title: 'No hay titulo',
   subTitle: 'No hay sutitulo',
   name: 'Mariano Arenas',
}