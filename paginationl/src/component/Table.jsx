import React from 'react'

const Table = ({ data }) => {
    return (

        <table >
            <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
                {data.map((user) => {
                    return (
                        <tr id={user.id}>
                            <td id={user.id}>{user.first_name}</td>
                            <td id={user.id}>{user.last_name}</td>
                            <td id={user.id}>{user.email}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>

    )
}

export default Table