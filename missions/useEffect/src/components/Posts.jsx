import { useState, useEffect } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // שאיבת הפוסטים מה-API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // שמירת 10 הפוסטים הראשונים בלבד
                setPosts(data.slice(0, 10))
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching posts:', error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>טוען פוסטים...</div>
    }

    return (
        <div>
            <h2 className="posts-title">Top Posts</h2>
            <div className="posts-container">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts
