module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|^h' }],
        '@typescript-eslint/explicit-function-return-type': 0
    }
};
