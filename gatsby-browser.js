import ReactGA from 'react-ga';
import { config } from 'config';

ReactGA.initialize(config.googleAnalyticsTrackingCode);

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname);
};
