import React, { useContext } from "react";
import { Col, Row, Alert } from "antd";
import { Context } from "./context/ContextSettings";
import FormSearch from "./components/Form";
import CardWeather from "./components/Card";
import "./App.css";

export const App = () => {
    const { errorList, seterrorList } = useContext(Context);
    const onClose = () => {
        seterrorList({
            error: false,
            msg: "",
        });
    };
    return (
        <>
            <Row
                justify="center"
                align="middle"
                style={{ padding: "50px" }}
                gutter={[0, 15]}
            >
                <Col xs={24} md={12}>
                    <FormSearch />
                </Col>
                <Col xs={24} md={24}>
                    {errorList.error ? (
                        <Alert
                            message={errorList.msg}
                            type="error"
                            closable
                            afterClose={onClose}
                        />
                    ) : (
                        <></>
                    )}
                </Col>
                <Col xs={24} md={12}>
                    <CardWeather />
                </Col>
            </Row>
        </>
    );
};
