export const GA_TRACKING_ID = "UA-130184788-3";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  // TODO: Typescript code
  //   window.gtag("config", GA_TRACKING_ID, {
  //     page_path: url,
  //   });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  // TODO: Typescript code
  //   window.gtag("event", action, {
  //     event_category: category,
  //     event_label: label,
  //     value: value,
  //   });
};
