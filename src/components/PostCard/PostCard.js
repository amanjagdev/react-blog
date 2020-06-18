import React from 'react';
import styled from 'styled-components';

//Theme
import { secondaryBackground } from '../../context/theme'

const PostCard = ({ post }) => {
    console.log(post);

    const Card = styled.div`
        background: ${secondaryBackground};
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        margin: 10px;
        padding: 20px;
    `;

    return (
        <Card className="Card" style={{
            marginBottom: 20
        }}>
            <img src="https://via.placeholder.com/150" alt="" width="100%"/>
            <h3 style={{
                margin: 0
            }}>{post.title}</h3>
            <p>{post.description}</p>
        </Card>
    )
}

export default PostCard
