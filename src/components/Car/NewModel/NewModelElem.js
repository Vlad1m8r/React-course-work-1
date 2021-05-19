import React from 'react';
import "./CarElem.scss"
import {history} from "../../../index";


const FilmElem = ({car}) => {

    const handleEdit = (car) => {
        debugger
        history.push({
            pathname: `/car/info`,
            state: {
                car: car,
            }
        })
    }

    return (
        <div className="car-elem">
            <div className="car-elem__image">
                <img src={car.posterUrl} alt="popular" onClick={() => handleEdit(car)}/>
            </div>
            {/*<div className="car-info">*/}
            {/*    /!*<div className="car-name">{car.name}</div>*!/*/}

            {/*    /!*<div className="row">*!/*/}
            {/*    /!*    <div>Жанр:</div>*!/*/}
            {/*    /!*    <div className="car-genre">{car.genre}</div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className="row">*!/*/}
            {/*    /!*    <div>Ограничение:</div>*!/*/}
            {/*    /!*    <div className="car-age">{car.age}+</div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className="row">*!/*/}
            {/*    /!*    <div>Рейтинг:</div>*!/*/}
            {/*    /!*    <div className="car-rate">{car.rate}</div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className="row">*!/*/}
            {/*    /!*    <div>Дата выхода:</div>*!/*/}
            {/*    /!*    <div className="car-release">{car.release}</div>*!/*/}
            {/*    /!*</div>*!/*/}

            {/*    /!*<button className="btn" onClick={() => handleGetSession(car)}>Расписание</button>*!/*/}
            {/*    <button className="btn" >Информация</button>*/}
            {/*    /!*<button className="btn-def" onClick={() => handleEdit(car)}>Изменить</button>*!/*/}
            {/*    /!*<button className="btn-dan" onClick={() => del(car.id)}>Удалить</button>*!/*/}
            {/*</div>*/}
        </div>
    );
};

export default FilmElem;