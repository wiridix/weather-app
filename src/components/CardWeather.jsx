import React, { useContext } from "react";
import { Col, Row, Card, Divider, Typography } from "antd";
import { Context } from "../context/ContextSettings";
const { Title, Text } = Typography;

export const CardWeather = () => {
    const { clima, loadingCard } = useContext(Context);
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
                <Col xs={24} className="center-content">
                    <Title level={2} className="text-color">
                        {clima.name}, {clima.country}
                    </Title>
                    <Title level={5} className="text-color">
                        {timeData}
                    </Title>
                </Col>
                <Divider style={{ margin: 0 }} />
                <Col xs={24} className="center-content">
                    <img src={urlIcon} alt="Nube" className="image-nube" />
                    <Title
                        level={2}
                        className="text-color"
                        style={{ fontSize: "40px", margin: "0" }}
                    >
                        {temp}°C
                    </Title>
                    <Title level={4} className="text-color">
                        {clima.weather}
                    </Title>
                </Col>
                <Col xs={24}>
                    <Row gutter={40}>
                        <Col xs={12} className="center-content">
                            <Title level={4} className="text-color">
                                Humidity
                            </Title>
                            <Text type="secondary">{clima.humidity}%</Text>
                        </Col>
                        <Col xs={12} className="center-content">
                            <Title level={4} className="text-color">
                                Pressure
                            </Title>
                            <Text type="secondary">{clima.pressure}hPa</Text>
                        </Col>
                    </Row>
                    <Row gutter={40}>
                        <Col xs={12} className="center-content">
                            <Title level={4} className="text-color">
                                visibility
                            </Title>
                            <Text type="secondary">{visibility}Km</Text>
                        </Col>
                        <Col xs={12} className="center-content">
                            <Title level={4} className="text-color">
                                Wind
                            </Title>
                            <Text type="secondary">{clima.wind}m/s</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};
