#!/bin/bash

# 環境変数が設定されていることを確認
if [ -z "$GITHUB_USERNAME" ] || [ -z "$GITHUB_TOKEN" ] || [ -z "$GITHUB_EMAIL" ] || [ -z "$GITHUB_NAME" ]; then
  echo "エラー: 必要な環境変数が設定されていません。"
  echo "以下のコマンドを使用して環境変数を設定してください："
  echo "export GITHUB_USERNAME=your-username"
  echo "export GITHUB_TOKEN=your-personal-access-token"
  echo "export GITHUB_EMAIL=your-email@example.com"
  echo "export GITHUB_NAME='Your Name'"
  exit 1
fi

# Git の認証情報ヘルパーを設定
git config --global credential.helper store

# 認証情報を保存
echo "https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com" > ~/.git-credentials

# ユーザー名とメールアドレスを設定
git config --global user.email "$GITHUB_EMAIL"
git config --global user.name "$GITHUB_NAME"

# リポジトリのURLを更新（必要な場合）
# git remote set-url origin https://github.com/$GITHUB_USERNAME/your-repo.git

echo "GitHub認証設定が完了しました。"
echo "設定されたユーザー名: $GITHUB_NAME"
echo "設定されたメールアドレス: $GITHUB_EMAIL"
