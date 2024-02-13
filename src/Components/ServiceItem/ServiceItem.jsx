import Card from "react-bootstrap/Card";

const ServiceItem = ({ element }) => {
  return (
    <Card>
      <Card.Img variant="top" src={element.img} />
      <Card.Body style={{ backgroundColor: "#fd3131", color: "#ffffff" }}>
        <Card.Text className="px-3 pt-3 text-2xl font-medium">
          {element.title}
        </Card.Text>
        <Card.Text className="p-3 text-xl">{element.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
