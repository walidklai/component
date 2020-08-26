import React from 'react'
import FullName from './profile/FullName'
import ProfilePicture from './profile/ProfilePicture'
import Address from './profile/Address'

const Main = () => {
    return (
        <React.Fragment>
            <FullName />
            <ProfilePicture />
            <Address />
        </React.Fragment>
    )
}
export default Main