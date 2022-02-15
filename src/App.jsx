import React, { useContext, useEffect } from "react";
import { Col, Row, Alert } from "antd";
import {FormSearch} from "./components/Form";
import { CardWeather } from "./components/CardWeather";

import "./App.css";
import { Context } from "./context/ContextSettings";

export const App = () => {
    const { defaultCity, errorList, seterrorList } = useContext(Context);
    const onClose = () => {
        seterrorList({
            error:false,
            msg: ''
        });
    };
    useEffect(() => {
        defaultCity();
    }, []);
    return (
        <>
            <Row
                justify="center"
                align="middle"
                style={{ padding: "40px" }}
                gutter={[0, 15]}
            >
                <Col xs={24}>
                    <FormSearch />
                </Col>
                <Col xs={24}>
                    {errorList.error ? (
                        <Alert
                            message={errorList.msg}
                            type="error"
                            closable
                            afterClose={onClose}
                        />
                    ) : (
                        ""
                    )}
                </Col>
                <Col xs={24}>
                    <CardWeather />
                </Col>
            </Row>
        </>
    );
};