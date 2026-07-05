import { useParams, Link } from 'react-router-dom'

function Entities({ getCategoryData }) {
    const { category } = useParams()
    const entities = getCategoryData(category)

    if (!entities) {
        return <div style={{ textAlign: 'center', margin: '20px' }}>Category not found!</div>
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h3 style={{ textTransform: 'capitalize', fontSize: '1.8rem' }}>{category}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {entities.map((entity) => (
                    <li key={entity.name} style={{ margin: '15px 0' }}>
                        <Link
                            to={`/wiki/${category}/${entity.name}`}
                            style={{ fontSize: '1.2rem', textDecoration: 'none', color: '#08060d', fontWeight: 'bold' }}
                        >
                            {entity.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Entities
