import Card from "react-bootstrap/Card";
function QualificationCard() {
  return (
    <div className="container qualifications__container">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">Card 1</Card.Title>
          <Card.Text className="card-description">
            This is the description for Card 1.
          </Card.Text>
          <Card.Link href="https://example.com/card1" className="card-link">
            Card 1
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QualificationCard;
