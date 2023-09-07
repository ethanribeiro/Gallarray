import {Link} from 'react-router-dom';

export default function ExhibitList({ exhibit }){
    return (
        <section className="exhibit-list">
            {exhibit.map((item, idx)=> (
                <Link to={`/exhibit/${item._id}`}>
                    <div className="exhibit-card" key={item.id}>
                        <img className='exhibit-image' src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.categories}</p>
                        <h2>{item.price}</h2>
                        <h3>By {item.artist}</h3>
                        <p>{item.createdAt}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}