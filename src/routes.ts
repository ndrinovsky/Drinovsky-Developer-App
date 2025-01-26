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
        index: true,
        file: './routes/portfolio.tsx',
      },
      {
        path: '/snippets',
        index: true,
        file: './routes/snippets.tsx',
      }
    ],
  }
] satisfies RouteConfig;