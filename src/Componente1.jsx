import {React, Fragment} from "react";

export default (props) => {
    const {nome, destino } = props
    return (
        <Fragment>
            <h1>Olá {nome} - {destino}</h1>
        </Fragment>
    )
}