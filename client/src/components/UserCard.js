import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid black;
    border-radius: .3rem;
    width: 30%;
    margin: 2rem auto;
    padding: 1.5rem;
`
const Image = styled.img`
    height: 15rem;
    border-radius: .5rem;
`

export default function UserCard({ userData }) {
    console.log(userData)
    if(!userData) return (<h1>Loading....</h1>)

    return (
        <Card>
            <Image src={userData.avatar_url} alt='user pic' />
            <h1>{userData.name}</h1>
            <a href={userData.html_url} target='_blank'>profile</a>
        </Card>
    )
}