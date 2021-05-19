import React from 'react';
import {connect} from "react-redux";
import {fetchCars, deleteCars} from "../../services/carServices";
import "../../scss/Table.scss"
import "../../scss/AddBtn.scss"
import {history} from "../../index";
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";



class Cars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.props.onFetch()
        this.props.cars.map(car => {
            this.state.data.push([car.id,car.carVIN, car.carNumber, car.carModel, car.carMake,
                <div>
                    <button className="btn def">Редактировать</button>
                    <button className="btn den">Блокировать</button>
                </div>])
        })
    }

    handleEdit(car) {
        debugger
        history.push({
            pathname: `/edit/${car.id}`,
            state: {
                car: car,
            }
        })
    }


    render() {

        const columns = ["ID", "VIN номер", "Номер", "Модель", "Производитель", ""];

        const options = {
            textLabels: {
                toolbar: {
                    search: "Search",
                    viewColumns: "View Columns",
                    filterTable: "Filter Table"
                }
            },
            selectableRowsHideCheckboxes: true,
            tableBodyHeight: "350px",
            filter: false,
            rowsPerPage: 5,
            viewColumns: false,
            rowsPerPageOptions: [5, 10, 15],
            download: false,
            print: false,
            filterType: "dropdown",
            responsive: "vertical",
        };


        if (this.props.isLoading) {
            return (
                <div>Loading</div>
            )
        }
        else
        return (
            <div className={"main"}>
                <div className="content">
                    <div className="content__actions">
                        <div className="content__actions__btn">
                            <Button
                                size="large"
                                variant="contained"
                                className="btn__add"
                                color={"primary"}
                                onClick={() => history.push('/create')}>
                                Добавить
                            </Button>
                        </div>
                    </div>

                    <MUIDataTable
                        data={this.state.data}
                        columns={columns}
                        options={options}
                    />
                    <btn className="btn-add">Добавить</btn>

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
        sortByIdBool: state.carsData.sortByIdBool,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchCars())
        },
        onDelete: (id) => {
            dispatch(deleteCars(id))
        },
        sortById: (data) => {
            dispatch({type: "СОРТИРОВКА_ПО_ID_CAR", payload: data})
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);