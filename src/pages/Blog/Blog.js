import React , { useEffect } from 'react'
import { getPosts } from '../../lib/contentful';


const Blog = () => {
    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div>
            Blog
        </div>
    )
}

export default Blog
