import { useState, useEffect } from 'react'

function PostsResponsive() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.slice(0, 10))
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (loading) {
        return <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>טוען פוסטים...</div>
    }

    return (
        <div>
            <h2 className="posts-title">Top Posts</h2>
            <div className={`posts-container ${isSmallScreen ? 'vertical' : ''}`}>
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

export default PostsResponsive
