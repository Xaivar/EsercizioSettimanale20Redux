import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { url } from "../data/data.js";
import { Card, Container } from 'react-bootstrap';


export default function DetailsPost() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  console.log(detail)

  useEffect(() => {
    fetch(url + `posts/${id}?_embed`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, [id])


  return (
    <Container>
 
 
      {detail.title &&
        <Card>
          <Card.Body>
          <Card.Img variant="top" src={detail._embedded["wp:featuredmedia"][0].source_url} />
            <Card.Title> {detail.title.rendered} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{detail.date}</Card.Subtitle>
            <Card.Text>
              <span dangerouslySetInnerHTML={{ __html: detail.content.rendered }} />
            </Card.Text>
          </Card.Body>
        </Card>
      }

    </Container >

    )
}
