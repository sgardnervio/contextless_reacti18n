# Getting Started #
1) Install yarn `npx install yarn@2` as this repo makes use of `yarn workspaces`
2) run `yarn set version berry`
3) run `yarn config set nodeLinker node-modules`
4) run `yarn install`
5) run `yarn components:build`
6) run `yarn start`
7) in the browser that opened see that the `MyComponent` app is using the translation key not the value.
8) update `package.json` and change the `react-i18next` version to `12.0.0` and run steps 5 & 6. Notice now the text is showing the value.



# Problem Statement #
Since the release of `12.0.1` of `react-i18n` imported components from external packages no longer can use the `i18n` instance defined in the application doing the importing.  If you change the version back to `12.0.0` it works flawlessly.  I believe the removal of the `React.useContext(I18nContext)` in `react-i18next.js` line #744 is the culprit.
