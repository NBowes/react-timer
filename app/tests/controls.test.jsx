var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls',()=>{
    it('should exist',()=>{
        expect(Controls).toBeTruthy();
    });
    describe('render',()=>{
        it('should render pause when started',()=>{
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
            var $e = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $e.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1)
        });
        it('should render start when paused',()=>{
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>);
            var $e = $(ReactDOM.findDOMNode(controls));
            var $startButton = $e.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        })
    });
});