import ReactGA from 'react-ga';
/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies, import/extensions */
import { config } from 'config';
/* eslint-enable import/no-unresolved, import/no-extraneous-dependencies, import/extensions */

ReactGA.initialize(config.googleAnalyticsTrackingCode);

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};
