import React, { useEffect, useState } from 'react'
import axios from "axios"

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(4)
    const fetchData = async () => {
        const res = await axios("https://dummyjson.com/products?limit=100")
        // const data = await res.json()
        console.log(res.data)
        if (res.data && res.data.products) {
            setData(res.data.products)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {data.length > 0 && (
                <div className="products">
                    {
                        data.slice(page * 10 - 10, page * 10).map((product) => {
                            return (
                                <span id={product.id}>
                                    <img src={product.thumbnail} alt={product.alt} />
                                    <span>{product.title}</span>
                                </span>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}

export default Pagination