module.exports = [
    {
        type: 'heading',
        defaultValue: 'Emby for Pebble'
    },
    {
        type: 'text',
        defaultValue: 'You will need an API key from your Emby server. To do this, scroll to the bottom of the Emby dashboard and go to the Api Keys tab'
    },
    {
        type: 'section',
        items: [
            {
                type: 'heading',
                defaultValue: 'Enter Server Details'
            },
            {
                type: 'input',
                appKey: 'serverAddress',
                description: 'ex: http://emby.mydomain.com',
                label: 'Server Address'
            },
            {
                type: 'input',
                appKey: 'apiKey',
                label: 'API Key'
            },
            {
                type: 'submit',
                defaultValue: 'Save Settings'
            }
        ]
    },
];