import { useParams, Link } from 'react-router-dom'

function EntityDescription({ getEntityData }) {
    const { category, entity } = useParams()
    const data = getEntityData(category, entity)

    if (!data) {
        return <div style={{ textAlign: 'center', margin: '20px' }}>Entity not found!</div>
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', backgroundColor: '#fff' }}>
            <h2>{data.name}</h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>{data.description}</p>
            <div style={{ marginTop: '20px' }}>
                <Link to={`/wiki/${category}`} style={{ color: '#aa3bff', textDecoration: 'none' }}>Back to {category}</Link>
            </div>
        </div>
    )
}

export default EntityDescription
