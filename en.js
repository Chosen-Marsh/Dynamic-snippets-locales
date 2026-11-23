export default {
  app: {
    name: 'Dynamic Snippets'
  },
  content: {
    untitledSnippet: 'Untitled Snippet',
    fillVariablesTitle: 'Fill Snippet Variables',
    preview: 'Preview',
    cancel: 'Cancel',
    insert: 'Insert',
    enterValue: 'Enter value',
    datePlaceholder: 'YYYY-MM-DD'
  },
  background: {
    insertSnippetMenu: 'Insert Snippet',
    noSnippets: 'No snippets available',
    untitledSnippet: 'Untitled Snippet',
    insertCopied: 'Could not insert Snippet. Text copied to clipboard.',
    insertFailed: 'Could not insert snippet and clipboard copy failed.'
  },
  common: {
    close: 'Close',
    cancel: 'Cancel',
    save: 'Save',
    insert: 'Insert',
    preview: 'Preview'
  },
  sidebar: {
    title: 'Snippets',
    defaultFolderName: 'New Folder',
    defaultSnippetName: 'Untitled Snippet',
    menu: {
      newSnippet: 'New Snippet',
      newFolder: 'New Folder',
      rename: 'Rename',
      delete: 'Delete',
      deleteSnippet: 'Delete Snippet'
    }
  },
  footer: {
    settings: 'Settings',
    lastSavedAt: 'Last saved at {time}',
    notSavedYet: 'Not saved yet'
  },
  snippet: {
    untitled: 'Untitled Snippet',
    commandTitle: 'Type this anywhere on the web to trigger this snippet',
    commandPlaceholder: 'command',
    closeAria: 'Close snippet',
    closeTitle: 'Back to welcome',
    editorPlaceholder: '// paste or type your snippet here...',
    addVariable: 'Add Variable',
    addGlobalVariable: 'Add Global Variable',
    status: {
      loading: 'Loading...',
      saving: 'Saving...',
      unsaved: 'Unsaved changes'
    }
  },
  varModal: {
    ariaLabel: 'Insert variable',
    title: 'Insert Variable',
    type: 'Type',
    types: {
      dropdown: 'Dropdown with options',
      text: 'Text input',
      date: 'Date input'
    },
    key: 'Key',
    keyPlaceholder: 'example: env',
    options: 'Options (comma separated)',
    optionsPlaceholder: 'dev,staging,prod',
    defaultValue: 'Default value',
    defaultPlaceholder: 'my-default',
    datePlaceholder: 'yyyy-mm-dd'
  },
  globalVarModal: {
    ariaLabel: 'Insert global variable',
    title: 'Insert Global Variable',
    help: 'Pick a global variable from Settings. Missing keys paste as',
    helpAfter: 'at insert time.',
    label: 'Global variable',
    empty: 'No global variables yet. Add them in Settings → Global Variables.'
  },
  settings: {
    title: 'Settings',
    sections: 'Settings sections',
    tabs: {
      general: 'General',
      data: 'Data',
      globals: 'Global Variables'
    },
    general: {
      theme: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      language: 'Language',
      debounce: 'Auto-save debounce (ms)',
      analytics: 'Usage analytics',
      analyticsHelp: 'Tracks action names locally only — never snippet content or personal data.'
    },
    data: {
      title: 'Data tools',
      help: 'Import or export snippets, folders, global variables, and settings as a versioned pack.',
      import: 'Import',
      export: 'Export'
    },
    globals: {
      helpBefore: 'Define reusable values for',
      helpAfter: 'tokens. Missing keys paste as',
      key: 'Key',
      value: 'Value',
      keyPlaceholder: 'key',
      valuePlaceholder: 'value',
      remove: 'Remove variable',
      empty: 'No global variables yet.',
      add: 'Add variable'
    },
    import: {
      title: 'Import preview',
      schema: 'Schema {version}',
      unknown: 'unknown',
      totalSnippets: 'Total snippets:',
      folders: 'Folders:',
      globalVariables: 'Global variables:',
      settingsFields: 'Settings fields:',
      mergeChecks: 'Merge checks',
      idConflicts: 'ID conflicts: {count}',
      variableConflicts: 'Global variable key conflicts: {count}',
      settingsChanges: 'Settings changes: {count}',
      warnings: 'Warnings',
      blocked: 'Import blocked',
      overwrite: 'Overwrite',
      overwriting: 'Overwriting...',
      merge: 'Merge',
      merging: 'Merging...',
      previewFailed: 'Import preview failed. Please verify the file format.',
      failed: 'Import failed. Please verify the file format.',
      completeMerged: 'Import complete: merged with your existing data.',
      completeOverwritten: 'Import complete: existing data overwritten with imported pack.'
    }
  },
  pack: {
    missingIds: 'Some imported items were missing IDs and will be regenerated.',
    missingNames: 'Some imported items were missing names and were normalized.',
    duplicateIds: '{count} duplicate IDs detected in the import file.',
    empty: 'Import file does not contain snippets, folders, or global variables.',
    invalidJson: 'Invalid JSON file.',
    notObject: 'Import file must be a JSON object.',
    missingSchema: 'Import file is missing schemaVersion.',
    unsupportedSchema: 'Unsupported schema version: {version}',
    missingData: 'Import file is missing data payload.'
  },
  analytics: {
    consentEyebrowOpt: 'Optional analytics',
    consentTitle: 'Help us improve Dynamic Snippets',
    consentDescription: 'We collect anonymous usage events only, and never capture your snippets or personal data.',
    detailsLabel: 'Data collection details',
    collectTitle: 'What we collect',
    collectUsage: 'Feature and button usage',
    collectTimestamps: 'Local timestamps',
    neverTitle: 'What we never collect',
    neverSnippets: 'Snippet content',
    neverVariables: 'Variable values',
    neverPersonal: 'Personal data',
    note: 'Your preference is stored locally in this extension.',
    decline: 'Not now',
    accept: 'Allow anonymous analytics'
  },
  rate: {
    eyebrow: 'Quick feedback',
    title: 'Love Dynamic Snippets?',
    text: 'You’ve been using it for a day. If it has saved you time, a quick review would mean a lot.',
    starsLabel: 'Five star rating',
    dismiss: 'No thanks',
    later: 'Maybe later',
    accept: 'Rate 5 stars'
  },
  welcome: {
    ariaLabel: 'Welcome',
    heading: 'Write it once. Paste it anywhere.',
    lead: 'Save text you type often, turn the parts that change into variables, and insert it on any website.',
    newSnippet: 'New snippet',
    tour: 'Take the tour',
    insertTitle: 'Two ways to insert',
    contextMenu: {
      title: 'Right-click menu',
      text: 'Right-click any text field and choose {menu}.'
    },
    slash: {
      title: 'Slash command',
      text: 'Give a snippet a command, then type /command in any text field.'
    },
    variablesTitle: 'Variables',
    variablesHint: 'Right-click in the editor to add one',
    dropdown: {
      title: 'Dropdown',
      text: 'Pick from a list'
    },
    text: {
      title: 'Text',
      text: 'Type a value'
    },
    date: {
      title: 'Date',
      text: 'Pasted in your local format'
    },
    global: {
      title: 'Global',
      text: 'Set once in Settings'
    },
    viewHistory: 'Version history'
  },
  onboarding: {
    ariaLabel: 'Getting started',
    skip: 'Skip tour',
    back: 'Back',
    next: 'Next',
    start: 'Show me around',
    stepOf: 'Step {current} of {total}',
    goToStep: 'Go to step {step}',
    welcome: {
      title: 'Write it once. Paste it anywhere.',
      lead: 'Dynamic Snippets saves the text you type again and again, like replies, templates and checklists, and inserts it on any website with the blanks already filled in.',
      p1: 'Everything stays in this browser. No account, no cloud sync.',
      p2: 'This quick tour takes about a minute.'
    },
    organize: {
      title: 'Your snippet library',
      lead: 'Every snippet lives in the sidebar on the left. Group them into folders however you like.',
      p1: 'Right-click the sidebar to create a snippet or a folder.',
      p2: 'Right-click any item to rename or delete it.',
      p3: 'Drag items to reorder them or move them into folders.',
      p4: 'Changes save automatically as you type.',
      saved: 'Saved'
    },
    variables: {
      title: 'Variables fill in the blanks',
      lead: 'Put a variable wherever the text changes. Each time you insert the snippet, a short form asks for the values and shows a preview.',
      p1: 'Dropdown: choose from a list of options.',
      p2: 'Text: type anything, with an optional default.',
      p3: 'Date: pick from a calendar. It is inserted in your local format.',
      p4: 'Right-click in the editor and choose {addVariable}. No syntax to learn.'
    },
    globals: {
      title: 'Global variables for things that never change',
      lead: 'Save values like your name, team or signature once and reuse them in any snippet. They fill in automatically, with no form.',
      p1: 'Add them in Settings → {globalsTab}.',
      p2: 'Use one with ${key-global}, or right-click in the editor and choose {addGlobalVariable}.',
      p3: 'A key with no value pastes as "undefined", so it is easy to spot.'
    },
    contextMenu: {
      title: 'Insert from the right-click menu',
      lead: 'On any website, right-click a text field and choose {menu}. Your folders appear as submenus.',
      p1: 'Snippets with variables open the form first, so you can check the result.',
      p2: 'If the page will not accept the text, it is copied to your clipboard instead.'
    },
    slash: {
      title: 'Or type a slash command',
      lead: 'Give a snippet a short command in the box next to its title. Then type / and the command in any text field.',
      p1: 'Matching snippets appear as you type.',
      p2: 'Use ↑ and ↓ to choose, Enter to insert and Esc to close.',
      p3: 'Commands can use letters, numbers, hyphens and underscores.'
    },
    personalize: {
      title: 'Make it yours',
      lead: 'Pick a theme now. Everything else can be changed later in Settings.',
      p1: 'Open Settings with the gear at the bottom of the sidebar.',
      p2: 'Change the language, theme and auto-save delay.',
      p3: 'Use {importLabel} and {exportLabel} to back up your library or move it to another browser.'
    },
    ready: {
      title: "You're all set",
      lead: "We've added a few example snippets to the sidebar. Open one to see variables in action, or start your own.",
      p1: 'You can replay this tour from the welcome page at any time.',
      create: 'Create my first snippet',
      explore: 'Explore the examples'
    }
  },
  changelog: {
    versionHistory: 'Version history',
    whatsNew: 'What\'s New',
    releaseNotes: 'Release Notes',
    latestUpdates: 'Latest updates',
    version: 'Version {version}',
    latest: 'Latest',
    releaseCount: '{count} releases',
    comingSoon: 'Coming soon',
    onlyOnce: 'You will only see this once per version.',
    closeHistory: 'Close history',
    gotIt: 'Got it',
    types: {
      added: 'added',
      changed: 'changed',
      fixed: 'fixed',
      removed: 'removed'
    }
  }
};
