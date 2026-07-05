import { Link } from 'react-router-dom'

function CategoryList() {
    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0' }}>
            <Link to="/wiki/potions" style={{ padding: '10px 20px', border: '1px solid #ddd', textDecoration: 'none', borderRadius: '4px', color: '#aa3bff' }}>Potions</Link>
            <Link to="/wiki/charms" style={{ padding: '10px 20px', border: '1px solid #ddd', textDecoration: 'none', borderRadius: '4px', color: '#aa3bff' }}>Charms</Link>
        </div>
    )
}

export default CategoryList
