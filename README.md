## Hide Kyujinbox Personal Recommend Tags

### 概要
この Google Chrome 拡張機能は、求人ボックス ([https://xn--pckua2a7gp15o89zb.com/](https://xn--pckua2a7gp15o89zb.com/)) において、IDが `'personal-recommend-'` で始まり、数字が続く要素を非表示にします。動的に生成される要素もリアルタイムで非表示にするため、ページ全体の視認性を向上させる目的で設計されています。

---

### 対象サイト
- [求人ボックス](https://xn--pckua2a7gp15o89zb.com/)

---

### インストール方法
1. このリポジトリをクローンまたは ZIP ファイルとしてダウンロードします。
2. Chromeブラウザで `chrome://extensions/` を開きます。
3. **デベロッパーモード** を有効にします（画面右上のスイッチをオン）。
4. **パッケージ化されていない拡張機能を読み込む** をクリックします。
5. このプロジェクトのフォルダを選択します。

---

### 使用方法
1. 拡張機能をインストール後、自動的に有効化されます。
2. 求人ボックスを開くと、IDが `'personal-recommend-'` で始まる要素が非表示になります。
3. ページ内の動的に生成された要素も、自動的に非表示にされます。

---

### ファイル構成
- `manifest.json`  
拡張機能の基本情報や権限設定を定義するファイル。

- `content.js`  
対象要素を非表示にするスクリプト。

- `icon.png`  
拡張機能のアイコン。

---

### 技術詳細
1. **DOM 操作**  
ID が `'personal-recommend-'` で始まる全ての要素を検索し、スタイルを変更します。

2. **リアルタイム監視**  
`MutationObserver` を使用して、動的に追加される要素にも対応します。

---

### 注意事項
- この拡張機能は求人ボックス ([https://xn--pckua2a7gp15o89zb.com/](https://xn--pckua2a7gp15o89zb.com/)) のみで動作します。
- 使用する際は、対象サイトのポリシーを遵守してください。

---

### 開発者
- 名前: Kyosuke Homma  
- GitHub: [https://github.com/kyosukehomma/](https://github.com/kyosukehomma/)

---

### ライセンス
[MIT License](https://opensource.org/licenses/MIT)
