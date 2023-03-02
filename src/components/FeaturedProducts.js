import '../components/card/style.css';
const FeaturedProducts = () => {

    const list = [{
        name: 'SHADOW 6000 WATERMELON',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1_15.jpg?v=1677587114',
        price: '16999'
    },
    {
        name: 'JORDAN SPORTS DNA JACKET',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/3-67.jpg?v=1675965703',
        price: '4999'
    },
    {
        name: 'ADICOLOR CLASSICS POPLIN BACK LOOSE T-SHIRT',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/4-63_5f90bdd7-7d1b-4b0e-9350-fc3374de9558.jpg?v=1675977998',
        price: '5050'
    },
    {
        name: 'IVY PARK TRAIL REVERSIBLE BUCKET CAMO GREEN/ORANGE',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-14_3828a387-1836-4763-88ec-be22aec7dadf.jpg?v=1677045149',
        price: '4500'
    }
    ];

    return (
        <>

            <div className="container">
                <div className="card">
                    <h1 className='featuredTopic'> Featured Products</h1>
                    <ul className="product-list">
                        {list.map(content => (

                            <li>
                                <div className="product">
                                    <div className="product-image">
                                        <img style={{ width: "auto", height: "700px" }} src={content.image} />
                                    </div>
                                    <div className="product-imformation">
                                        <h4>{content.name}</h4>

                                        {/* <span>{content.ram} RAM</span>
                                            <small className="line"></small>
                                            <span>{content.ssd} SSD</span> */}
                                        <span>₹{content.price}</span>
                                    </div>
                                </div>
                            </li>

                        ))
                        }

                    </ul>
                </div>

            </div>

        </>





    );

}
export default FeaturedProducts;