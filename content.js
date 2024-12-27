// 'personal-recommend-' で始まるIDを持つ要素を非表示にする関数
function hidePersonalRecommendTags() {
  // IDが 'personal-recommend-' で始まる全ての要素を取得
  const elements = document.querySelectorAll('[id^="personal-recommend-"]');
  
  elements.forEach((el) => {
    // IDが 'personal-recommend-' のあとに数字が続くかを確認
    if (/^personal-recommend-\d+$/.test(el.id)) {
      // 該当する要素を非表示に設定
      el.style.display = "none";
    }
  });
}

// 初期実行: ページロード時に対象の要素を非表示にする
hidePersonalRecommendTags();

// 動的に追加された要素にも対応するためにDOM変更を監視
const observer = new MutationObserver(() => {
  hidePersonalRecommendTags();
});

// DOMツリーの変更を監視開始
observer.observe(document.body, { childList: true, subtree: true });
