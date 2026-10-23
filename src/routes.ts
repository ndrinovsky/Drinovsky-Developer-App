import type { RouteConfig } from '@react-router/dev/routes';

export default [
  {
    path: '/',
    file: './routes/layout.tsx',
    children: [
      {
        index: true,
        file: './routes/home.tsx',
      },
      {
        path: 'portfolio',
        file: './routes/portfolio.tsx',
      },
      {
        path: 'snippets',
        file: './routes/snippets.tsx',
      }
    ],
  },
  {
    path: '/csumb',
    file: './routes/csumbLayout.tsx',
    children: [
      {
        index: true,
        file: './routes/csumbHome.tsx',
      }
    ],
  }
] satisfies RouteConfig;