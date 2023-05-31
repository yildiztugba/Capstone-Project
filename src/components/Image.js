import React, {useState,useContext} from "react"
import {Context} from "../Context"
function Image({className,img}){
    const [hovered, setHovered] = useState(false)
    const context = useContext(Context)

    function heartIcon () {
        if(img.isFavorite){
            return <i onClick={()=>context.toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => context.toggleFavorite(img.id)}></i>
        }
    }  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    
    return(
        <div 
        className={`${className} image-container`}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        >
            <img  src={img.url} className="image-grid" />
            {heartIcon()}
            {cartIcon}
        </div>
    )
}
export default Image