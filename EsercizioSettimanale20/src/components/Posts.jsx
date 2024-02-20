import React, { useEffect, useState } from "react";
import { url } from "../data/data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(url + "posts?_embed")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Row>
          <Col xs="10rem mt-5 mb-3">
            <Form.Control
              type="text"
              placeholder="Cerca qui..."
              className=" mr-sm-2 search bg-dark"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>
      </Form>

      <div className="d-flex flex-wrap justify-content-center justify-items-start">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="col-lg-3 col-md-5 col-sm-12 mx-lg-1 mx-md-2 mx-sm-1 my-3 cards"
              style={{ height: "47rem" }}
            >
              <Card.Img variant="top" src={post._embedded['wp:featuredmedia']['0'].source_url} />
              <Card.Body>
                <Card.Title className="text-success">{post.title.rendered}</Card.Title>
                <Card.Text>
                  <span
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </Card.Text>
                <Card.Text></Card.Text>
                <Button variant="outline-success position-absolute bottom-0 my-2 mt-5" onClick={() => navigate(`/details/${post.id}`)}>
                  Leggi di piu
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Nessun post è stato trovato</p>
        )}
      </div>
    </>
  );
}