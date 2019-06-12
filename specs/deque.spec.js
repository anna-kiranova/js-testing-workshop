var assert = require('assert');

let {Deque} = require('../src/deque');

describe('deque', function() {
    describe('class Deque exists', function() {
        it('Deque can be created and is instanceof Deque', function() {
            assert(typeof(Deque) === 'function');
            let deq = new Deque;
            assert(deq instanceof Deque);
        });
    });
    describe('method push', function() {
        it('exists', function() {
            let deq = new Deque();
            assert(typeof(deq.push === 'function'));
        });
        it('push works', function() {
            let deq = new Deque();
            assert(typeof deq.top(false) === 'undefined');
            deq.push(false, 42);
            assert(deq.top(false) === 42);
        });
    });
    describe('method pop', function() {
        it('exists', function() {
            let deq = new Deque();
            typeof(deq.pop !== 'undefined');
        });
        it('pop works', function() {
            let deq = new Deque();
            deq.push(false, 1);
            deq.pop(1);
            assert(deq.top(false) === 'undefined');
        });
    });
    describe('method top', function() {
        it('exists', function() {
            let deq = new Deque();
            assert(typeof(deq.top !== 'undefined'));
        });
        it('top works', function() {
            let deq = new Deque();
            deq.push(false, 123);
            assert(deq.top(false) === 123);
        });
    });
    describe('method merge', function() {
        it('exists', function() {
            let deq = new Deque();
            assert(typeof(deq.merge !== 'undefined'));
        });
        it('merge works', function() {
            let deq1 = new Deque();
            let deq2 = new Deque();
            deq1.push(false, 123);
            deq2.push(false, 456);
            deq1.merge(deq2);
            //assert( )
        });
    });
});