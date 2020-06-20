import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

//Theme
import { secondaryBackground } from '../../context/theme'

const PostCard = ({ post, history }) => {
    const goToPost = () => {
        history.push(`/blog/${post.slug}`)
    }

    const Card = styled.div`
        background: ${secondaryBackground};
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        margin: 10px;
        padding: 20px;
    `;

    return (
        <Card className="Card" onClick={() => goToPost()} style={{
            marginBottom: 20,
            width: '200px',
            height: '350px',
        }}>
            <img src={`https:${post.heroImage.fields.file.url}`} alt="" width="200px" />
            <h3 style={{
                margin: 0
            }}>{post.title}</h3>
            <p>{post.description}</p>
        </Card>
    )
}

export default withRouter(PostCard)
