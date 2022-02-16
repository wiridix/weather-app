import React from "react";
import { Col, Row, Card, Divider, Typography } from "antd";
const { Title, Text } = Typography;

export const CardW = ({clima,loadingCard}) => {
    let timeData = new Date(clima.dt * 1000).toDateString();
    let visibility = (clima.visibility / 1000).toFixed(1);
    let temp = clima.temp.toFixed();
    let urlIcon = `http://openweathermap.org/img/wn/${clima.icon}@2x.png`;
    return (
        <Card
            style={{ borderRadius: "40px" }}
            bordered={false}
            className="card-sombra"
            loading={loadingCard}
        >
            <Row
                justify="center"
                align="middle"
                gutter={[0, 22]}
                style={{ textTransform: "capitalize" }}
            >
                <Col xs={24}>
                    <Col md={24}>
                        <Title level={2} className="text-color">
                            {clima.name}, {clima.country}
                        </Title>
                    </Col>
                    <Col md={24}>
                        <Title level={5} className="text-color">
                            {timeData}
                        </Title>
                    </Col>
                </Col>
                <Col xs={24}>
                    <Divider style={{ margin: 0 }} />
                </Col>
                <Col xs={24} md={12}>
                    <Row
                        justify="center"
                        align="middle"
                        style={{ textAlign: "center" }}
                    >
                        <Col xs={16} md={12}>
                            <img
                                src={urlIcon}
                                alt="Nube"
                                className="image-nube"
                            />
                        </Col>
                        <Col xs={16} md={12}>
                            <Title
                                level={2}
                                className="text-color"
                                style={{ fontSize: "40px", margin: "0" }}
                            >
                                {temp}°C
                            </Title>
                        </Col>
                        <Col xs={16} md={16}>
                            <Title level={4} className="text-color">
                                {clima.weather}
                            </Title>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} md={12}>
                    <Row gutter={40}>
                        <Col xs={12} md={24}>
                            <Row align="middle" justify="space-around">
                                <Col xs={24} md={8}>
                                    <Title level={4} className="text-color">
                                        Humidity
                                    </Title>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Text type="secondary">
                                        {clima.humidity}%
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={24}>
                            <Row align="middle" justify="space-around">
                                <Col xs={24} md={8}>
                                    <Title level={4} className="text-color">
                                        Pressure
                                    </Title>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Text type="secondary">
                                        {clima.pressure}hPa
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={24}>
                            <Row align="middle" justify="space-around">
                                <Col xs={24} md={8}>
                                    <Title level={4} className="text-color">
                                        visibility
                                    </Title>
                                </Col>
                                <Col xs={24}  md={5}>
                                    <Text type="secondary">{visibility}Km</Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={24}>
                            <Row align="middle" justify="space-around">
                                <Col xs={24} md={8}>
                                    <Title level={4} className="text-color">
                                        Wind
                                    </Title>
                                </Col>
                                <Col xs={24} md={5}>
                                    <Text type="secondary">
                                        {clima.wind}m/s
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};
