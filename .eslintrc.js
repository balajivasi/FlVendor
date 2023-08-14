module.exports = {
  root: true,
  extends: ['prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // Override conflicting rules from @react-native
    // Example:
    '@react-native/no-inline-styles': 'off', // Disable inline styles
    'react-native/no-inline-styles': 'off', // Also disable for consistency
  },
};
