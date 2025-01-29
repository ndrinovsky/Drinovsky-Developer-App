import type { IApplicationString } from '../interfaces/IApplicationString';

export const snippetStrings: { [key: string]: IApplicationString }  = {
  pageTitle: {
    en: 'Snippets',
    ja: 'スニペット'
  },
  descriptionContentP1: {
    en: 'Below are some useful snippets that I have created for various projects. These snippets are meant to be used as a reference for future projects.',
    ja: '以下は、さまざまなプロジェクトで作成した便利なスニペットです。これらのスニペットは、将来のプロジェクトの参考として使用することを目的としています。'
  },
  descriptionContentP2: {
    en: 'If you would like to see more snippets, please visit my GitHub Gist page.',
    ja: 'さらに多くのスニペットをご覧になりたい場合は、GitHub Gist ページをご覧ください。'
  },
  loadingSnippetsError: {
    en: 'There was an error loading the snippets. See the GitHub Gist page for more snippets.',
    ja: 'スニペットの読み込み中にエラーが発生しました。詳細なスニペットについては、GitHub Gist ページをご覧ください。'
  },
  snippetsGistLink: {
    en: 'Visit my GitHub Gists to see snippets.',
    ja: 'スニペットを見るには、GitHub Gists にアクセスしてください。'
  },
  snippetTruncated: {
    en: 'This snippet has been truncated. Please visit the GitHub Gist page to see the full snippet.',
    ja: 'このスニペットは切り捨てられました。完全なスニペットを表示するには、GitHub Gist ページをご覧ください。'
  }
};
