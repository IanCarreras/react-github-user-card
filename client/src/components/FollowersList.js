import React from 'react'
import styled from 'styled-components'

import Follower from './Follower'

const List = styled.div`
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    align-content: center;
    width: 60%;
    margin: 0 auto;
`

export default function FollowersList(props) {
    
    if(!props.followers) return (<h1>Loading....</h1>)

    return (
        <List>
            {
                props.followers.map((follower, indx) => {
                    return <Follower
                            key={indx}
                            data={follower} />
                })
            }
        </List>
    )
}