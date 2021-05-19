import React from 'react';

import {history} from "../../index";
import Button from "@material-ui/core/Button";

const CarModelMenu = () => {
    return (
        <div className="content">
            <Button
                size="large"
                variant="contained"
                className="content__add"
                color={"primary"}
                onClick={() => history.push('/clients')}>
                Клиенты
            </Button>
            <br/>
            <Button
                size="large"
                variant="contained"
                className="content__add"
                color={"primary"}
                onClick={() => history.push('/contracts')}>
                Договора
            </Button>
            <br/>
            <Button
                size="large"
                variant="contained"
                className="content__add"
                color={"primary"}
                onClick={() => history.push('/report')}>
                Отчеты
            </Button>
        </div>
    );
};

export default CarModelMenu;