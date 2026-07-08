import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '124'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '494'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '25d'),
            routes: [
              {
                path: '/docs/addons/',
                component: ComponentCreator('/docs/addons/', '05e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/ecab',
                component: ComponentCreator('/docs/addons/ecab', '1fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/ecab/distance-tier-pricing',
                component: ComponentCreator('/docs/addons/ecab/distance-tier-pricing', '5c1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/ecab/peak-hour-pricing',
                component: ComponentCreator('/docs/addons/ecab/peak-hour-pricing', '8c1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpbusticketly',
                component: ComponentCreator('/docs/addons/wpbusticketly', 'fd5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpbusticketly/qr-code',
                component: ComponentCreator('/docs/addons/wpbusticketly/qr-code', '0d8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently',
                component: ComponentCreator('/docs/addons/wpevently', '3b1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/book-events-from-dashboard',
                component: ComponentCreator('/docs/addons/wpevently/book-events-from-dashboard', '02c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/category-based-ticket-type',
                component: ComponentCreator('/docs/addons/wpevently/category-based-ticket-type', 'ad4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/email-reminder',
                component: ComponentCreator('/docs/addons/wpevently/email-reminder', '6ab'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/event-duplicator',
                component: ComponentCreator('/docs/addons/wpevently/event-duplicator', 'fae'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/event-max-min-quantity-limiting',
                component: ComponentCreator('/docs/addons/wpevently/event-max-min-quantity-limiting', '562'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/event-seat-plan',
                component: ComponentCreator('/docs/addons/wpevently/event-seat-plan', '533'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/group-ticket-qty',
                component: ComponentCreator('/docs/addons/wpevently/group-ticket-qty', 'e85'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/marketplace-frontend-submission',
                component: ComponentCreator('/docs/addons/wpevently/marketplace-frontend-submission', 'c3c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/membership-price',
                component: ComponentCreator('/docs/addons/wpevently/membership-price', '4e8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/min-max-quantity',
                component: ComponentCreator('/docs/addons/wpevently/min-max-quantity', '904'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/review-and-rating',
                component: ComponentCreator('/docs/addons/wpevently/review-and-rating', '6b0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-calendar',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-calendar', 'aab'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-coupon-code',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-coupon-code', '842'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-qr-code',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-qr-code', '707'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-waitlist',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-waitlist', '822'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently',
                component: ComponentCreator('/docs/addons/wprently', 'dd9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/admin-backend-order',
                component: ComponentCreator('/docs/addons/wprently/admin-backend-order', '53c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/min-max-booking-limit',
                component: ComponentCreator('/docs/addons/wprently/min-max-booking-limit', '166'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/multi-day-discount-pricing',
                component: ComponentCreator('/docs/addons/wprently/multi-day-discount-pricing', '0f9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/pricing-discount-over-x-days',
                component: ComponentCreator('/docs/addons/wprently/pricing-discount-over-x-days', '1f4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/seasonal-pricing-management',
                component: ComponentCreator('/docs/addons/wprently/seasonal-pricing-management', 'c04'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly',
                component: ComponentCreator('/docs/addons/wptravelly', '8b3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/backend-order',
                component: ComponentCreator('/docs/addons/wptravelly/backend-order', '2ce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/buy-x-get-y-free',
                component: ComponentCreator('/docs/addons/wptravelly/buy-x-get-y-free', 'e5f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/early-bird-pricing',
                component: ComponentCreator('/docs/addons/wptravelly/early-bird-pricing', '478'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/group-bulk-pricing',
                component: ComponentCreator('/docs/addons/wptravelly/group-bulk-pricing', '137'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/group-ticket-quantity',
                component: ComponentCreator('/docs/addons/wptravelly/group-ticket-quantity', '902'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/max-min-booking',
                component: ComponentCreator('/docs/addons/wptravelly/max-min-booking', '498'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/qr-code',
                component: ComponentCreator('/docs/addons/wptravelly/qr-code', '268'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/seasonal-pricing',
                component: ComponentCreator('/docs/addons/wptravelly/seasonal-pricing', '3d5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/seat-plan',
                component: ComponentCreator('/docs/addons/wptravelly/seat-plan', '550'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/addons',
                component: ComponentCreator('/docs/category/addons', '23c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/addons-1',
                component: ComponentCreator('/docs/category/addons-1', '22e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/addons-2',
                component: ComponentCreator('/docs/category/addons-2', 'e6f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/addons-3',
                component: ComponentCreator('/docs/category/addons-3', 'd45'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/admin-backend-order',
                component: ComponentCreator('/docs/category/admin-backend-order', '573'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/advanced-discount-coupon-and-store-credit',
                component: ComponentCreator('/docs/category/advanced-discount-coupon-and-store-credit', '590'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/car-rental',
                component: ComponentCreator('/docs/category/car-rental', '56f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/developer',
                component: ComponentCreator('/docs/category/developer', '920'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/ecab',
                component: ComponentCreator('/docs/category/ecab', '718'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', 'd48'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/min-and-max-booking-limit',
                component: ComponentCreator('/docs/category/min-and-max-booking-limit', '653'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/multi-day-discount-pricing',
                component: ComponentCreator('/docs/category/multi-day-discount-pricing', '044'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/plugins',
                component: ComponentCreator('/docs/category/plugins', '586'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/pricing-discount-over-x-days',
                component: ComponentCreator('/docs/category/pricing-discount-over-x-days', '7a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/seasonal-pricing-management',
                component: ComponentCreator('/docs/category/seasonal-pricing-management', '0d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/videos',
                component: ComponentCreator('/docs/category/videos', 'c72'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wpbookingly',
                component: ComponentCreator('/docs/category/wpbookingly', '114'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wpbusticketly',
                component: ComponentCreator('/docs/category/wpbusticketly', '5a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wpdeposity',
                component: ComponentCreator('/docs/category/wpdeposity', '514'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wpevently',
                component: ComponentCreator('/docs/category/wpevently', 'f12'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wprently',
                component: ComponentCreator('/docs/category/wprently', '2e6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wptravelly',
                component: ComponentCreator('/docs/category/wptravelly', '1a8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer/customization',
                component: ComponentCreator('/docs/developer/customization', '01f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer/filters',
                component: ComponentCreator('/docs/developer/filters', '94e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer/hooks',
                component: ComponentCreator('/docs/developer/hooks', '543'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/developer/rest-api',
                component: ComponentCreator('/docs/developer/rest-api', '491'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/elementor-integration',
                component: ComponentCreator('/docs/getting-started/elementor-integration', '09d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/email-configuration',
                component: ComponentCreator('/docs/getting-started/email-configuration', '254'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', 'c16'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/license-activation',
                component: ComponentCreator('/docs/getting-started/license-activation', '2c8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/troubleshooting',
                component: ComponentCreator('/docs/getting-started/troubleshooting', '1f6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/woocommerce-setup',
                component: ComponentCreator('/docs/getting-started/woocommerce-setup', '0fd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/changelog',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/changelog', 'aaa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/faq',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/faq', '257'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/features',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/features', 'b36'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/overview',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/overview', 'fa3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/settings',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/settings', '159'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/shortcodes',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/shortcodes', '2c4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/changelog',
                component: ComponentCreator('/docs/plugins/car-rental/changelog', '90a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/faq',
                component: ComponentCreator('/docs/plugins/car-rental/faq', 'b71'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/features',
                component: ComponentCreator('/docs/plugins/car-rental/features', '1ee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/installation-setup',
                component: ComponentCreator('/docs/plugins/car-rental/installation-setup', 'a98'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/overview',
                component: ComponentCreator('/docs/plugins/car-rental/overview', '59f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/pricing-availability',
                component: ComponentCreator('/docs/plugins/car-rental/pricing-availability', 'd4a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/settings',
                component: ComponentCreator('/docs/plugins/car-rental/settings', '4a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/shortcodes',
                component: ComponentCreator('/docs/plugins/car-rental/shortcodes', '2a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/vehicle-management',
                component: ComponentCreator('/docs/plugins/car-rental/vehicle-management', '771'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/addons/distance-tier-pricing/overview',
                component: ComponentCreator('/docs/plugins/ecab/addons/distance-tier-pricing/overview', 'f16'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/addons/peak-hour-pricing/overview',
                component: ComponentCreator('/docs/plugins/ecab/addons/peak-hour-pricing/overview', 'b63'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/changelog',
                component: ComponentCreator('/docs/plugins/ecab/changelog', '4b2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/faq',
                component: ComponentCreator('/docs/plugins/ecab/faq', 'bce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/features',
                component: ComponentCreator('/docs/plugins/ecab/features', 'd54'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/installation-setup',
                component: ComponentCreator('/docs/plugins/ecab/installation-setup', '67d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/overview',
                component: ComponentCreator('/docs/plugins/ecab/overview', 'fce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/settings',
                component: ComponentCreator('/docs/plugins/ecab/settings', '659'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/shortcodes',
                component: ComponentCreator('/docs/plugins/ecab/shortcodes', 'a4f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/changelog',
                component: ComponentCreator('/docs/plugins/wpbookingly/changelog', '8c6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/faq',
                component: ComponentCreator('/docs/plugins/wpbookingly/faq', '998'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/features',
                component: ComponentCreator('/docs/plugins/wpbookingly/features', '2a5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/installation-setup',
                component: ComponentCreator('/docs/plugins/wpbookingly/installation-setup', '344'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/overview',
                component: ComponentCreator('/docs/plugins/wpbookingly/overview', '39f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/payment-integration',
                component: ComponentCreator('/docs/plugins/wpbookingly/payment-integration', '050'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/service-management',
                component: ComponentCreator('/docs/plugins/wpbookingly/service-management', '0e9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/settings',
                component: ComponentCreator('/docs/plugins/wpbookingly/settings', 'bb0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/shortcodes',
                component: ComponentCreator('/docs/plugins/wpbookingly/shortcodes', '61c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/staff-scheduling',
                component: ComponentCreator('/docs/plugins/wpbookingly/staff-scheduling', '3ee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/addons/woocommerce-bus-qr-code/overview',
                component: ComponentCreator('/docs/plugins/wpbusticketly/addons/woocommerce-bus-qr-code/overview', 'b07'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/available-addons',
                component: ComponentCreator('/docs/plugins/wpbusticketly/available-addons', '165'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/changelog',
                component: ComponentCreator('/docs/plugins/wpbusticketly/changelog', '0f0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/faq',
                component: ComponentCreator('/docs/plugins/wpbusticketly/faq', 'fda'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/features',
                component: ComponentCreator('/docs/plugins/wpbusticketly/features', '2d7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/installation-setup',
                component: ComponentCreator('/docs/plugins/wpbusticketly/installation-setup', '58a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/overview',
                component: ComponentCreator('/docs/plugins/wpbusticketly/overview', '540'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/rest-api',
                component: ComponentCreator('/docs/plugins/wpbusticketly/rest-api', '2c4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/settings',
                component: ComponentCreator('/docs/plugins/wpbusticketly/settings', 'ae2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/shortcodes',
                component: ComponentCreator('/docs/plugins/wpbusticketly/shortcodes', 'd6c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/changelog',
                component: ComponentCreator('/docs/plugins/wpdeposity/changelog', '3e7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/faq',
                component: ComponentCreator('/docs/plugins/wpdeposity/faq', '99d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/features',
                component: ComponentCreator('/docs/plugins/wpdeposity/features', '03c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/overview',
                component: ComponentCreator('/docs/plugins/wpdeposity/overview', '6f1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/settings',
                component: ComponentCreator('/docs/plugins/wpdeposity/settings', '5f5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/shortcodes',
                component: ComponentCreator('/docs/plugins/wpdeposity/shortcodes', '8f4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/changelog',
                component: ComponentCreator('/docs/plugins/wpevently/changelog', '33f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/developer-hooks',
                component: ComponentCreator('/docs/plugins/wpevently/developer-hooks', '31a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/elementor-integration',
                component: ComponentCreator('/docs/plugins/wpevently/elementor-integration', '4d7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/faq',
                component: ComponentCreator('/docs/plugins/wpevently/faq', '03b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/features',
                component: ComponentCreator('/docs/plugins/wpevently/features', '8c6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/installation-setup',
                component: ComponentCreator('/docs/plugins/wpevently/installation-setup', '258'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/overview',
                component: ComponentCreator('/docs/plugins/wpevently/overview', '447'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/rest-api',
                component: ComponentCreator('/docs/plugins/wpevently/rest-api', '24d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/settings',
                component: ComponentCreator('/docs/plugins/wpevently/settings', 'ef0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/shortcodes',
                component: ComponentCreator('/docs/plugins/wpevently/shortcodes', '73c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/template-override',
                component: ComponentCreator('/docs/plugins/wpevently/template-override', '9d9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/video-tutorials',
                component: ComponentCreator('/docs/plugins/wpevently/video-tutorials', 'd3a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/admin-backend-order/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/admin-backend-order/overview', '296'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/min-max-booking-limit/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/min-max-booking-limit/overview', 'e00'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/multi-day-discount-pricing/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/multi-day-discount-pricing/overview', '2fa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/pricing-discount-over-x-days/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/pricing-discount-over-x-days/overview', '445'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/seasonal-pricing-management/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/seasonal-pricing-management/overview', '67e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/available-addons',
                component: ComponentCreator('/docs/plugins/wprently/available-addons', '44d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/changelog',
                component: ComponentCreator('/docs/plugins/wprently/changelog', '57a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/faq',
                component: ComponentCreator('/docs/plugins/wprently/faq', 'b2b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/features',
                component: ComponentCreator('/docs/plugins/wprently/features', 'ed6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/general-guidelines',
                component: ComponentCreator('/docs/plugins/wprently/general-guidelines', '6c4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/global-settings',
                component: ComponentCreator('/docs/plugins/wprently/global-settings', '1d0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/installation-setup',
                component: ComponentCreator('/docs/plugins/wprently/installation-setup', 'a66'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/overview',
                component: ComponentCreator('/docs/plugins/wprently/overview', '65d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/settings',
                component: ComponentCreator('/docs/plugins/wprently/settings', '796'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/shortcodes',
                component: ComponentCreator('/docs/plugins/wprently/shortcodes', 'edc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/backend-order/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/backend-order/overview', '63c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/buy-x-get-y-free/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/buy-x-get-y-free/overview', '0b4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/early-bird-pricing/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/early-bird-pricing/overview', '51e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/group-bulk-pricing/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/group-bulk-pricing/overview', '979'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/group-ticket-quantity/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/group-ticket-quantity/overview', 'b67'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/max-min-booking/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/max-min-booking/overview', '96b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/qr-code/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/qr-code/overview', '91f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/seasonal-pricing/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/seasonal-pricing/overview', '61f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/seat-plan/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/seat-plan/overview', 'c09'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/changelog',
                component: ComponentCreator('/docs/plugins/wptravelly/changelog', '7d6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/elementor-integration',
                component: ComponentCreator('/docs/plugins/wptravelly/elementor-integration', 'f1f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/faq',
                component: ComponentCreator('/docs/plugins/wptravelly/faq', '0ce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/features',
                component: ComponentCreator('/docs/plugins/wptravelly/features', '9e3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/installation-setup',
                component: ComponentCreator('/docs/plugins/wptravelly/installation-setup', 'de5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/overview', '415'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/settings',
                component: ComponentCreator('/docs/plugins/wptravelly/settings', '3f4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/shortcodes',
                component: ComponentCreator('/docs/plugins/wptravelly/shortcodes', '93c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/template-override',
                component: ComponentCreator('/docs/plugins/wptravelly/template-override', '410'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/videos/developer-videos',
                component: ComponentCreator('/docs/videos/developer-videos', '792'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/videos/getting-started',
                component: ComponentCreator('/docs/videos/getting-started', '917'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/videos/plugin-tutorials',
                component: ComponentCreator('/docs/videos/plugin-tutorials', '838'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
