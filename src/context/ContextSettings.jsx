import React, { createContext, useState } from "react";
import axios from "axios";

const appid = process.env.REACT_APP_APIKEY;
export const Context = createContext({});

export const ContextSettings = ({ children }) => {
    const [listCity, setListCity] = useState([]);
    let [city, setCity] = useState("");

    const [clima, setClima] = useState({
        name: "",
        country: "",
        weather: "",
        dt: 0,
        temp: 0,
        pressure: 0,
        humidity: 0,
        wind: 0,
        visibility: 0,
    });
    const [loadingCard, setloadingCard] = useState(true);
    const [errorList, seterrorList] = useState({
        error: false,
        msg: "",
    });

    const lstCity = async (city) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${appid}`
            );
            const listaCity = await res.data.list;

            if (listaCity.length !== 0) {
                setListCity(res.data.list);
            } else {
                seterrorList({
                    error: true,
                    msg: "City no found",
                });
            }
        } catch (error) {
            seterrorList({
                error: true,
                msg: "ERROR NETWORK",
            });
        }
    };

    const getClimaId = async (id) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${appid}`;
            const res = await axios.get(url);
            setClima({
                name: res.data.name,
                country: res.data.sys.country,
                dt: res.data.dt,
                weather: res.data.weather[0].description,
                icon: res.data.weather[0].icon,
                temp: res.data.main.temp,
                pressure: res.data.main.pressure,
                humidity: res.data.main.humidity,
                wind: res.data.wind.speed,
                visibility: res.data.visibility,
            });

            setloadingCard(false);
        } catch (error) {
            seterrorList({
                error: true,
                msg: "ERROR NETWORK",
            });
        }
    };

    function defaultCity() {
        const italy = 3175395;
        getClimaId(italy);
    }

    const handleChange = (e) => {
        setCity(e);
    };

    const handlePeticion = () => {
        lstCity(city);
    };

    const handleCity = (id) => {
        getClimaId(id);
        setCity("");
        setListCity([]);
    };

    return (
        <Context.Provider
            value={{
                listCity,
                clima,
                city,
                handleChange,
                handlePeticion,
                handleCity,
                defaultCity,
                loadingCard,
                errorList,
                seterrorList,
            }}
        >
            {children}
        </Context.Provider>
    );
};
