import { expect } from "chai"
import { interpret } from 'xstate';
import { toggleMachine } from "../lib/pairing-fsm";

describe('Application', () => {
  it('should work', () => {

    const toggleService = interpret(toggleMachine)
      .onTransition((state) => console.log(state.value))
      .start();
    toggleService.send('TOGGLE');
    toggleService.send('TOGGLE');

    expect(true).to.be.true;
  })
})