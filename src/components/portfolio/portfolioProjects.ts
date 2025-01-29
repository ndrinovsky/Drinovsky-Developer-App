import type { IPortfolioProject } from '../../interfaces/IPortfolioProject';

export const portfolioProjects: IPortfolioProject[] = [
  {
    title: {
      en: 'Accounts Payable Application',
      ja: '支払アプリケーション'
    },
    description: {
      en: `Cloud web application for creating budgets, tracking expenses, and forecasting financial data. 
          Application was built using React/TypeScript front-end following the Material-UI design system.
          Back-end services were built utilizing C# Minimal APIs and Azure SQL Database.
          Hosted and secured on Azure, using EntraID, Virtual Networks, and other Azure offerings.
          Utilizes Azure DevOps for CI/CD pipeline.`,
      ja: `予算の作成、支出の追跡、財務データの予測を行うためのクラウドWebアプリケーション。
          アプリケーションは、Material-UIデザインシステムに従ったReact/TypeScriptフロントエンドを使用して構築されました。
          バックエンドサービスは、C# Minimal APIsとAzure SQLデータベースを利用して構築されました。
          Azureでホストおよびセキュリティを確保し、EntraID、Virtual Networks、その他のAzureオファリングを使用しています。
          CI/CDパイプラインにAzure DevOpsを利用しています。`
    },
    technologies: ['React', 'TypeScript', 'Azure Cloud Services', 'SQL', 'C# Minimal API'],
    githubLink: '',
    liveLink: '',
    imageURLs: []
  },
  {
    title: {
      en: 'Portfolio Website (this site!)',
      ja: 'ポートフォリオウェブサイト（このサイト！）'
    },
    description: {
      en: `Personal portfolio website built using React/TypeScript front-end with Vite & React-Rotuer, following the Tailwind CSS design system, with HeroUI.
          Hosted on Firebase. Utilizes GitHub Actions for CI/CD pipeline.`,
      ja: `Vite&React-Rotuerを使用したReact/TypeScriptフロントエンドを使用して構築された個人用ポートフォリオWebサイト。
          Tailwind CSSデザインシステムに従い、HeroUIを使用しています。
          Firebaseでホストされています。CI/CDパイプラインにGitHub Actionsを利用しています。`
    },
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'HeroUI'],
    githubLink: 'https://github.com/ndrinovsky/Drinovsky-Developer-App',
    imageURLs: []
  }
];