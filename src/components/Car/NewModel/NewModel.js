import React from 'react';
import {connect} from "react-redux";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./NewModel.css"
import {history} from "../../../index";
import NewModelElem from "./NewModelElem";

class NewModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        if (this.props.isLoading) {
            return (
                <div>
                    Загрузка данных
                </div>
            )

        } else
            return (
                <div className="main">
                    <div className="main__search">
                        <InputLabel htmlFor="searchNumber"/>
                        <Input
                            className="search-in"
                            placeholder={"Поиск по названию"}
                            id="searchNumber"
                            onChange={(e) => this.props.searchByName(e.target.value)}
                            startAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                            }/>
                    </div>
                    {/*<button className="btn" onClick={() => history.push('/car/create')}>Добавить</button>*/}
                    <div className="main__content">
                        {this.props.cars.map(car => {
                            if (car.newModel)
                                return (
                                    <NewModelElem
                                        car={car}

                                    />
                            )
                        })}
                    </div>
                </div>
            );
    }
};

const mapStateToProps = (state) => {
    return {
        cars: state.carsData.cars || [],
        error: state.carsData.error,
        isLoading: state.carsData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchByName : (data) => {
            dispatch({type: "ПОИСК_ПО_ИМЕНИ", payload: data})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewModel);