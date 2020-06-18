import React, { useEffect, useState } from 'react'
import { getPosts } from '../../context/contentful';

import PostCard from '../../components/PostCard/PostCard'

import "./Blog.css";

const Blog = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts()
            .then(({ items }) => {
                let tempPosts = [];
                items.forEach(item => tempPosts.push(item.fields))
                setPosts([...tempPosts]);
            })
    }, []);

    return (
        <div className="Blog">
            <h1 style={{
                marginBottom: 40
            }}>Recent Posts</h1>
            {
                posts &&
                posts.map(post => <PostCard post={post} key={post.title} />)
            }
        </div>
    )
}

export default Blog
