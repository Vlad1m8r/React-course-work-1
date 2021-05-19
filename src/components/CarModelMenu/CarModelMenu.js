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
                onClick={() => history.push('/NewModel')}>
                Новый модельный ряд
            </Button>
            <br/>
            <Button
                size="large"
                variant="contained"
                className="content__add"
                color={"primary"}
                onClick={() => history.push('/OldModel')}>
                Автомобили с пробегом
            </Button>
            <br/>
            <Button
                size="large"
                variant="contained"
                className="content__add"
                color={"primary"}
                onClick={() => history.push('/AllModel')}>
                Все автомобили
            </Button>
            <br/>
            <Button
                size="large"
                variant="contained"
                className="content__add"
                color={"primary"}
                onClick={() => history.push('/author')}>
                Об авторе
            </Button>
        </div>
    );
};

export default CarModelMenu;