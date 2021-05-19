import React from 'react';
import {connect} from "react-redux";
import {fetchDealers, deleteDealers} from "../../services/dealerServices";
import "../../scss/Table.scss"
import "../../scss/AddBtn.scss"
import {history} from "../../index";
import Button from "@material-ui/core/Button";

class Dealers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.props.onFetch() ///Must have
    }

    handleEdit(dealer) {
        // debugger
        history.push({
            pathname: `/dealer/edit/${dealer.id}`,
            state: {
                dealer: dealer,
            }
        })
    }

    render() {
        return (
            <div className={"main"}>
                <div className="content">
                    <table>
                        <thead>
                        <tr>
                            <th onClick={() => this.props.sortById(this.props.sortByIdBool)}>#</th>
                            <th>Номер телефона</th>
                            <th>Город</th>
                            <th>Адрес</th>
                            <th>
                                <Button
                                    size="large"
                                    variant="contained"
                                    className="btn__add"
                                    color={"primary"}
                                    onClick={() => history.push('/dealers/create')}>
                                    Добавить
                                </Button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.dealers.map(
                                (dealer) =>
                                    <tr key={dealer.id}>

                                        <td>{dealer.id}</td>
                                        <td>{dealer.phone}</td>
                                        <td>{dealer.city}</td>
                                        <td>{dealer.address}</td>
                                        <td>
                                            <div className="btn">
                                                <button className="btn__danger"
                                                        onClick={() => this.props.onDelete(dealer.id)}>
                                                    Удалить
                                                </button>
                                                <button className="btn__default"
                                                        onClick={() => this.handleEdit(dealer)}>
                                                    Изменить
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        dealers: state.dealersData.dealers || [],
        error: state.dealersData.error,
        isLoading: state.dealersData.isLoading,
        // sortByIdBool: state.dealersData.sortByIdBool,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchDealers())
        },
        onDelete: (id) => {
            dispatch(deleteDealers(id))
        },
        sortById: (data) => {
            dispatch({type: "СОРТИРОВКА_ПО_ID_DEALER", payload: data})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dealers);