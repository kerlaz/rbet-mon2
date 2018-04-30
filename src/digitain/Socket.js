// const WebSocket = require('websocket').client;

export default class Socket {
    constructor(uri){
        this.uri = uri || 'wss://ws.rbet.kz';
        this.webSocket = new WebSocket(this.uri);
        this.webSocket.onopen = () => {console.log('websocket opened');this.subscribe()};
        this.webSocket.onclose = () => {console.log('websocket closed')};
        this.webSocket.onmessage = () => {console.log(this.webSocket.readyState)};
        return this;
    }
    subscribe(){
        let message = JSON.stringify({
            action: 'subscribe',
            objects: [`live_sport:-1::1`]
        });
        this.webSocket.send(message);
    }
}
