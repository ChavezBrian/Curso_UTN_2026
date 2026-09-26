import React from 'react'
import usePosts from '../../hooks/usePosts'

export default function PostList() {

    const usePostResults = usePosts()

    if (usePostResults.isLoading) {
        return <div>Loading...</div>
    }

    const posts_list_jsx = []
    for (const post of usePostResults.response) {
        posts_list_jsx.push(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr />
            </div>
        )
    }
    return (
        <div>
            {posts_list_jsx}
        </div>
    )
}
