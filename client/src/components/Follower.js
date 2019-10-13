import React from 'react'
import styled from 'styled-components'

const FollowerDiv = styled.a`
    border: 1px solid black;
    border-radius: .3rem;
    width: 30%;
    margin-top: 2rem;
`

export default function Follower({data}) {
    console.log(data)
    return (
        <FollowerDiv href={data.html_url} target='_blank' >
            {data.login}
        </FollowerDiv>
    )
}