import React from 'react';

class CarInfo extends React.Component {

    componentWillMount() {
        // componentWillMount() {
        const props = this.props
        debugger
        if (props.location && props.location.state) {
            const car = props.location.state.car
            this.setState({
                id: car.id,
                carVIN: car.carVIN,
                carNumber: car.carNumber,
                carModel: car.carModel,
                carMake: car.carMake,
                cost: car.cost,
                type: car.type,
                carColor: car.carColor,
                carModelYear: car.carModelYear
            })
        }
    }

    render() {

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Модель</td>
                        <td>{this.state.carModel}</td>
                    </tr>
                    <tr>
                        <td>Производитель</td>
                        <td>{this.state.carMake}</td>
                    </tr>
                    <tr>
                        <td>Цена</td>
                        <td>{this.state.cost}</td>
                    </tr>
                    <tr>
                        <td>Тип</td>
                        <td>{this.state.type}</td>
                    </tr>
                    <tr>
                        <td>Цвет</td>
                        <td>{this.state.carColor}</td>
                    </tr>
                    <tr>
                        <td>Год выпуска</td>
                        <td>{this.state.carModelYear}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};

export default CarInfo;