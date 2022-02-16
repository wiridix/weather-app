import React, { useMemo, useContext, useEffect} from "react";
import { Context } from "../../context/ContextSettings";
import { CardW } from "./CardWeather";

export default function CardWeather() {
    const {defaultCity, clima, loadingCard } = useContext(Context);
    useEffect(() => {
        defaultCity();
    }, []);
    return useMemo(() => {
        return <CardW clima={clima} loadingCard={loadingCard} />;
    }, [loadingCard,clima]);
}
