var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer',()=>{
  it('should exist',()=>{
    expect(Timer).toBeTruthy();
  });
  describe('handleTimer',()=>{
    it('should set countState to started',()=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>)
      timer.handleTimer();

      expect(timer.state.countStatus).toBe('started');
    })
    it('should pause timer when countState set to paused',()=>{
      var timer = TestUtils.renderIntoDocument(<Timer />)
      timer.handleStatusChange('paused');

      expect(timer.state.countStatus).toBe('paused');
    }) 
    it('should set time to zero when countStatus set to stopped',()=>{
      var timer = TestUtils.renderIntoDocument(<Timer />)
      timer.handleStatusChange('stopped');

      expect(timer.state.countStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
    })
  })
});