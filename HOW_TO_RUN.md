# rust wasm env on docker

WebAssembly(Rust)プロジェクトを動かせる Docker 環境です。

## 環境構築手順

### 1. 実行環境作成

`docker-build.ps1`のスクリプトを実行した後、`docker-run.ps1`のスクリプトを実行してください。  
app ディレクトリ内が共有された状態で rust wasm 実行環境に入ります。  
基本的に app ディレクトリ内で作業することを想定しています。

実行環境は[こちら](https://rustwasm.github.io/docs/book/game-of-life/setup.html)のセットアップが完了した状態になっています

### 2. wasm-pack new でプロジェクト作成
`[ProjectName]`は自分が作成したいプロジェクトの名前
```
wasm-pack new [ProjectName]
```

### 3. wasm-pack build で js との橋渡しをするコード群生成

```
cd `[ProjectName]`
wasm-pack build
```

### 4. Web アプリケーション部分を作成

```
npm init rust-webpack www
cd www
npm install
```

### 5. 開発サーバー起動用の設定

Docker 外部のブラウザから開発サーバーにアクセスできるように www/package.json の scripts を変更する

```json
  "scripts": {
    "build": "rimraf dist pkg && webpack",
    "start": "rimraf dist pkg && webpack-dev-server --open -d",
    "test": "cargo test && wasm-pack test --headless"
  },
```

↓

```json
  "scripts": {
    "build": "rimraf dist pkg && webpack",
    "start": "rimraf dist pkg && webpack-dev-server --open -d --host 0.0.0.0",
    "test": "cargo test && wasm-pack test --headless"
  },
```

### 6. 開発サーバー起動

```
npm run start
```

### 7. ブラウザからアクセス

以下の URL にアクセス

http://127.0.0.1:8080
