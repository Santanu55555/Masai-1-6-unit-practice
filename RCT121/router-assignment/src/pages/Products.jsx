import { useEffect, useState } from "react"
import axios from "axios";
import React from 'react'
import { Link } from "react-router-dom";


export const ProductList = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios({
            url: "http://localhost:8080/data",
            method: "get",
        })
        .then((res) => { setData(res.data); });
    }, [])

    return (
        <div id="ProductList">
       <h1>  Product List</h1>
            <table>
                <tbody>
            {data ? data.map((item) => {
                return (
             
                    <tr key={item.id}><td >{item.name}</td>
                 
                    <td>{item.price}</td><td><Link to={`${item.id}`}>more details..</Link></td></tr>
                
                )
            }) : null}
                </tbody>
            </table>
        </div>
    )
}