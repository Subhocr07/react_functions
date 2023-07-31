import React, { useEffect, useState } from "react";
import axios from "axios";
const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(4);
  const fetchData = async () => {
    const res = await axios("https://dummyjson.com/products?limit=100");
    // const data = await res.json()
    // console.log(res.data)
    if (res.data && res.data.products) {
      setData(res.data.products);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const selectPageHandler = (index) => {
    if (index >= 1 && index <= data.length / 10 && index !== page)
      setPage(index);
  };
  return (
    <div>
      {data.length > 0 && (
        <div className="products">
          {data.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span id={product.id}>
                <img src={product.thumbnail} alt={product.alt} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {data.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination_disabled"}
            onClick={() => {
              selectPageHandler(page - 1);
            }}
          >
            ◀
          </span>
          {[...Array(data.length / 10)].map((_, index) => {
            return (
              <span
                className={page === index + 1 ? "pagination_selected" : ""}
                onClick={() => {
                  selectPageHandler(index + 1);
                }}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}

          <span
            className={page < data.length / 10 ? "" : "pagination_disabled"}
            onClick={() => {
              selectPageHandler(page + 1);
            }}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
