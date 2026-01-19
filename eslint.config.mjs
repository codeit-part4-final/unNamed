import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Prettier와 충돌하는 ESLint 규칙 비활성화
  prettier,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // 포맷은 Prettier가 담당
      'prettier/prettier': 'warn',

      // 팀 기준 규칙
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'prefer-const': 'error',

      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'axios',
              message: 'axios 직접 import 금지. axiosInstance를 사용하세요.',
            },
          ],
        },
      ],
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
