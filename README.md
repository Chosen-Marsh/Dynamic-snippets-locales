# Dynamic Snippets Locales

Translations for the [Dynamic Snippets](https://github.com/Chosen-Marsh/Dynamic-snippets) browser extension.

Every language is a single file. Add one and it shows up in **Settings → General → Language** automatically. No code changes are needed.

## Available languages

| Code | Language | File |
|------|----------|------|
| `en` | English (source of truth) | [`en.js`](./en.js) |
| `ja` | 日本語 | [`ja.js`](./ja.js) |

## Add a language

1. Fork this repo.
2. Copy `en.js` to `<code>.js`, using an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) such as `fr`, `de`, `es` or `pt-BR`.
3. Translate the **values** only. Never change the keys.
4. Open a pull request.

The file name is the locale code. The language name in the picker is generated from it, so you don't have to write it yourself.

```js
export default {
  settings: {
    title: 'Paramètres',   // translate this
    // ...
  }
};
```

## Rules

- **Keep the same keys as `en.js`.** Missing keys fall back to English, but a complete file is preferred.
- **Keep placeholders exactly as written.** `{name}` and `{count}` are replaced at runtime. You may move them within the sentence, but don't rename or translate them.
  ```js
  'Hello {name}'  →  'Bonjour {name}'
  ```
- **Keep variable syntax untouched.** Tokens such as `${name-input}` and `${{choice-dropdown|a,b}}` are part of the snippet format and must not be translated.
- **Plain strings only.** No HTML, no functions, no template literals with expressions.
- **Escape quotes** inside single-quoted strings: `'L\'exemple'`, or use double quotes.
- **Keep the product name.** "Dynamic Snippets" stays as is, unless a localized name is widely used.

## Sections that matter most

Some parts of the extension can't load the full app, so they read their own sections. If these are missing, those parts stay in English even when the rest is translated.

| Section | Used by |
|---------|---------|
| `content` | Slash-command dropdown and variable-fill modal on web pages |
| `background` | Right-click menu titles and insert toasts |

The remaining sections (`sidebar`, `snippet`, `settings`, and so on) cover the popup UI.

## Checking your work

Pull requests are checked automatically by GitHub Actions (`scripts/validate.mjs`). Run the same check locally with `npm run validate`. It fails if a locale has missing or unknown keys, changed `{placeholders}`, changed `${snippet-tokens}`, empty values, HTML, or a bad file name.

You can also compare one file with `en.js` by hand:

```powershell
node -e "const k=(o,p='')=>Object.entries(o).flatMap(([a,b])=>typeof b==='object'?k(b,p+a+'.'):[p+a]);Promise.all([import('./en.js'),import('./fr.js')]).then(([e,l])=>{const a=k(e.default),b=new Set(k(l.default));console.log('missing:',a.filter(x=>!b.has(x)))})"
```

Replace `fr.js` with your file. An empty `missing: []` means you're complete.

To try it in the extension:

1. Place your file in `src/i18n/locales/` of the main repo.
2. Run `npm run build`.
3. Reload the extension in `chrome://extensions`.
4. Pick your language in Settings → General and click **Save**.
5. Check the popup, a slash command with a variable (`${name-input}`), and the right-click menu.

## Use as a submodule

This repo is mounted in the main project at `src/i18n/locales`.

```bash
git clone --recurse-submodules https://github.com/Chosen-Marsh/Dynamic-snippets.git
# or, after a normal clone
git submodule update --init

# pull the latest translations
git submodule update --remote src/i18n/locales
```

Maintainers: after merging a translation here, update the submodule pointer in the main repo and commit it.

## License

Same license as the main project: see [Dynamic Snippets](https://github.com/Chosen-Marsh/Dynamic-snippets).
