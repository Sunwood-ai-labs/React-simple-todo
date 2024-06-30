<p align="center">
<img src="https://huggingface.co/datasets/MakiAi/IconAssets/resolve/main/react-simple-todo.png" width="100%">
<br>
<h1 align="center">React-simple-todo</h1>
<h2 align="center">
  ～ Parsing Extracting Generating Automated Scraping Utility System ～
<br>
  <img alt="PyPI - Version" src="https://img.shields.io/pypi/v/React-simple-todo-SURF">
<img alt="PyPI - Format" src="https://img.shields.io/pypi/format/React-simple-todo-SURF">
<img alt="PyPI - Implementation" src="https://img.shields.io/pypi/implementation/React-simple-todo-SURF">
<img alt="PyPI - Status" src="https://img.shields.io/pypi/status/React-simple-todo-SURF">
<img alt="PyPI - Downloads" src="https://img.shields.io/pypi/dd/React-simple-todo-SURF">
<img alt="PyPI - Downloads" src="https://img.shields.io/pypi/dw/React-simple-todo-SURF">
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo" title="Go to GitHub repo"><img src="https://img.shields.io/static/v1?label=React-simple-todo&message=Sunwood-ai-labs&color=blue&logo=github"></a>
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Sunwood-ai-labs/React-simple-todo">
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo"><img alt="forks - Sunwood-ai-labs" src="https://img.shields.io/github/forks/React-simple-todo/Sunwood-ai-labs?style=social"></a>
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo"><img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/Sunwood-ai-labs/React-simple-todo"></a>
<a href="https://github.com/Sunwood-ai-labs/React-simple-todo"><img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/Sunwood-ai-labs/React-simple-todo"></a>
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/Sunwood-ai-labs/React-simple-todo?color=red">
<img alt="GitHub Tag" src="https://img.shields.io/github/v/tag/Sunwood-ai-labs/React-simple-todo?sort=semver&color=orange">
<img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/Sunwood-ai-labs/React-simple-todo/publish-to-pypi.yml">
<br>
<p align="center">
  <a href="https://hamaruki.com/"><b>[🌐 Website]</b></a> •
  <a href="https://github.com/Sunwood-ai-labs"><b>[🐱 GitHub]</b></a>
  <a href="https://x.com/hAru_mAki_ch"><b>[🐦 Twitter]</b></a> •
  <a href="https://hamaruki.com/"><b>[🍀 Official Blog]</b></a>
</p>

</h2>

</p>

>[!IMPORTANT]
>このリポジトリのリリースノートやREADME、コミットメッセージの9割近くは[claude.ai](https://claude.ai/)や[ChatGPT4](https://chatgpt.com/)を活用した[AIRA](https://github.com/Sunwood-ai-labs/AIRA), [SourceSage](https://github.com/Sunwood-ai-labs/SourceSage), [Gaiah](https://github.com/Sunwood-ai-labs/Gaiah), [HarmonAI_II](https://github.com/Sunwood-ai-labs/HarmonAI_II)で生成しています。

# Pegasus: あなたのウェブサイトをMarkdownに変換するツール

## 🌟 はじめに

Pegasusは、ウェブサイトを美しくフォーマットされたMarkdownドキュメントに再帰的にクロールおよび変換する、パワフルで柔軟なPythonパッケージです。指定されたURLから開始し、リンクをたどって関連するページを探索し、HTMLコンテンツを構造化されたMarkdownファイルに変換します。コマンドラインインターフェイス（CLI）から実行することも、Pythonスクリプトから直接使用することもできます。

このリポジトリには、Docker Composeを使用してPegasusを簡単に実行するための必要なファイルが含まれています。

## 🚀 使用開始

### 特徴

- **再帰的なクロール:** Pegasusは、指定されたURLから開始し、リンクをたどってウェブサイト全体をクロールします。
- **Markdownへの変換:** HTMLコンテンツを、読みやすく構造化されたMarkdownファイルに変換します。
- **柔軟な設定:** クロールする深さ、無視するリンク、出力ファイルの名前などをカスタマイズできます。
- **コマンドラインインターフェイス:** PegasusをCLIから簡単に実行できます。
- **Python API:** PegasusをPythonスクリプトに統合して、より複雑なワークフローを実現できます。

### インストール

1. このリポジトリをクローンします。

```bash
git clone https://github.com/[あなたのユーザー名]/pegasus-docker-compose.git
```

2. ディレクトリに移動します。

```bash
cd pegasus-docker-compose
```

3. Docker Composeを使用してコンテナを起動します。

```bash
docker-compose up -d
```

### 使用方法

Pegasusコンテナが起動したら、次のコマンドを使用してWebサイトをクロールおよび変換できます。

```bash
docker-compose exec pegasus pegasus [オプション] <URL>
```

**例:**

- `https://www.example.com` をクロールし、Markdownファイルを `output` ディレクトリに出力します。

```bash
docker-compose exec pegasus pegasus https://www.example.com -o output
```

- クロールの深さを3に制限します。

```bash
docker-compose exec pegasus pegasus https://www.example.com -d 3
```

- 特定のドメインからのリンクのみをクロールします。

```bash
docker-compose exec pegasus pegasus https://www.example.com -s example.com
```

## 📝 更新情報

開発中のため、定期的に更新情報を確認してください。

## 🤝 コントリビューション

プロジェクトへの貢献を歓迎します。 詳細は、CONTRIBUTING.mdを参照してください。

## 📄 ライセンス

このプロジェクトは、[ライセンス名]ライセンスの下でライセンスされています。 詳細については、LICENSEファイルを参照してください。

## 🙏 謝辞

Pegasusの開発に貢献してくれたすべての人に感謝します。

## 詳細情報

Pegasusの詳細については、公式ドキュメントを参照してください：[https://pegasus-docs.com](https://pegasus-docs.com)

**注意:** Pegasusは開発中のプロジェクトであるため、APIや機能は変更される可能性があります。

## 開発者用

```
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
```
