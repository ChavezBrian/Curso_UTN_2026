import React from 'react'
import { useState, useEffect } from 'react'

export default function usePosts() {

    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function fetchPosts() {
        const response_http = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'GET',
            }
        )
        const result = await response_http.json()
        setIsLoading(false)
        setResponse(result)
    }

    useEffect(
        () => {
            fetchPosts()
        },
        []
    )

    return (
        {
            response: response,
            error: error,
            isLoading: isLoading
        }
    )
}
