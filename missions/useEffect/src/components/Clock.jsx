import { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        // ניקוי האינטרוול
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div style={{
            padding: '20px',
            margin: '20px auto',
            maxWidth: '300px',
            border: '2px solid var(--border)',
            borderRadius: '8px',
            background: 'var(--social-bg)',
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'var(--mono)',
            color: 'var(--text-h)'
        }}>
            {time}
        </div>
    )
}

export default Clock
