var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', ()=>{
    it('clock should exist', ()=>{
        expect(Clock).toBeTruthy();
    });
    describe('formatSeconds', ()=>{
        it('should format seconds',()=>{
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 640;
            var expected = '10:40';
            var actual = clock.formatSeconds(seconds);

            expect(expected).toBe(actual);
        })
        it('should format seconds and minutes under 10', () =>{
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 65;
            var expected = "01:05"
            var actual = clock.formatSeconds(seconds);

            expect(expected).toBe(actual);
        })
    })
});
