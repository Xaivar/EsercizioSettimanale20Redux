
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { url } from "../data/data";

export default function DetailsPost() {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    console.log(id)
    
   useEffect(() => {
       fetch(url + `details/${id}`)
       .then((response) => response.json())
       .then((data) => console.log(data))
   }, [])

    return (
        
        <div>DetailsPost</div>
        
    )
}