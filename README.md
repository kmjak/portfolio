# 🚀 Portfolio Website

こんにちは！kmjak(奥村真翔)のポートフォリオサイトへようこそ 👋

プログラミングと競技プログラミング、そして動物を愛する専門学生のポートフォリオサイトです。
このサイトでは、私の経歴、スキル、プロジェクト、そして連絡先を紹介しています。

🌐 **デプロイ先**: [portfolio-kmjaks-projects.vercel.app](https://portfolio-kmjaks-projects.vercel.app)

## ✨ 特徴

- 📱 **レスポンシブデザイン**: モバイルからデスクトップまでレスポンシブ対応
- ⚡ **高速パフォーマンス**: Next.js 15とTurbopackで最適化
- 🎨 **モダンUI**: Tailwind CSSによる洗練されたデザイン
- 🌟 **インタラクティブ**: スムーズなアニメーションとトランジション
- 🔧 **型安全**: TypeScriptによる堅牢な開発

## 🛠️ 技術スタック

### フロントエンド

- **Next.js 15** - Reactフレームワーク（App Router使用）
- **React 19** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS 4** - ユーティリティファーストCSS

### 状態管理・ユーティリティ

- **Jotai** - 軽量な状態管理
- **clsx & tailwind-merge** - 動的クラス名結合
- **React Icons** - アイコンライブラリ

### 開発ツール・品質管理

- **ESLint** - コード品質の向上
- **Prettier** - コードフォーマット
- **Turbopack** - 高速バンドラー（開発時）
- **TypeScript** - 静的型チェック

### インフラ・デプロイ

- **Vercel** - ホスティング・デプロイ
- **GitHub** - ソースコード管理

> 📋 **詳細な選定理由**: より詳しい技術選定の背景については、[TECHNOLOGY_STACK.md](./TECHNOLOGY_STACK.md) をご覧ください。

## 🚀 クイックスタート

### 前提条件

- Node.js 22.15.0以上（推奨）
- npm
- nvm（Node.jsバージョン管理）

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/kmjak/portfolio.git
cd portfolio

# .nvmrcで指定されたNode.jsバージョンを使用
nvm use

# 依存関係をインストール
npm install
```

### VSCode使用時の推奨設定

このプロジェクトをVSCodeで開くと、自動的に推奨拡張機能の通知が表示されます。
以下の拡張機能をインストールすることで、より快適な開発体験が得られます：

#### 必須拡張機能

- **ESLint** - コードの品質チェック
- **Prettier** - コードフォーマット
- **Tailwind CSS IntelliSense** - CSSクラスの補完
- **Auto Rename Tag** - HTMLタグの自動リネーム
- **Code Spell Checker** - スペルチェック
- **HTML CSS Class Completion** - CSS クラス補完
- **Trailing Spaces** - 末尾スペースのハイライト
- **など**

### 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます 🎉

💡 **本番環境**: [portfolio-kmjaks-projects.vercel.app](https://portfolio-kmjaks-projects.vercel.app) で本番環境も確認できます

### その他のおすすめスクリプト

```bash
# コードフォーマット
npm run format

# Linting（コード品質チェック）
npm run lint

# プロダクションビルド
npm run build

# プロダクション環境での起動
npm run start
```

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/          # パブリックページ
│   │   ├── (home)/        # ホームページ
│   │   ├── about/         # 自己紹介ページ
│   │   ├── projects/      # プロジェクト一覧
│   │   ├── skills/        # スキル紹介
│   │   └── contact/       # お問い合わせ
│   └── globals.css        # グローバルスタイル
├── components/             # 再利用可能なコンポーネント
│   ├── ui/               # 基本UIコンポーネント
│   ├── navigation/       # ナビゲーション関連
│   ├── project/          # プロジェクト表示
│   └── ...
├── config/                # 設定ファイル
├── types/                 # TypeScript型定義
├── hooks/                 # カスタムフック
└── utils/                 # ユーティリティ関数
```

## 👨‍💻 About Me

- 🎓 **専門学生**: プログラミングやサイバーセキュリティを学習中
- 🏆 **ハッカソン**: Progate ハッカソン Powered By AWS 2025.03 特別賞受賞
- 🏆 **競技プログラミング**: AtCoder（Algorithm: 茶色 & Heuristic: 緑色）
- 🎮 **ゲーマー**: Call of Duty Mobile 元上位0.05%
- 🚀 **目標**: 高い技術力と柔軟な設計力の両面を兼ね備えたテックリード

### 最近の活動

- Progate 学生アンバサダー（2025年06月）
- HackU 出場（2025年06月）
- 株式会社ログラス 5Daysインターンシップ参加（2025年06月）
- Progateハッカソン特別賞受賞（2025年03月）

### 2025年07月現在の状況

継続的にスキル向上とプロジェクト開発に取り組んでおり、新しい技術スタックの習得と実践的なアプリケーション開発を続けています。

## 📸 スクリーンショット

サイトでは以下のような画面を確認できます：

- 🏠 **ホーム**: プロフィールとメイン紹介
- 👤 **About**: 詳細な経歴と実績
- 💼 **Projects**: 制作したプロジェクト一覧
- 🛠️ **Skills**: 技術スキルとカテゴリー
- 📧 **Contact**: お問い合わせ情報

## 📖 開発者向け情報

より詳細な開発情報については、[DEVELOPMENT.md](./DEVELOPMENT.md) をご確認ください。

## 📝 ライセンス

このプロジェクトはプライベートプロジェクトです。
