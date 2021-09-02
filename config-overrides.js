const {
  override,
  disableEsLint,
  fixBabelImports,
  addLessLoader,
  overrideDevServer,
} = require("customize-cra");

const devServerConfig = (config) => {
  return {
    ...config,
    historyApiFallback: true,
  };
};

module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#019875",
          "@font-size-base": "14px",
          "@font-family": "Lato",
          "@border-radius-base": "4px",
          //Height Override
          // "@input-height-lg": "40px",
          // "@btn-height-base": "40px",
          // // Breadcrumb
          // // ---
          // "@breadcrumb-base-color": "#fff",
          // "@breadcrumb-last-item-color": "#fff",
          // "@breadcrumb-font-size": "#fff",
          // "@breadcrumb-icon-font-size": "#fff",
          // "@breadcrumb-link-color": "#ecf0f5",
          // "@breadcrumb-link-color-hover": "#ecf0f5",
          // "@breadcrumb-separator-color": "#ecf0f5",

          //Typography
          // "@typography-title-margin-top": "0",
          // "@typography-title-margin-bottom": "0",
          //Table
          // "@table-row-hover-bg": "#f5f5f5",
          //Select
          // "@item-active-bg": "#f5f5f5",
          // "@item-hover-bg": "#f5f5f5",
          // "@select-item-active-bg": "#f5f5f5",
          // z-index list, order by `z-index`
          "@zindex-table-fixed": "auto",
          "@zindex-affix": "10",
          "@zindex-back-top": "10",
          "@zindex-badge": "10",
          "@zindex-picker-panel": "10",
          "@zindex-popup-close": "10",
          "@zindex-modal": "1000",
          "@zindex-modal-mask": "1000",
          "@zindex-message": "1010",
          "@zindex-notification": "1010",
          "@zindex-popover": "9999999",
          "@zindex-dropdown": "1050",
          "@zindex-picker": "1050",
          "@zindex-tooltip": "9999999",
          //Table
          "@table-padding-vertical": "16px",
          // Tabs Ant
          "@tabs-horizontal-margin": "0 25px 0 0",
          "@tabs-vertical-margin": "0 0 5px 0",
          // Statistic
          "@statistic-title-font-size": "15px",
          "@statistic-content-font-size": "15px",
          "@statistic-unit-font-size": "15px",
          // Badge
          // ---
          "@badge-height": "20px",
          "@badge-dot-size": "6px",
          "@badge-font-weight": "normal",
          "@badge-status-size": "6px",
        },
      },
    }),
    disableEsLint()
  ),
  devServer: overrideDevServer(devServerConfig),
};
