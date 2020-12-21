import React, { FormEvent } from 'react';
import { DateInput } from '@blueprintjs/datetime';
import {
  Button,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
  NumericInput,
} from '@blueprintjs/core';
import moment from 'moment';

import './cgt-calculator.styles.css';

export interface ICgtCalculatorProps {}

export interface ICgtCalculatorStates {
  purchasedDate: Date;
}

export default class CgtCalculator extends React.Component<
  ICgtCalculatorProps,
  ICgtCalculatorStates
> {
  constructor(props: ICgtCalculatorProps) {
    super(props);
    this.state = {
      purchasedDate: new Date(),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  private onNumberChange(value: number) {
    console.log('onNumberChange', value);
  }

  private handleDateChange(date: Date) {
    console.log('handleDateChange', date);
    this.setState({ purchasedDate: date });
  }

  private handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('handleSubmit');
  }

  public render() {
    return (
      <Card
        className='cgt-calculator-container'
        interactive={false}
        elevation={Elevation.TWO}
      >
        <h2>Calculator</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            label='Current taxable income'
            labelFor='text-input'
            labelInfo='(required)'
            inline={true}
            disabled={false}
            helperText='Helper text with details...'
          >
            <InputGroup id='text-input' placeholder='Placeholder text' />
          </FormGroup>

          <FormGroup
            label='Date of purchase'
            labelFor='date-picker-input'
            labelInfo='(required)'
            inline={true}
            disabled={false}
            helperText='Helper text with details...'
          >
            <DateInput
              formatDate={(date) => moment(date).locale('au').format('LL')}
              parseDate={(str) => moment(str, 'LL').locale('au').toDate()}
              onChange={this.handleDateChange}
              placeholder={'M/D/YYYY'}
              value={this.state.purchasedDate}
              showActionsBar={true}
              locale='au'
            />
          </FormGroup>

          <FormGroup
            label='Purchase price'
            labelFor='number-input'
            labelInfo='(required)'
            inline={true}
            disabled={false}
            // helperText='Helper text with details...'
          >
            <NumericInput onValueChange={this.onNumberChange} stepSize={1} />
          </FormGroup>

          <FormGroup
            label='Sell price'
            labelFor='sell-price-input'
            labelInfo='(required)'
            inline={true}
            disabled={false}
            // helperText='Helper text with details...'
          >
            <NumericInput onValueChange={this.onNumberChange} stepSize={1} />
          </FormGroup>

          <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </Card>
    );
  }
}
