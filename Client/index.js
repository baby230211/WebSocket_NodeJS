// 使用 WebSocket 的網址向 Server 開啟連結

let ws = new WebSocket('ws://localhost:3000');
// 開啟後的執行動作，指定 function 會在連結 WebSocket 後執行
ws.onopen = () => {
  console.log('open connection');
};

// 關閉後的執行動作
ws.onclose = () => {
  console.log('close connection');
};
// 接收訊息

ws.onmessage = event => {
  console.log(event);

  let msg = event.data;
  console.log(msg);

  let messageElement = document.createElement('li');
  messageElement.textContent = msg;
  document.getElementById('messages').prepend(messageElement);
};

function submitMessageFrom(event) {
  event.preventDefault();
  console.log(event.target['message'].value);
  ws.send(JSON.stringify(event.target['message'].value));
  event.target['message'].value = '';
}
