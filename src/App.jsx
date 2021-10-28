import { React, Fragment } from "react";
import Componente1 from "./Componente1";

import "./App.css"

export default () => {
    return (
        <Fragment>
            <Componente1 nome="Ronaldo" destino="Recife" />
            <p>
                Estou escrevendo essa carta por causa da atividade que os aulos vão fazer, okay.
            </p>
            <p>
                Não desiste, continue fazendo as atividades, treinando e praticando. <br />
                Océu é o limite!
            </p>
        </Fragment>
    )
}