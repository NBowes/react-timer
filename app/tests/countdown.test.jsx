var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown',()=>{
    it('should exist', ()=>{
        expect(Countdown).toBeTruthy();
    });
    describe('handleSetCountdown', ()=>{
        it('should set state to started and countdown', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            },1001);
        })
        it('should not set count state to a negative number',(done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown/>)
            countdown.handleCountdown(1);

            expect(countdown.state.count).toBe(1);
            expect(countdown.state.countStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            },3001)
        });
        it('should pause countdown on paused status', (done)=>{
          var countdown = TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleCountdown(3);
          countdown.handleStatusChange('paused');

          setTimeout(()=>{
            expect(countdown.state.count).toBe(3);
            expect(countdown.state.countStatus).toBe('paused');
            done();
          },1001);
        });
        it('should clear countdown when status is stopped', (done)=>{
          var countdown = TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleCountdown(3);
          countdown.handleStatusChange('stopped');

          setTimeout(()=>{
            expect(countdown.state.count).toBe(0);
            expect(countdown.state.countStatus).toBe('stopped');
            done();
          },1001);
        }) 
    })
})