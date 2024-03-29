# Software Design 2023年7月号「gRPC で始める Web API 開発」サンプルコード

[Software Design 2023年7月号](https://gihyo.jp/magazine/SD/archive/2023/202307)の特集「gRPC で始める Web API 開発」、第4章「gRPC による Web API の実装」のサンプルコードです。

## 動作確認環境

- Node.js v18.16.0
- npm v9.6.4
- Buf CLI 1.19.0

## セットアップ

```
npm install
```

## 記事との対応

本サンプルコードでは、記事と対応する形でコミットをしています。

| コミット                                                                                                             | 記事の節                                        |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [6cae797](https://github.com/yukukotani/software-design-grpc-sample/commit/6cae797e88544190316a037fb54ed947a7a0d5fa) | 記事内で省略した TypeScript 等のセットアップ    |
| [56f8c6d](https://github.com/yukukotani/software-design-grpc-sample/commit/56f8c6ddda576804c77d198dd95922cd13a20309) | API の定義                                      |
| [c566e2e](https://github.com/yukukotani/software-design-grpc-sample/commit/c566e2e604da43fe8ddab41b59aa84ca641fabb6) | リント・フォーマット                            |
| [bcc7b66](https://github.com/yukukotani/software-design-grpc-sample/commit/bcc7b66f11dc27a7f98f353dfda7f6a62f0c7d0c) | API からコードを生成する                        |
| [4e5a3e2](https://github.com/yukukotani/software-design-grpc-sample/commit/4e5a3e2b0411311c010c1e680e0d3ae86d9df242) | API サーバーの実装 > サーバーのセットアップ     |
| [589f36d](https://github.com/yukukotani/software-design-grpc-sample/commit/589f36d0df76b685fa3ba69635c67ac17aa274a2) | API サーバーの実装 > サービスの実装             |
| [b825239](https://github.com/yukukotani/software-design-grpc-sample/commit/b8252393cc4cf1266bd91b271a330e4e17e14e85) | API サーバーの実装 > サーバーの起動             |
| [7f60700](https://github.com/yukukotani/software-design-grpc-sample/commit/7f607008c6b0977408dac3fbb67fb4ef4bf0f206) | クライアントの実装 > クライアントのセットアップ |
| [1abfe99](https://github.com/yukukotani/software-design-grpc-sample/commit/1abfe99cb97edb60437b9fc63c1a3842126603ab) | クライアントの実装 > クライアントの実装         |
| [ef9989a](https://github.com/yukukotani/software-design-grpc-sample/commit/ef9989ab8756bb7faddafbbbfed1471014fd9176) | CI による検証 > 破壊的変更の検知                |
| [3d44a87](https://github.com/yukukotani/software-design-grpc-sample/commit/3d44a87b056c18b7507f5dbf90f82356e8bb8e53) | CI による検証 > リント                          |
