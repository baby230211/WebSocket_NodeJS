const express = require('express');
const app = express();
const url = require('url'); //用來抓取 url 內容
const WebSocketServer = require('ws').Server; //載入ws 檔案

const server = app.listen(3000, function () {
  console.log('Running on port 3000');
  console.log('------------------------');
});
wss = new WebSocketServer({ server }); //設定 WebSocket Port 為 8000
const user = [];
const wsArray = {};
wss.on('connection', ws => {
  console.log('Client connected');
  console.log(user.length);
  for (let i = 0; i <= user.length; i++) {
    if (user.length == i) {
      user[i] = i;
      ws.id = i;
      ws.name = i + 1 + ' user';
      wsArray[ws.id] = ws;
      break;
    }
  }
  console.log(wsArray[1]);

  ws.on('message', data => {
    // 對 message 設定監聽，接收 Client 發送的訊息
    console.log(JSON.parse(data));
    // 取得所有連接中的client
    let clients = wss.clients;
    // clients.forEach((client, i) => {
    //   client.send(`${i} ：${JSON.parse(data)}`);
    // });
    for (let i = 0; i <= user.length - 1; i++) {
      // if (i != ws.id) {
      //   wsArray[i].send(ws.name + ':' + data);
      // }
      wsArray[i].send(ws.name + ':' + data);
    }
  });
  // 當WebSocket 的連線關閉時執行
  ws.on('close', () => {
    console.log('Close connected');
  });
});
