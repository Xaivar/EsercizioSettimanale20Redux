import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function MyFooter() {
    return (
        <Container fluid>
            <Row className="bg-black text-white">
                <Col>
                    {/* Qui va il logo Spotify */}
                </Col>
                <Col>
                    <p className="titolo-footer mt-3">COMPANY</p>
                    <p className="testo-footer">About</p>
                    <p className="testo-footer">Jobs</p>
                    <p className="testo-footer">Investors</p>
                </Col>
                <Col>
                    <p className="titolo-footer mt-3">COMMUNITIES</p>
                    <p className="testo-footer">Artists</p>
                    <p className="testo-footer">Padcasters</p>
                    <p className="testo-footer">Advertisers</p>
                    <p className="testo-footer">Developers</p>
                    <p className="testo-footer">Vendors</p>
                    <p className="testo-footer">Design</p>
                    <p className="testo-footer">Engineering</p>
                    <p className="testo-footer">Songwriters</p>
                    <p className="testo-footer">Community Forum</p>
                </Col>
                <Col>
                    <p className="titolo-footer mt-3">USEFUL LINKS</p>
                    <p className="testo-footer">Help</p>
                    <p className="testo-footer">Web Player</p>
                </Col>
                <Col className="mt-5">
                    {/* Qui vanno le icone social */}
                    <i class="bi bi-twitter-x icone fs-3 m-1"></i>
                    <i class="bi bi-instagram icone fs-3 m-1"></i>
                    <i class="bi bi-facebook icone  fs-3 m-1"></i>
                </Col>
            </Row>
        </Container>
    )
}