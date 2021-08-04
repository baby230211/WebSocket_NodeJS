# WebSocket_NodeJS

> ## 使用NodeJS 實作WebSocket .
> 
> 1.   輸入訊息 送出.
> 2.   可以在下方看到自己送出的訊息.
> 3.   若有其他人連結，可以在下方看到別人送出的訊息.



> HTTP Request 
> 如果伺服器有連續的狀態變化，Client 端要知道非常麻煩。只能使用輪詢( polling )：每隔一段時間，就發出一個 request ，去了解伺服器有沒有新的訊息。Ex. 聊天室


> ## 使用 WebSocket
> WebSocket 非常適合快速、即時的串流資料以及長時間的連結。
> 但是，如果你打算在行動裝置上，或網路不穩定的區域中使用他，就得謹慎行事了，因為採取這種作法時，用戶端就要垂有效的連結，如果連結中斷了，用戶端要重新啟動她
> 

> WebSocket 可以在較低的開銷之下啟用全雙工 ( full-duplex ) 通訊 ( 伺服器與用戶端可以同時與彼此通訊 )。此外，他們是在 80 或 443 連接阜上運行的，所以可以良好的搭配有可能阻擋其他連接阜的防火牆。

> ![image](https://github.com/baby230211/WebSocket_NodeJS/blob/main/image.png)


