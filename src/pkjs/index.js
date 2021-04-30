require('pebblejs');
const UI = require('pebblejs/ui');
const Settings = require('pebblejs/settings'); 
const ajax = require('pebblejs/lib/ajax');
const Feature = require('pebblejs/platform/feature');
const Clay = require('./clay');
const clayConfig = require('./config');

const clay = new Clay(clayConfig, null, { autoHandleEvents: false });

Pebble.addEventListener('showConfiguration', function () {
    Pebble.openURL(clay.generateUrl());
});

Pebble.addEventListener('webviewclosed', function () {
    if (e && !e.response) return;

    const data = clay.getSettings(e.response);
    
    console.log(JSON.stringify(data));

    Settings.option(data);
});

const loadingScreen = new UI.Card({
    status: {
        backgroundColor: Feature.color(0x00AAFF, 'white'),
        separator: 'none'
    },
    title: 'Loading...',
});

loadingScreen.show();