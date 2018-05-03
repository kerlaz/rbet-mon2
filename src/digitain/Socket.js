// const WebSocket = require('websocket').client;

export default class Socket {
    constructor(uri){
        this.uri = uri || 'wss://ws.rbet.kz';
        this.webSocket = new WebSocket(this.uri);
        this.webSocket.onopen = () => {console.log('websocket opened');this.subscribe()};
        this.webSocket.onclose = () => {console.log('websocket closed')};
        this.webSocket.onmessage = (evt) => {console.log(JSON.parse(evt.data))};
        return this;
    }
    subscribe(settings = [`live_sport:-1::1`,`sport:-1::1`]){
        let message = JSON.stringify({
            action: 'subscribe',
            objects: settings
        });
        this.webSocket.send(message);
    }
}