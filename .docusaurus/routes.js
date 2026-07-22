import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '5ed'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'f58'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '064'),
            routes: [
              {
                path: '/addons/ecab',
                component: ComponentCreator('/addons/ecab', '8cb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/ecab/distance-tier-pricing',
                component: ComponentCreator('/addons/ecab/distance-tier-pricing', '5b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/ecab/peak-hour-pricing',
                component: ComponentCreator('/addons/ecab/peak-hour-pricing', '965'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpbusticketly',
                component: ComponentCreator('/addons/wpbusticketly', 'e45'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpbusticketly/qr-code',
                component: ComponentCreator('/addons/wpbusticketly/qr-code', '244'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently',
                component: ComponentCreator('/addons/wpevently', '267'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/book-events-from-dashboard',
                component: ComponentCreator('/addons/wpevently/book-events-from-dashboard', '1dd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/category-based-ticket-type',
                component: ComponentCreator('/addons/wpevently/category-based-ticket-type', '2d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/email-reminder',
                component: ComponentCreator('/addons/wpevently/email-reminder', '972'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/event-duplicator',
                component: ComponentCreator('/addons/wpevently/event-duplicator', '0b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/event-max-min-quantity-limiting',
                component: ComponentCreator('/addons/wpevently/event-max-min-quantity-limiting', 'e88'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/event-seat-plan',
                component: ComponentCreator('/addons/wpevently/event-seat-plan', '556'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/group-ticket-qty',
                component: ComponentCreator('/addons/wpevently/group-ticket-qty', '0ed'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/marketplace-frontend-submission',
                component: ComponentCreator('/addons/wpevently/marketplace-frontend-submission', '28a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/membership-price',
                component: ComponentCreator('/addons/wpevently/membership-price', '7ba'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/min-max-quantity',
                component: ComponentCreator('/addons/wpevently/min-max-quantity', '087'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/review-and-rating',
                component: ComponentCreator('/addons/wpevently/review-and-rating', 'd55'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/woocommerce-event-calendar',
                component: ComponentCreator('/addons/wpevently/woocommerce-event-calendar', '0a4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/woocommerce-event-coupon-code',
                component: ComponentCreator('/addons/wpevently/woocommerce-event-coupon-code', '650'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/woocommerce-event-qr-code',
                component: ComponentCreator('/addons/wpevently/woocommerce-event-qr-code', '8c2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wpevently/woocommerce-event-waitlist',
                component: ComponentCreator('/addons/wpevently/woocommerce-event-waitlist', 'b5d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wprently',
                component: ComponentCreator('/addons/wprently', '2fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wprently/admin-backend-order',
                component: ComponentCreator('/addons/wprently/admin-backend-order', '346'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wprently/min-max-booking-limit',
                component: ComponentCreator('/addons/wprently/min-max-booking-limit', '643'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wprently/multi-day-discount-pricing',
                component: ComponentCreator('/addons/wprently/multi-day-discount-pricing', 'f09'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wprently/pricing-discount-over-x-days',
                component: ComponentCreator('/addons/wprently/pricing-discount-over-x-days', '1a4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wprently/seasonal-pricing-management',
                component: ComponentCreator('/addons/wprently/seasonal-pricing-management', '647'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly',
                component: ComponentCreator('/addons/wptravelly', '89e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/backend-order',
                component: ComponentCreator('/addons/wptravelly/backend-order', '730'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/buy-x-get-y-free',
                component: ComponentCreator('/addons/wptravelly/buy-x-get-y-free', '3bf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/early-bird-pricing',
                component: ComponentCreator('/addons/wptravelly/early-bird-pricing', '7f2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/group-bulk-pricing',
                component: ComponentCreator('/addons/wptravelly/group-bulk-pricing', '872'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/group-ticket-quantity',
                component: ComponentCreator('/addons/wptravelly/group-ticket-quantity', 'e81'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/max-min-booking',
                component: ComponentCreator('/addons/wptravelly/max-min-booking', '79a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/qr-code',
                component: ComponentCreator('/addons/wptravelly/qr-code', '7b2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/seasonal-pricing',
                component: ComponentCreator('/addons/wptravelly/seasonal-pricing', '40a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/addons/wptravelly/seat-plan',
                component: ComponentCreator('/addons/wptravelly/seat-plan', '43a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/addons',
                component: ComponentCreator('/category/addons', '99d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/advanced-discount-coupon-and-store-credit',
                component: ComponentCreator('/category/advanced-discount-coupon-and-store-credit', '6ac'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/car-rental',
                component: ComponentCreator('/category/car-rental', 'ab1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/ecab',
                component: ComponentCreator('/category/ecab', '6cd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/getting-started',
                component: ComponentCreator('/category/getting-started', '794'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/plugins',
                component: ComponentCreator('/category/plugins', '5be'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/wpbookingly',
                component: ComponentCreator('/category/wpbookingly', '3c3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/wpbusticketly',
                component: ComponentCreator('/category/wpbusticketly', '906'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/wpdepositly',
                component: ComponentCreator('/category/wpdepositly', '37f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/wpevently',
                component: ComponentCreator('/category/wpevently', 'b7e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/wprently',
                component: ComponentCreator('/category/wprently', '80f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/wptravelly',
                component: ComponentCreator('/category/wptravelly', '590'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/getting-started/installation',
                component: ComponentCreator('/getting-started/installation', '066'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/getting-started/license-activation',
                component: ComponentCreator('/getting-started/license-activation', '9fd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/advanced-discount-coupon-store-credit/faq',
                component: ComponentCreator('/plugins/advanced-discount-coupon-store-credit/faq', '556'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/advanced-discount-coupon-store-credit/installation-setup',
                component: ComponentCreator('/plugins/advanced-discount-coupon-store-credit/installation-setup', 'd16'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/advanced-discount-coupon-store-credit/overview',
                component: ComponentCreator('/plugins/advanced-discount-coupon-store-credit/overview', 'a5a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/advanced-discount-coupon-store-credit/settings',
                component: ComponentCreator('/plugins/advanced-discount-coupon-store-credit/settings', '601'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/advanced-discount-coupon-store-credit/shortcodes',
                component: ComponentCreator('/plugins/advanced-discount-coupon-store-credit/shortcodes', '5a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/faq',
                component: ComponentCreator('/plugins/car-rental/faq', '0cf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/installation-setup',
                component: ComponentCreator('/plugins/car-rental/installation-setup', 'efd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/overview',
                component: ComponentCreator('/plugins/car-rental/overview', '266'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/pricing-availability',
                component: ComponentCreator('/plugins/car-rental/pricing-availability', '570'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/settings',
                component: ComponentCreator('/plugins/car-rental/settings', '5a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/shortcodes',
                component: ComponentCreator('/plugins/car-rental/shortcodes', '9f0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/car-rental/vehicle-management',
                component: ComponentCreator('/plugins/car-rental/vehicle-management', 'dfe'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/ecab/faq',
                component: ComponentCreator('/plugins/ecab/faq', '819'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/ecab/installation-setup',
                component: ComponentCreator('/plugins/ecab/installation-setup', 'a48'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/ecab/overview',
                component: ComponentCreator('/plugins/ecab/overview', '33d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/ecab/settings',
                component: ComponentCreator('/plugins/ecab/settings', '542'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/ecab/shortcodes',
                component: ComponentCreator('/plugins/ecab/shortcodes', '920'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/faq',
                component: ComponentCreator('/plugins/wpbookingly/faq', 'a32'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/installation-setup',
                component: ComponentCreator('/plugins/wpbookingly/installation-setup', '61f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/overview',
                component: ComponentCreator('/plugins/wpbookingly/overview', '0fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/payment-integration',
                component: ComponentCreator('/plugins/wpbookingly/payment-integration', 'e49'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/service-management',
                component: ComponentCreator('/plugins/wpbookingly/service-management', '027'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/settings',
                component: ComponentCreator('/plugins/wpbookingly/settings', 'fcf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/shortcodes',
                component: ComponentCreator('/plugins/wpbookingly/shortcodes', 'cce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbookingly/staff-scheduling',
                component: ComponentCreator('/plugins/wpbookingly/staff-scheduling', '97a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/available-addons',
                component: ComponentCreator('/plugins/wpbusticketly/available-addons', '948'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/faq',
                component: ComponentCreator('/plugins/wpbusticketly/faq', '8ec'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/installation-setup',
                component: ComponentCreator('/plugins/wpbusticketly/installation-setup', '710'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/overview',
                component: ComponentCreator('/plugins/wpbusticketly/overview', '697'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/rest-api',
                component: ComponentCreator('/plugins/wpbusticketly/rest-api', '766'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/settings',
                component: ComponentCreator('/plugins/wpbusticketly/settings', '440'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpbusticketly/shortcodes',
                component: ComponentCreator('/plugins/wpbusticketly/shortcodes', '64a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpdepositly/faq',
                component: ComponentCreator('/plugins/wpdepositly/faq', '911'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpdepositly/installation-setup',
                component: ComponentCreator('/plugins/wpdepositly/installation-setup', '474'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpdepositly/overview',
                component: ComponentCreator('/plugins/wpdepositly/overview', 'bc2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpdepositly/settings',
                component: ComponentCreator('/plugins/wpdepositly/settings', '70a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpdepositly/shortcodes',
                component: ComponentCreator('/plugins/wpdepositly/shortcodes', '910'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/developer-hooks',
                component: ComponentCreator('/plugins/wpevently/developer-hooks', 'f6d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/elementor-integration',
                component: ComponentCreator('/plugins/wpevently/elementor-integration', 'd6c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/faq',
                component: ComponentCreator('/plugins/wpevently/faq', '988'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/installation-setup',
                component: ComponentCreator('/plugins/wpevently/installation-setup', 'd26'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/overview',
                component: ComponentCreator('/plugins/wpevently/overview', '89e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/rest-api',
                component: ComponentCreator('/plugins/wpevently/rest-api', 'beb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/settings',
                component: ComponentCreator('/plugins/wpevently/settings', 'f40'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/shortcodes',
                component: ComponentCreator('/plugins/wpevently/shortcodes', '8a1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wpevently/template-override',
                component: ComponentCreator('/plugins/wpevently/template-override', '78c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/available-addons',
                component: ComponentCreator('/plugins/wprently/available-addons', '020'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/developer-hooks',
                component: ComponentCreator('/plugins/wprently/developer-hooks', '6b6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/faq',
                component: ComponentCreator('/plugins/wprently/faq', '155'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/global-settings',
                component: ComponentCreator('/plugins/wprently/global-settings', 'c2a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/installation-setup',
                component: ComponentCreator('/plugins/wprently/installation-setup', '6e9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/learning',
                component: ComponentCreator('/plugins/wprently/learning', 'a50'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/overview',
                component: ComponentCreator('/plugins/wprently/overview', '5ec'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/settings',
                component: ComponentCreator('/plugins/wprently/settings', 'bb7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/shortcodes',
                component: ComponentCreator('/plugins/wprently/shortcodes', 'f7c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wprently/template-override',
                component: ComponentCreator('/plugins/wprently/template-override', '8e9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/elementor-integration',
                component: ComponentCreator('/plugins/wptravelly/elementor-integration', '4c8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/faq',
                component: ComponentCreator('/plugins/wptravelly/faq', '42f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/installation-setup',
                component: ComponentCreator('/plugins/wptravelly/installation-setup', '27b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/overview',
                component: ComponentCreator('/plugins/wptravelly/overview', '269'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/settings',
                component: ComponentCreator('/plugins/wptravelly/settings', '36c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/shortcodes',
                component: ComponentCreator('/plugins/wptravelly/shortcodes', '560'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/plugins/wptravelly/template-override',
                component: ComponentCreator('/plugins/wptravelly/template-override', 'c4b'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
