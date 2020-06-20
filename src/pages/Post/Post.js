import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../../context/contentful';
import "./Post.css"

const Post = (props) => {
    const slug = props.match.params.slug;
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostBySlug(slug).then(response => {
            const tempPost = response.items[0].fields
            setPost(tempPost);
        })
    }, []);


    return (
        <div className="Post">
            {
                post &&
                <>
                    <h2 className="title">{post.title}</h2>
                    <img src={`https:${post.heroImage.fields.file.url}`} alt="" />
                    <ReactMarkdown
                        className="content"
                        source={post.body}
                    />
                </>
            }
        </div>
    )
}

export default Post
