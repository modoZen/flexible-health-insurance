const lintStagedConfig = {
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'src/**/*.{css,scss,sass}': ['prettier --write'],
};

export default lintStagedConfig;
