# ポートフォリオ開発 セットアップガイド

## 開発環境のセットアップ

### 1. Node.js環境の準備

```bash
# nvmを使用してNode.jsのバージョンを統一
nvm use
# または手動でv22.15.0をインストール
nvm install v22.15.0
nvm use v22.15.0
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

## 開発時のベストプラクティス

### コミット前のチェック

```bash
# リント（コード品質チェック）
npm run lint

# フォーマット
npm run format
```

### VS Code設定

- `.vscode/extensions.json` に推奨拡張機能を定義済み
- 自動でフォーマットとリントが実行される設定

## プロジェクト構成の理解

### 主要ディレクトリ

- `src/app/` - Next.js App Router のページ
- `src/components/` - 再利用可能コンポーネント
- `src/config/` - 設定ファイル（プロジェクト情報、スキル情報など）
- `src/types/` - TypeScript型定義
- `src/hooks/` - カスタムフック
- `src/utils/` - ユーティリティ関数

### 開発の流れ

1. 新機能追加時は適切なディレクトリ構造を維持
2. コンポーネントは小さく、再利用可能に設計
3. 型定義は `src/types/` に集約
4. 設定データは `src/config/` に分離

## トラブルシューティング

### よくある問題

1. **Node.js バージョン不一致**: `.nvmrc` を確認し `nvm use` を実行
2. **ビルドエラー**: `npm run lint` でエラーを確認
3. **型エラー**: TypeScript の型定義を確認
