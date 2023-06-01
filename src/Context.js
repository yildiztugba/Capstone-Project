import React,{useState,useEffect} from "react"
const Context = React.createContext()

function ContextProvider(props){

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] =useState([])

    const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])

    function toggleFavorite(id){
        const updatedArr = photos.map(photo=>{
            if(photo.id ==id){
                console.log(id)
                    console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
        console.log(cartItems)
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    function emptyCart() {
        setCartItems([])
    }
    
    return ( 
        <Context.Provider value={{photos,toggleFavorite,addToCart,cartItems,removeFromCart,emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}
export  {ContextProvider,Context}