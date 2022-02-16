import React, { useMemo, useContext } from "react";
import { Context } from "../../context/ContextSettings";
import { FormCity } from "./Form";

export default function FormSearch() {
    const { listCity, handleChange, handlePeticion, handleCity, city } =
        useContext(Context);
    return useMemo(() => {
        return (
            <FormCity
                listCity={listCity}
                handleChange={handleChange}
                handlePeticion={handlePeticion}
                handleCity={handleCity}
                city={city}
            />
        );
    }, [listCity, city]);
}
