import React from "react";
import MyNavbar from "../components/MyNavbar";
import Container from "react-bootstrap/Container";
import MyFooter from "../components/MyFooter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/OIG4.png";

export default function AboutPage() {
    return (
        <>
            <MyNavbar />
            <Container>
                <h1 className="text-center mt-5">About Us</h1>
                <Container>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus arcu sagittis, placerat dui quis, dictum metus. In iaculis, justo ut molestie tempor, mi erat luctus arcu, et dapibus erat diam et eros. Sed magna ipsum, cursus vitae auctor eu, semper at massa. Pellentesque iaculis consequat lectus id sodales. Phasellus bibendum sollicitudin rutrum. Nulla semper maximus odio, posuere pellentesque sem dictum vel. Maecenas tortor velit, iaculis ut lobortis eu, aliquam vel magna. Cras rutrum leo quis imperdiet lobortis. Curabitur feugiat porta lorem, ut ullamcorper nunc commodo non. Cras rhoncus, est nec pretium mollis, erat sapien ultricies nulla, sed consectetur dolor justo nec nisl. Etiam maximus urna sed lobortis egestas. Phasellus placerat et diam in porta.

                        Donec iaculis leo enim, vel rutrum diam viverra id. Donec nisi nulla, finibus efficitur lorem eget, ullamcorper venenatis ligula. Sed porttitor neque urna, sed sollicitudin turpis viverra sit amet. Aliquam varius lorem sit amet mauris interdum ornare. Ut dui justo, bibendum eget venenatis non, vulputate non neque. Nunc pellentesque viverra fringilla. Maecenas ultrices nunc pulvinar, vulputate leo eget, auctor lorem. Phasellus massa ipsum, molestie ut diam in, tincidunt tincidunt diam. Aliquam mattis mauris sit amet nisl viverra porta. In rutrum fringilla odio. Ut venenatis bibendum tincidunt. Vestibulum commodo, nunc non sollicitudin imperdiet, mi sem fermentum nisi, at rhoncus nisi lorem sit amet urna. Donec ultrices, eros at facilisis pharetra, arcu nibh lacinia nibh, ut mollis neque tellus non ex.

                        Vivamus pharetra sit amet tortor et scelerisque. Duis dictum mattis leo et suscipit. Sed laoreet leo ac est egestas egestas. Maecenas ac elementum lectus. Etiam quis blandit turpis. Phasellus porta dictum vehicula. Pellentesque vulputate tellus nec vestibulum porttitor. Ut ac faucibus nulla. Proin pretium dictum facilisis.

                        Sed et suscipit velit. Phasellus aliquet tellus vel tellus faucibus, sed venenatis lectus scelerisque. Cras ultricies, erat vel rutrum mattis, arcu nulla hendrerit justo, id hendrerit nulla ante eget ante. Maecenas tincidunt suscipit tempus. Donec eleifend placerat dignissim. Sed id est gravida, dapibus mauris sed, fringilla mauris. Fusce id rutrum nulla. Praesent dolor ipsum, condimentum at nibh quis, consequat varius augue. Pellentesque quis neque rutrum eros rutrum feugiat. Cras finibus magna accumsan commodo pretium. Aliquam non mauris pulvinar, viverra lectus eget, posuere ligula.

                        Aliquam non urna vel velit lobortis rutrum eleifend eget felis. Duis eget rhoncus eros. Suspendisse congue, mi eu ultrices dictum, urna erat scelerisque massa, vitae congue turpis ipsum in diam. Etiam et nunc quis odio consequat iaculis vitae in purus. Mauris nec pretium augue. Donec ipsum tortor, posuere eget sodales eu, semper eu enim. Ut accumsan ligula quis lacus dapibus aliquam sed placerat turpis. Duis tincidunt ligula sit amet urna blandit porta. Ut nunc est, condimentum vehicula pretium ac, imperdiet ut leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <Row className="mt-5 mb-5">
                        <Col>
                            <img src={img} alt="foto_profilo" className="fotoProfilo"/>
                        </Col>
                        <Col className="mt-5">
                            <h2>Arcangelo Gifuni</h2>
                            <p className="fs-2">Full Stack Web developer </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <MyFooter />
        </>
    )
}