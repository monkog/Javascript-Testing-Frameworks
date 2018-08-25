import test from 'ava';
const { component } = require("../../src/img-render");
const jsdom = require('jsdom'); 
const { JSDOM } = jsdom;
const dom = new JSDOM(); 
const window = dom.window; 
const document = window.document; 
global.document = document;

test('1', assert => {
    assert.is(typeof component, 'function');
    assert.notThrows(() => component);
});

test('2', assert => {
    const arity = component.length;
    assert.is(arity, 2);
});

test('3', assert => {
    let value = '';
    let comp = new component({ render: value })
    assert.is(comp.render, value);
});

test('4', assert => {
    let value = '';
    let comp = new component({ render: value })
    assert.is(comp.render, value);
});

test('5', assert => {
    let value = document.createElement('element');
    let comp = new component({ render: value })
    assert.true(comp.render instanceof dom.window.HTMLElement);
});

test('6', assert => {
    let value = document.createElement('element');
    document.body.appendChild(value);
    new component({ render: value })
    assert.true(document.body.contains(value));
});

test('7', assert => {
    let value = document.createElement('element');
    document.body.appendChild(value);
    const images = [
        "img1",
        "img2"
    ];
    let comp = new component({ render: value }, images)
    assert.is(comp.images.length, 2);
    assert.deepEqual(comp.images, images);
});

test('8', assert => {
    let value = document.createElement('element');
    document.body.appendChild(value);
    let comp = new component({ render: value }, [])
    assert.is(comp.currentIndex, 0);
    assert.is(typeof comp.renderImg, 'function');
});

test('9', assert => {
    let value = document.createElement('element');
    document.body.appendChild(value);
    let comp = new component({ render: value }, [])

    assert.notThrows(() => comp.timeout);
    assert.is(comp.timeout, 4);
    assert.notThrows(() => comp.start);
    assert.notThrows(() => comp.stop);
    assert.notThrows(() => comp.timer);
});

test('10', assert => {
    assert.true(false, "Travis will fail");
});