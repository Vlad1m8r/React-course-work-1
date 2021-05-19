import React from 'react';
import {connect} from "react-redux";
import {createDealer} from "../../services/dealerServices";
import {history} from "../../index";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../scss/createFroms.scss"

class CreateDealer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: null,
            address: null,
            city: null,
        }
    }


    componentWillMount() {
        // componentWillMount() {
        const props = this.props
        // debugger
        if (props.location && props.location.state) {
            const dealer = props.location.state.dealer
            this.setState({
                id: dealer.id,
                phone: dealer.phone,
                address: dealer.address,
                city: dealer.city,
            })
        }
    }


    handleReset(e) {
        e.preventDefault()
        history.push({pathname: "/dealer"})
        this.setState({
            phone: null,
            address: null,
            city: null,
        })
    }

    handleOnValueChange(e) {
        this.setState({
                [e.target.id]: e.target.value,
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        if (
            this.state.phone == null ||
            this.state.address == null ||
            this.state.city == null
        )
            alert("Не все поля заполнены!!")
        else
            this.props.onAdd(this.state)
    }

    render() {

        return (
            <div className={"content"}>
                <form className="content__create-form" onSubmit={this.handleSubmit.bind(this)}>
                    <Grid container spacing={2} justify={"center"}>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="phone"
                                       value={this.state.firstName}
                                       type="text"
                                       variant="outlined" label="Номер телефона"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="address"
                                       value={this.state.lastName}
                                       type="text"
                                       variant="outlined" label="Адресс"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="city"
                                       value={this.state.phoneNumber}
                                       type="text"
                                       variant="outlined" label="Город"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >Создать</Button>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                type="button"
                                fullWidth
                                onClick={(e) => this.handleReset(e)}
                            >Закрыть
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        error: state.dealersData.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (dealer) => {
            dispatch(createDealer(dealer));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDealer);