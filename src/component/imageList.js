import React from "react";

const ImageList =(props)=>{
    const value= props.images.map(i=>{
        // console.log(i);
        return <div>
            <img key={i.id} src={i.urls.regular} alt="cool"></img>
            
            </div>
            
    })

    return <div className="imageList">{value}</div>
}
export default ImageList; 