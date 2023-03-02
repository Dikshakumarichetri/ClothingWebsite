import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import './style.css';
function WomenCard() {
    const womenlist = [{
        name: 'SHADOW 6000 WATERMELON',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1_15.jpg?v=1677587114',
        price: '16999'
    },
    {
        name: 'WMN RIB COLLAR CROP TEE VICTORY BLUE',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-54_cd2e1833-752e-4aef-91b3-f2d26b36a6b4.jpg?v=1675977942&width=823',
        price: '5599'
    },
    {
        name: 'ADICOLOR CLASSICS POPLIN BACK LOOSE T-SHIRT',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/4-63_5f90bdd7-7d1b-4b0e-9350-fc3374de9558.jpg?v=1675977998',
        price: '5050'
    },
    {
        name: 'WMN LINEN SHIRT',
        image: 'https://cdn.shopify.com/s/files/1/0659/0722/8923/products/1-81_ad1f92fe-103b-4d0f-a2ce-4e30328ea1c8.jpg?v=1675971045&width=823',
        price: '4500'
    }
    ];
    return (
        <Container>
            <Row sm={6} xs={1} md={1} className="g-4">
                {womenlist.map(cont => (
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

export default WomenCard;