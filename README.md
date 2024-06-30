<p align="center">
<img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/react-simple-todo.png" width="100%">
<br>
<h1 align="center">React-simple-todo</h1>
<h2 align="center">
  ～ Parsing Extracting Generating Automated Scraping Utility System ～
<br>

<a href="https://github.com/Sunwood-ai-labs/React-simple-todo" title="Go to GitHub repo"><img src="https://img.shields.io/static/v1?label=React-simple-todo&message=Sunwood-ai-labs&color=blue&logo=github"></a>
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Sunwood-ai-labs/React-simple-todo">
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo"><img alt="forks - Sunwood-ai-labs" src="https://img.shields.io/github/forks/React-simple-todo/Sunwood-ai-labs?style=social"></a>
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo"><img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/Sunwood-ai-labs/React-simple-todo"></a>
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo"><img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/Sunwood-ai-labs/React-simple-todo"></a>
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/Sunwood-ai-labs/React-simple-todo?color=red">
<img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/Sunwood-ai-labs/React-simple-todo?sort=semver&color=orange">
<img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/Sunwood-ai-labs/React-simple-todo/publish-to-pypi.yml">

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=badge&logo=react&logoColor=61DAFB">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-B73BFE?style=badge&logo=vite&logoColor=FFD62E">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=badge&logo=tailwind-css&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=badge&logo=typescript&logoColor=white">
</p>

<br>
<p align="center">
  <a href="https://sunwood-ai-labs.github.io/React-simple-todo/"><b>[📚 GitHub Pages]</b></a> •
  <a href="https://hamaruki.com/"><b>[🌐 Website]</b></a> •
  <a href="https://github.com/Sunwood-ai-labs"><b>[🐱 GitHub]</b></a>
  <a href="https://x.com/hAru_mAki_ch"><b>[🐦 Twitter]</b></a> •
  <a href="https://hamaruki.com/"><b>[🍀 Official Blog]</b></a>
</p>

</h2>

</p>

>[!IMPORTANT]
>このリポジトリのリリースノートやREADME、コミットメッセージの9割近くは[claude.ai](https://claude.ai/)や[ChatGPT4](https://chatgpt.com/)を活用した[AIRA](https://github.com/Sunwood-ai-labs/AIRA), [SourceSage](https://github.com/Sunwood-ai-labs/SourceSage), [Gaiah](https://github.com/Sunwood-ai-labs/Gaiah), [HarmonAI_II](https://github.com/Sunwood-ai-labs/HarmonAI_II)で生成しています。


React Simple Todo は、Vite、React、shadcn-ui を使用して構築されたシンプルで効率的なTODOリストアプリケーションです。

## 特徴

- 直感的なユーザーインターフェース
- タスクの追加、完了、削除機能
- レスポンシブデザイン
- ダークモード対応

## 技術スタック

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## セットアップ

### 前提条件

- Node.js (v14以上)
- npm または yarn
- Docker と Docker Compose (オプション)

### インストール

1. リポジトリをクローンします：

   ```bash
   git clone https://github.com/Sunwood-ai-labs/React-simple-todo.git
   cd React-simple-todo
   ```

2. 依存関係をインストールします：

   ```bash
   cd my-react-app
   npm install
   ```

### 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは `http://localhost:5173` で利用可能になります。

## Docker を使用したセットアップ

1. Docker と Docker Compose がインストールされていることを確認してください。

2. リポジトリのルートディレクトリで以下のコマンドを実行します：

   ```bash
   docker-compose up -d
   ```

3. アプリケーションは `http://localhost:3000` で利用可能になります。

## 開発者向け詳細手順

プロジェクトを最初から設定する場合や、開発環境をセットアップする場合は、以下の手順に従ってください：

1. Docker コンテナに入ります：

   ```bash
   docker-compose exec react-app /bin/bash
   ```

2. Vite を使用して新しい React プロジェクトを作成します：

   ```bash
   npm create vite@latest my-react-app -- --template react
   ```

3. プロジェクトディレクトリに移動し、依存関係をインストールします：

   ```bash
   cd my-react-app
   npm install
   ```

4. 開発サーバーを起動します（ホストからアクセス可能にするために `--host` フラグを使用）：

   ```bash
   npm run dev -- --host
   ```

5. Tailwind CSS をインストールします：

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

6. Tailwind の設定ファイルを初期化します：

   ```bash
   npx tailwindcss init
   ```

7. shadcn/ui を初期化します：

   ```bash
   npx shadcn-ui@latest init
   ```

8. 必要な shadcn/ui コンポーネントを追加します：

   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add input
   npx shadcn-ui@latest add checkbox
   ```

9. 開発サーバーを再起動します：

   ```bash
   npm run dev -- --host
   ```

10. デプロイする準備ができたら、以下のコマンドを実行します：

    ```bash
    npm run deploy
    ```

これらの手順に従うことで、プロジェクトを完全にセットアップし、開発を開始できます。

## デプロイ

GitHub Pages にデプロイするには：

```bash
npm run deploy
```

## 開発

### コンポーネントの追加

新しい shadcn/ui コンポーネントを追加するには：

```bash
npx shadcn-ui@latest add [component-name]
```

### スタイリング

TailwindCSS を使用してスタイリングを行います。`app/globals.css` ファイルでグローバルスタイルを定義し、コンポーネント内で Tailwind クラスを使用してスタイリングします。

## コントリビューション

プロジェクトへの貢献を歓迎します。プルリクエストを送信する前に、既存の問題をチェックするか、新しい問題を作成してください。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細については [LICENSE](LICENSE) ファイルを参照してください。

## 謝辞

- [Vite](https://vitejs.dev/) - 高速な開発環境
- [React](https://reactjs.org/) - ユーザーインターフェース構築のための JavaScript ライブラリ
- [shadcn/ui](https://ui.shadcn.com/) - 美しいUIコンポーネント
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストの CSS フレームワーク
