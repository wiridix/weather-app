import React, { useContext } from "react";
import { Form, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete } from "antd";
const { Option } = AutoComplete;

export const FormCity = ({
    listCity,
    handleChange,
    handlePeticion,
    handleCity,
    city,
}) => {

    return (
        <>
            <Form
                onFinish={handlePeticion}
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <Form.Item style={{ marginInlineEnd: "5px", width: "100%" }}>
                    <AutoComplete
                        placeholder="City name"
                        onChange={handleChange}
                        onSelect={handleCity}
                        allowClear
                        value={city}
                        size="large"
                    >
                        {listCity.map((city) => (
                            <Option key={city.id} value={city.id.toString()}>
                                {city.name} {city.sys.country}
                            </Option>
                        ))}
                    </AutoComplete>
                </Form.Item>

                <Form.Item style={{ maxWidth: "40px" }}>
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<SearchOutlined />}
                        size="large"
                        htmlType="submit"
                    />
                </Form.Item>
            </Form>
        </>
    );
};
