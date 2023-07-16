import { Button } from '@chakra-ui/react'
import React from 'react'
import DeleteUser from './DeleteUser'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (name) => {
        console.log(name)
        dispatch(addUser(name))
    }

    return (
        <div>
            <div>
                <div>  List of user details</div>
                <Button onClick={() => addNewUser(fakeUserData())} >Add new user</Button>
            </div>
            <ul>
                <li>hi</li>
                <li>hii</li>
            </ul>
            <hr />
            <DeleteUser />
        </div>
    )
}

export default UserDetails