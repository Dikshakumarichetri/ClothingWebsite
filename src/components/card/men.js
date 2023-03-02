import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import './style.css';
function MenCard() {
    const menlist = [{
        name: 'IVY PARK LIGHT NYLON PUFFER JACKET ',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-15_d1714915-fc30-4f16-934e-ecf885c56507.jpg?v=1677045159&width=823',
        price: '32000'
    },
    {
        name: 'JORDAN SPORTS DNA JACKET',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/3-67.jpg?v=1675965703',
        price: '4999'
    },
    {
        name: 'AIR DUNK JUMBO',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/2-183.jpg?v=1677044798&width=823',
        price: '11900'
    },
    {
        name: 'IVY PARK TRAIL REVERSIBLE BUCKET CAMO GREEN/ORANGE',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-14_3828a387-1836-4763-88ec-be22aec7dadf.jpg?v=1677045149',
        price: '4500'
    }
    ];
    return (
        <Container>
            <Row sm={6} xs={1} md={1} className="g-4">
                {menlist.map(cont => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={cont.image} />
                            <Card.Body>
                                <Card.Title>{cont.name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>



                    </Col>


                ))}

            </Row>

        </Container>
    );
}

export default MenCard;