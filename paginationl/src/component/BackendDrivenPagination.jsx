import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Pagination.css"
const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const fetchData = async () => {
        const res = await axios(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
        // const data = await res.json()
        // console.log(res.data)
        if (res.data && res.data.products) {
            setData(res.data.products)
            setTotalPages(res.data.total / 10)
        }
    }
    useEffect(() => {
        fetchData()
    }, [page])

    const selectPageHandler = (index) => {
        if (index >= 1 && index <= totalPages && index !== page)
            setPage(index)
    }
    return (
        <div>
            {data.length > 0 && (
                <div className="products">
                    {
                        data.map((product) => {
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
            {data.length > 0 && <div className='pagination'>
                <span
                    className={page > 1 ? "" : "pagination_disabled"}
                    onClick={() => { selectPageHandler(page - 1) }}>◀</span>
                {[...Array(totalPages)].map((_, index) => {
                    return <span
                        className={page === index + 1 ? "pagination_selected" : ""}
                        onClick={() => { selectPageHandler(index + 1) }}
                        key={index}>{index + 1}
                    </span>
                })}

                <span className={page < totalPages ? "" : "pagination_disabled"} onClick={() => { selectPageHandler(page + 1) }}>▶</span>
            </div>}
        </div>
    )
}

export default Pagination