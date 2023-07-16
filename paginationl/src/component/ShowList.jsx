import React, { useEffect, useState } from 'react'
import { Users } from "../userData.js"
import Table from './Table.jsx'
import axios from 'axios'

const ShowList = () => {
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    // console.log(Users.filter(users => users.first_name.includes(query)))
    // const keys = ["first_name", "last_name", "email"]
    // !frontend search
    // const search = (data) => {
    //     return data.filter((user) => {
    //         return keys.some((key) => user[key].toLowerCase().includes(query))
    //     })
    // }
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:8080?q=${query}`)
            setData(res.data)
            console.log(res.data)
        }
        fetchUsers()
    }, [query])
    return (
        <div className='showlist'>
            <input type="text " placeholder='search...' className='search' onChange={(e) => { setQuery(e.target.value) }} />
            {/* {Users.filter((users) => users.first_name.includes(query)).map((user) => {

                return (
                    <li key={user.id} className="listItem">{user.first_name}</li>
                )

            })} */}
            <Table data={data} />
        </div>
    )
}

export default ShowList