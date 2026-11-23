export default {
  app: {
    name: 'Dynamic Snippets'
  },
  content: {
    untitledSnippet: '無題のスニペット',
    fillVariablesTitle: 'スニペット変数を入力',
    preview: 'プレビュー',
    cancel: 'キャンセル',
    insert: '挿入',
    enterValue: '値を入力',
    datePlaceholder: 'YYYY-MM-DD'
  },
  background: {
    insertSnippetMenu: 'スニペットを挿入',
    noSnippets: '利用可能なスニペットはありません',
    untitledSnippet: '無題のスニペット',
    insertCopied: 'スニペットを挿入できませんでした。テキストをクリップボードにコピーしました。',
    insertFailed: 'スニペットを挿入できず、クリップボードへのコピーにも失敗しました。'
  },
  common: {
    close: '閉じる',
    cancel: 'キャンセル',
    save: '保存',
    insert: '挿入',
    preview: 'プレビュー'
  },
  sidebar: {
    title: 'スニペット',
    defaultFolderName: '新しいフォルダ',
    defaultSnippetName: '無題のスニペット',
    menu: {
      newSnippet: '新しいスニペット',
      newFolder: '新しいフォルダ',
      rename: '名前を変更',
      delete: '削除',
      deleteSnippet: 'スニペットを削除'
    }
  },
  footer: {
    settings: '設定',
    lastSavedAt: '最終保存: {time}',
    notSavedYet: '未保存'
  },
  snippet: {
    untitled: '無題のスニペット',
    commandTitle: 'ウェブ上のどこでもこれを入力すると、このスニペットが呼び出されます',
    commandPlaceholder: 'コマンド',
    closeAria: 'スニペットを閉じる',
    closeTitle: 'ようこそ画面に戻る',
    editorPlaceholder: '// ここにスニペットを貼り付けるか入力してください...',
    addVariable: '変数を追加',
    addGlobalVariable: 'グローバル変数を追加',
    status: {
      loading: '読み込み中...',
      saving: '保存中...',
      unsaved: '未保存の変更'
    }
  },
  varModal: {
    ariaLabel: '変数を挿入',
    title: '変数を挿入',
    type: '種類',
    types: {
      dropdown: '選択肢付きドロップダウン',
      text: 'テキスト入力',
      date: '日付入力'
    },
    key: 'キー',
    keyPlaceholder: '例: env',
    options: '選択肢（カンマ区切り）',
    optionsPlaceholder: 'dev,staging,prod',
    defaultValue: '既定値',
    defaultPlaceholder: 'my-default',
    datePlaceholder: 'yyyy-mm-dd'
  },
  globalVarModal: {
    ariaLabel: 'グローバル変数を挿入',
    title: 'グローバル変数を挿入',
    help: '設定からグローバル変数を選択します。存在しないキーは挿入時に',
    helpAfter: 'として貼り付けられます。',
    label: 'グローバル変数',
    empty: 'グローバル変数はまだありません。設定 → グローバル変数 で追加してください。'
  },
  settings: {
    title: '設定',
    sections: '設定セクション',
    tabs: {
      general: '一般',
      data: 'データ',
      globals: 'グローバル変数'
    },
    general: {
      theme: 'テーマ',
      themeDark: 'ダーク',
      themeLight: 'ライト',
      language: '言語',
      debounce: '自動保存の遅延 (ms)',
      analytics: '使用状況の分析',
      analyticsHelp: '操作名のみをローカルで記録します。スニペットの内容や個人データは収集しません。'
    },
    data: {
      title: 'データツール',
      help: 'スニペット、フォルダ、グローバル変数、設定をバージョン付きパックとしてインポート／エクスポートします。',
      import: 'インポート',
      export: 'エクスポート'
    },
    globals: {
      helpBefore: '再利用できる値を定義します:',
      helpAfter: 'トークン用。存在しないキーは次のように貼り付けられます:',
      key: 'キー',
      value: '値',
      keyPlaceholder: 'キー',
      valuePlaceholder: '値',
      remove: '変数を削除',
      empty: 'グローバル変数はまだありません。',
      add: '変数を追加'
    },
    import: {
      title: 'インポートのプレビュー',
      schema: 'スキーマ {version}',
      unknown: '不明',
      totalSnippets: 'スニペット合計:',
      folders: 'フォルダ:',
      globalVariables: 'グローバル変数:',
      settingsFields: '設定項目:',
      mergeChecks: 'マージの確認',
      idConflicts: 'IDの競合: {count}',
      variableConflicts: 'グローバル変数キーの競合: {count}',
      settingsChanges: '設定の変更: {count}',
      warnings: '警告',
      blocked: 'インポートがブロックされました',
      overwrite: '上書き',
      overwriting: '上書き中...',
      merge: 'マージ',
      merging: 'マージ中...',
      previewFailed: 'インポートのプレビューに失敗しました。ファイル形式を確認してください。',
      failed: 'インポートに失敗しました。ファイル形式を確認してください。',
      completeMerged: 'インポート完了: 既存のデータとマージしました。',
      completeOverwritten: 'インポート完了: 既存のデータをインポートしたパックで上書きしました。'
    }
  },
  pack: {
    missingIds: 'IDのないインポート項目があったため、再生成されます。',
    missingNames: '名前のないインポート項目があったため、補正されました。',
    duplicateIds: 'インポートファイルで重複したIDが {count} 件見つかりました。',
    empty: 'インポートファイルにスニペット、フォルダ、グローバル変数が含まれていません。',
    invalidJson: '無効なJSONファイルです。',
    notObject: 'インポートファイルはJSONオブジェクトである必要があります。',
    missingSchema: 'インポートファイルに schemaVersion がありません。',
    unsupportedSchema: '未対応のスキーマバージョンです: {version}',
    missingData: 'インポートファイルにデータがありません。'
  },
  analytics: {
    consentEyebrowOpt: '任意の分析',
    consentTitle: 'Dynamic Snippets の改善にご協力ください',
    consentDescription: '匿名の使用状況イベントのみを収集し、スニペットや個人データは一切取得しません。',
    detailsLabel: 'データ収集の詳細',
    collectTitle: '収集する情報',
    collectUsage: '機能とボタンの使用状況',
    collectTimestamps: 'ローカルのタイムスタンプ',
    neverTitle: '収集しない情報',
    neverSnippets: 'スニペットの内容',
    neverVariables: '変数の値',
    neverPersonal: '個人データ',
    note: 'この設定はこの拡張機能内にローカル保存されます。',
    decline: '今はしない',
    accept: '匿名の分析を許可'
  },
  rate: {
    eyebrow: 'ご意見をお聞かせください',
    title: 'Dynamic Snippets はお気に入りですか？',
    text: '使い始めて1日が経ちました。お役に立てたなら、ぜひレビューをお願いします。',
    starsLabel: '5つ星評価',
    dismiss: '結構です',
    later: 'あとで',
    accept: '星5つで評価'
  },
  welcome: {
    ariaLabel: 'ようこそ',
    heading: '一度書けば、どこでも貼り付け',
    lead: 'よく入力するテキストを保存し、変わる部分を変数にして、どのウェブサイトにも挿入できます。',
    newSnippet: '新しいスニペット',
    tour: 'ツアーを見る',
    insertTitle: '2つの挿入方法',
    contextMenu: {
      title: '右クリックメニュー',
      text: 'テキスト欄で右クリックし、「{menu}」を選びます。'
    },
    slash: {
      title: 'スラッシュコマンド',
      text: 'スニペットにコマンドを設定し、テキスト欄で /コマンド と入力します。'
    },
    variablesTitle: '変数',
    variablesHint: 'エディタで右クリックして追加',
    dropdown: {
      title: 'ドロップダウン',
      text: 'リストから選択'
    },
    text: {
      title: 'テキスト',
      text: '値を入力'
    },
    date: {
      title: '日付',
      text: 'ローカル形式で貼り付け'
    },
    global: {
      title: 'グローバル',
      text: '設定で一度だけ登録'
    },
    viewHistory: 'バージョン履歴'
  },
  onboarding: {
    ariaLabel: 'はじめに',
    skip: 'ツアーをスキップ',
    back: '戻る',
    next: '次へ',
    start: '使い方を見る',
    stepOf: 'ステップ {current} / {total}',
    goToStep: 'ステップ {step} へ移動',
    welcome: {
      title: '一度書けば、どこでも貼り付け',
      lead: 'Dynamic Snippets は、返信文・テンプレート・チェックリストなど何度も入力するテキストを保存し、空欄を埋めた状態でどのウェブサイトにも挿入できます。',
      p1: 'データはすべてこのブラウザ内に保存されます。アカウントもクラウド同期も不要です。',
      p2: 'このツアーは約1分で終わります。'
    },
    organize: {
      title: 'スニペットライブラリ',
      lead: 'スニペットはすべて左側のサイドバーにあります。フォルダで自由に整理できます。',
      p1: 'サイドバーを右クリックして、スニペットやフォルダを作成します。',
      p2: '項目を右クリックすると、名前の変更や削除ができます。',
      p3: 'ドラッグして並べ替えたり、フォルダへ移動したりできます。',
      p4: '変更は入力と同時に自動保存されます。',
      saved: '保存済み'
    },
    variables: {
      title: '変数で空欄を埋める',
      lead: 'テキストの変わる部分に変数を置きます。挿入するたびに小さなフォームが開き、値の入力とプレビューができます。',
      p1: 'ドロップダウン: 選択肢から選びます。',
      p2: 'テキスト: 自由に入力します。既定値も設定できます。',
      p3: '日付: カレンダーから選び、ローカル形式で挿入されます。',
      p4: 'エディタで右クリックし「{addVariable}」を選ぶだけ。構文を覚える必要はありません。'
    },
    globals: {
      title: '変わらない値はグローバル変数に',
      lead: '名前・チーム・署名などを一度保存すれば、どのスニペットでも使えます。フォームなしで自動的に入力されます。',
      p1: '設定 → {globalsTab} で追加します。',
      p2: '${key-global} と書くか、エディタで右クリックして「{addGlobalVariable}」を選びます。',
      p3: '値のないキーは "undefined" と貼り付けられるので、すぐに気付けます。'
    },
    contextMenu: {
      title: '右クリックメニューから挿入',
      lead: 'どのウェブサイトでも、テキスト欄を右クリックして「{menu}」を選びます。フォルダはサブメニューとして表示されます。',
      p1: '変数を含むスニペットは、先にフォームが開くので結果を確認できます。',
      p2: 'ページがテキストを受け付けない場合は、代わりにクリップボードへコピーされます。'
    },
    slash: {
      title: 'スラッシュコマンドでも挿入',
      lead: 'スニペットのタイトル横の欄に短いコマンドを設定し、テキスト欄で / とコマンドを入力します。',
      p1: '入力に合わせて一致するスニペットが表示されます。',
      p2: '↑ と ↓ で選び、Enter で挿入、Esc で閉じます。',
      p3: 'コマンドには英数字、ハイフン、アンダースコアが使えます。'
    },
    personalize: {
      title: '自分好みに',
      lead: 'まずはテーマを選びましょう。その他の項目は後から設定で変更できます。',
      p1: 'サイドバー下部の歯車から設定を開きます。',
      p2: '言語・テーマ・自動保存の間隔を変更できます。',
      p3: '{importLabel} と {exportLabel} で、ライブラリのバックアップや別のブラウザへの移行ができます。'
    },
    ready: {
      title: '準備完了です',
      lead: 'サイドバーにいくつかのサンプルスニペットを追加しました。開いて変数の動きを確かめるか、自分のスニペットを作りましょう。',
      p1: 'このツアーはウェルカムページからいつでも再表示できます。',
      create: '最初のスニペットを作成',
      explore: 'サンプルを見る'
    }
  },
  changelog: {
    versionHistory: 'バージョン履歴',
    whatsNew: '新機能',
    releaseNotes: 'リリースノート',
    latestUpdates: '最新のアップデート',
    version: 'バージョン {version}',
    latest: '最新',
    releaseCount: '{count} 件のリリース',
    comingSoon: '近日公開',
    onlyOnce: 'この表示はバージョンごとに1回のみです。',
    closeHistory: '履歴を閉じる',
    gotIt: '了解',
    types: {
      added: '追加',
      changed: '変更',
      fixed: '修正',
      removed: '削除'
    }
  }
};
