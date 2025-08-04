import { Card, Col, Row } from "react-bootstrap";
import { FaBook, FaRupeeSign, FaUsers, FaUserShield } from "react-icons/fa";

export const Home = () => {
  const statsData = [
    {
      title: "Students",
      value: 243,
      icon: <FaUsers size={30} />,
      color: "primary",
    },
    {
      title: "Course",
      value: 13,
      icon: <FaBook size={30} />,
      color: "success",
    },
    {
      title: "Payments",
      value: "INR 556,000",
      icon: <FaRupeeSign size={30} />,
      color: "warning",
    },
    {
      title: "Users",
      value: 3,
      icon: <FaUserShield size={30} />,
      color: "info",
    },
  ];

  return (
    <Row className="g-4 mb-4 p-4">
      {statsData.map((stat, index) => (
        <Col key={index} md={3} sm={6}>
          <Card className={`border-0 shadow-sm bg-${stat.color}-subtle`}>
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted mb-2">{stat.title}</h6>
                  <h3 className="mb-0 fw-bold">{stat.value}</h3>
                </div>
                <div className={`bg-${stat.color} p-3 rounded-circle`}>
                  <span className="text-white">{stat.icon}</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
