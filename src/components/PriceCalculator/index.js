import React, { Component } from 'react'
import {PriceCalculatorContainer,
    ResultRow,
    DurationRow,
    StudentNumberRow,
    CurrencyRow,
    DurationBtn30,
    DurationBtn60,
    DurationBtn90,
    StudentNumberBtn,
    CurrencyBtn} from './priceCalculatorElements';

export default class PriceCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonToggled : false,
            totalPrice : 0,
            isEuro : true,
            currency : "CZK",
            currencyShow : "€"
        }

        this.toggleButton = this.toggleButton.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
    }

     toggleButton = () => {
         this.setState(prevState => ({isButtonToggled : !prevState.isButtonToggled}));
         this.setState({totalPrice : 13})
    }

    changeCurrency = () => {

        if (this.state.totalPrice === null) {
            return;
        } else {
            this.setState({
                isEuro : this.state.isEuro ? false : true, 
                currency : this.state.isEuro ? "€" : "CZK",
                currencyShow : this.state.isEuro ? "CZK" : "€" });
        }
    }


    render() {
        return (
            <>
            <PriceCalculatorContainer>
                <ResultRow>
                    {this.state.totalPrice} {this.state.currencyShow}
                </ResultRow>
                <DurationRow>
                    <DurationBtn30 onClick={this.toggleButton} value={13} price={13}>30min</DurationBtn30>
                    <DurationBtn60 onClick={this.toggleButton} value={17}>60min</DurationBtn60>
                    <DurationBtn90 onClick={this.toggleButton} value={25}>90min</DurationBtn90>
                </DurationRow>
                <StudentNumberRow>
                    <StudentNumberBtn>1</StudentNumberBtn>
                    <StudentNumberBtn>2</StudentNumberBtn>
                    <StudentNumberBtn>3</StudentNumberBtn>
                    <StudentNumberBtn>4</StudentNumberBtn>
                </StudentNumberRow>
                <CurrencyRow>
                    <CurrencyBtn onClick={this.changeCurrency}>{this.state.currency}</CurrencyBtn>
                </CurrencyRow>
            </PriceCalculatorContainer>
        </>
        )
    }
}
