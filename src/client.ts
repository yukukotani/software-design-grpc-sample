import { createPromiseClient } from "@bufbuild/connect";
import { createGrpcTransport } from "@bufbuild/connect-node";
import { ChatService } from "./gen/chat/v1/chat_connect";

// 入力した引数
const sentence = process.argv[2];

async function main() {
  // Node.js と Connect のアダプタを作成
  const transport = createGrpcTransport({
    httpVersion: "2",
    baseUrl: "http://localhost:8080",
  });
  // サービス定義を元に、クライアントを作成
  const client = createPromiseClient(ChatService, transport);

  // クライアントを実行
  const response = await client.say({
    sentence: sentence,
  });

  console.log(response.sentence);
}

main();
