import React from 'react';
import {connect} from "react-redux";
import {fetchContracts, deleteContract} from "../../services/contractServices";
import "../../scss/Table.scss"
// import {history} from "../../index";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

class Report extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.props.onFetch() ///Must have
    }

    // handleEdit(contract) {
    //     history.push({
    //         pathname: `/edit/${contract.id}`,
    //         state: {
    //             user: contract,
    //         }
    //     })
    // }                        ///Must have

    getRow (contract) {
        debugger
        let row = []
        const days = Math.ceil(Math.abs((
            new Date(contract.dateEnd)).getTime() -
            (new Date(contract.dateStart)).getTime()) / (1000 * 3600 * 24))

        if (contract.client?.id && contract.car?.id) {
            row.push(<td>{contract.number}</td>)
            row.push(<td>{contract.client.firstName} {contract.client.lastName}</td>)
            row.push(<td>{contract.dateStart}</td>)
            // row.push(<td>{contract.dateEnd}</td>)
            // row.push(<td>{days}</td>)
            row.push(<td>{contract.car.cost}</td>)
            // row.push(<td>{contract.car.cost*days}</td>)
            // row.push(<td>{contract.car.carVIN}</td>)
            // row.push(<td>{contract.car.carNumber}</td>)
            row.push(<td>{contract.car.carModel}</td>)
            row.push(<td>{contract.car.carMake}</td>)
            row.push(<td>{contract.car.carColor}</td>)
            row.push(<td>{contract.car.carModelYear}</td>)
            row.push(<td>{contract.car.type}</td>)
            return (<tr>{row}</tr>)
        }

    }

    render() {
        return (
            <div className={"main"}>
                <div className="content">
                    <table>
                        <thead>
                        <tr>
                            <th>?????????? ????????????????</th>
                            <th>
                                <InputLabel htmlFor="searchNumber" />
                                <Input
                                    placeholder={"?????????? ???? ?????? ??????????????"}
                                    id="searchNumber"
                                    onChange={(e) => this.props.searchByName(e.target.value)}
                                    startAdornment={
                                        <InputAdornment position="end">
                                            <SearchIcon/>
                                        </InputAdornment>
                                    }
                                /><p>?????? ??????????????</p></th>
                            <th>????????</th>
                            {/*<th>???????? ????????????</th>*/}
                            {/*<th>?????????? ????????</th>*/}
                            {/*<th>???????? ???? ??????????</th>*/}
                            <th>????????</th>
                            {/*<th>VIN ??????????</th>*/}
                            {/*<th>?????????? ????????????</th>*/}
                            <th>????????????</th>
                            <th>??????????????????????????</th>
                            <th>????????</th>
                            <th>?????? ??????????????</th>
                            <th>??????</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.contracts.map(
                                (contract) =>
                                    this.getRow(contract)
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
        contracts: state.contractsData.contracts || [],
        error: state.contractsData.error,
        isLoading: state.contractsData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchContracts())
        },
        onDelete: (id) => {
            dispatch(deleteContract(id))
        },

        searchByName : (data) => {
            dispatch({type: "??????????_????_??????????", payload: data})
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report);