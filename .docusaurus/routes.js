import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '58b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f22'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '739'),
            routes: [
              {
                path: '/docs/addons/ecab',
                component: ComponentCreator('/docs/addons/ecab', '1fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/ecab/distance-tier-pricing',
                component: ComponentCreator('/docs/addons/ecab/distance-tier-pricing', '1f3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/ecab/peak-hour-pricing',
                component: ComponentCreator('/docs/addons/ecab/peak-hour-pricing', '96d'),
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
                component: ComponentCreator('/docs/addons/wpbusticketly/qr-code', 'be3'),
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
                component: ComponentCreator('/docs/addons/wpevently/book-events-from-dashboard', '42d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/category-based-ticket-type',
                component: ComponentCreator('/docs/addons/wpevently/category-based-ticket-type', '980'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/email-reminder',
                component: ComponentCreator('/docs/addons/wpevently/email-reminder', '7db'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/event-duplicator',
                component: ComponentCreator('/docs/addons/wpevently/event-duplicator', '280'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/event-max-min-quantity-limiting',
                component: ComponentCreator('/docs/addons/wpevently/event-max-min-quantity-limiting', '910'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/event-seat-plan',
                component: ComponentCreator('/docs/addons/wpevently/event-seat-plan', 'ecf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/group-ticket-qty',
                component: ComponentCreator('/docs/addons/wpevently/group-ticket-qty', '692'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/marketplace-frontend-submission',
                component: ComponentCreator('/docs/addons/wpevently/marketplace-frontend-submission', 'd20'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/membership-price',
                component: ComponentCreator('/docs/addons/wpevently/membership-price', '83a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/min-max-quantity',
                component: ComponentCreator('/docs/addons/wpevently/min-max-quantity', '11e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/review-and-rating',
                component: ComponentCreator('/docs/addons/wpevently/review-and-rating', '99c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-calendar',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-calendar', '3a5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-coupon-code',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-coupon-code', '210'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-qr-code',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-qr-code', '39b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wpevently/woocommerce-event-waitlist',
                component: ComponentCreator('/docs/addons/wpevently/woocommerce-event-waitlist', '63b'),
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
                component: ComponentCreator('/docs/addons/wprently/admin-backend-order', 'bb9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/min-max-booking-limit',
                component: ComponentCreator('/docs/addons/wprently/min-max-booking-limit', 'd0a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/multi-day-discount-pricing',
                component: ComponentCreator('/docs/addons/wprently/multi-day-discount-pricing', '91e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/pricing-discount-over-x-days',
                component: ComponentCreator('/docs/addons/wprently/pricing-discount-over-x-days', 'e19'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wprently/seasonal-pricing-management',
                component: ComponentCreator('/docs/addons/wprently/seasonal-pricing-management', '1c9'),
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
                component: ComponentCreator('/docs/addons/wptravelly/backend-order', '1f0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/buy-x-get-y-free',
                component: ComponentCreator('/docs/addons/wptravelly/buy-x-get-y-free', '8a5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/early-bird-pricing',
                component: ComponentCreator('/docs/addons/wptravelly/early-bird-pricing', '538'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/group-bulk-pricing',
                component: ComponentCreator('/docs/addons/wptravelly/group-bulk-pricing', '6ba'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/group-ticket-quantity',
                component: ComponentCreator('/docs/addons/wptravelly/group-ticket-quantity', '645'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/max-min-booking',
                component: ComponentCreator('/docs/addons/wptravelly/max-min-booking', 'b52'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/qr-code',
                component: ComponentCreator('/docs/addons/wptravelly/qr-code', 'c3b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/seasonal-pricing',
                component: ComponentCreator('/docs/addons/wptravelly/seasonal-pricing', '297'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/wptravelly/seat-plan',
                component: ComponentCreator('/docs/addons/wptravelly/seat-plan', 'bb5'),
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
                path: '/docs/category/addons-4',
                component: ComponentCreator('/docs/category/addons-4', 'e0f'),
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
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', 'd43'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/getting-started/license-activation',
                component: ComponentCreator('/docs/getting-started/license-activation', 'd29'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/changelog',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/changelog', 'e38'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/faq',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/faq', '1c3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/features',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/features', '6b0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/overview',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/overview', '1d7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/settings',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/settings', '69f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon-store-credit/shortcodes',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon-store-credit/shortcodes', '14f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/changelog',
                component: ComponentCreator('/docs/plugins/car-rental/changelog', '5a4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/faq',
                component: ComponentCreator('/docs/plugins/car-rental/faq', 'd7a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/features',
                component: ComponentCreator('/docs/plugins/car-rental/features', 'ef2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/installation-setup',
                component: ComponentCreator('/docs/plugins/car-rental/installation-setup', '7ce'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/overview',
                component: ComponentCreator('/docs/plugins/car-rental/overview', 'edf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/pricing-availability',
                component: ComponentCreator('/docs/plugins/car-rental/pricing-availability', '75c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/settings',
                component: ComponentCreator('/docs/plugins/car-rental/settings', '4b7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/shortcodes',
                component: ComponentCreator('/docs/plugins/car-rental/shortcodes', '8d9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/car-rental/vehicle-management',
                component: ComponentCreator('/docs/plugins/car-rental/vehicle-management', '4be'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/addons/distance-tier-pricing/overview',
                component: ComponentCreator('/docs/plugins/ecab/addons/distance-tier-pricing/overview', '18c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/addons/peak-hour-pricing/overview',
                component: ComponentCreator('/docs/plugins/ecab/addons/peak-hour-pricing/overview', 'bdd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/changelog',
                component: ComponentCreator('/docs/plugins/ecab/changelog', '619'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/faq',
                component: ComponentCreator('/docs/plugins/ecab/faq', '991'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/features',
                component: ComponentCreator('/docs/plugins/ecab/features', '38b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/installation-setup',
                component: ComponentCreator('/docs/plugins/ecab/installation-setup', 'd65'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/overview',
                component: ComponentCreator('/docs/plugins/ecab/overview', '7f5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/settings',
                component: ComponentCreator('/docs/plugins/ecab/settings', '653'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/ecab/shortcodes',
                component: ComponentCreator('/docs/plugins/ecab/shortcodes', '76c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/changelog',
                component: ComponentCreator('/docs/plugins/wpbookingly/changelog', 'da0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/faq',
                component: ComponentCreator('/docs/plugins/wpbookingly/faq', 'e26'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/features',
                component: ComponentCreator('/docs/plugins/wpbookingly/features', '2be'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/installation-setup',
                component: ComponentCreator('/docs/plugins/wpbookingly/installation-setup', 'e45'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/overview',
                component: ComponentCreator('/docs/plugins/wpbookingly/overview', '2ee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/payment-integration',
                component: ComponentCreator('/docs/plugins/wpbookingly/payment-integration', 'ab1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/service-management',
                component: ComponentCreator('/docs/plugins/wpbookingly/service-management', 'cb7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/settings',
                component: ComponentCreator('/docs/plugins/wpbookingly/settings', '09d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/shortcodes',
                component: ComponentCreator('/docs/plugins/wpbookingly/shortcodes', '811'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbookingly/staff-scheduling',
                component: ComponentCreator('/docs/plugins/wpbookingly/staff-scheduling', 'b77'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/addons/woocommerce-bus-qr-code/overview',
                component: ComponentCreator('/docs/plugins/wpbusticketly/addons/woocommerce-bus-qr-code/overview', '03b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/available-addons',
                component: ComponentCreator('/docs/plugins/wpbusticketly/available-addons', '23c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/changelog',
                component: ComponentCreator('/docs/plugins/wpbusticketly/changelog', '19d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/faq',
                component: ComponentCreator('/docs/plugins/wpbusticketly/faq', '7fe'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/features',
                component: ComponentCreator('/docs/plugins/wpbusticketly/features', 'a7d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/installation-setup',
                component: ComponentCreator('/docs/plugins/wpbusticketly/installation-setup', '1e0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/overview',
                component: ComponentCreator('/docs/plugins/wpbusticketly/overview', 'b22'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/rest-api',
                component: ComponentCreator('/docs/plugins/wpbusticketly/rest-api', '39f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/settings',
                component: ComponentCreator('/docs/plugins/wpbusticketly/settings', '18f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpbusticketly/shortcodes',
                component: ComponentCreator('/docs/plugins/wpbusticketly/shortcodes', '033'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/changelog',
                component: ComponentCreator('/docs/plugins/wpdeposity/changelog', 'cd3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/faq',
                component: ComponentCreator('/docs/plugins/wpdeposity/faq', '8e7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/features',
                component: ComponentCreator('/docs/plugins/wpdeposity/features', '258'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/overview',
                component: ComponentCreator('/docs/plugins/wpdeposity/overview', '9af'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/settings',
                component: ComponentCreator('/docs/plugins/wpdeposity/settings', '1dd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpdeposity/shortcodes',
                component: ComponentCreator('/docs/plugins/wpdeposity/shortcodes', '055'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/changelog',
                component: ComponentCreator('/docs/plugins/wpevently/changelog', 'fe4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/developer-hooks',
                component: ComponentCreator('/docs/plugins/wpevently/developer-hooks', 'a43'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/elementor-integration',
                component: ComponentCreator('/docs/plugins/wpevently/elementor-integration', 'd33'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/faq',
                component: ComponentCreator('/docs/plugins/wpevently/faq', 'b7c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/features',
                component: ComponentCreator('/docs/plugins/wpevently/features', 'ef1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/installation-setup',
                component: ComponentCreator('/docs/plugins/wpevently/installation-setup', '493'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/overview',
                component: ComponentCreator('/docs/plugins/wpevently/overview', '385'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/rest-api',
                component: ComponentCreator('/docs/plugins/wpevently/rest-api', '51e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/settings',
                component: ComponentCreator('/docs/plugins/wpevently/settings', '840'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/shortcodes',
                component: ComponentCreator('/docs/plugins/wpevently/shortcodes', 'e22'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/template-override',
                component: ComponentCreator('/docs/plugins/wpevently/template-override', 'e2f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpevently/video-tutorials',
                component: ComponentCreator('/docs/plugins/wpevently/video-tutorials', '5fe'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/admin-backend-order/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/admin-backend-order/overview', '23d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/min-max-booking-limit/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/min-max-booking-limit/overview', '305'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/multi-day-discount-pricing/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/multi-day-discount-pricing/overview', 'c55'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/pricing-discount-over-x-days/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/pricing-discount-over-x-days/overview', '8e2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/addons/seasonal-pricing-management/overview',
                component: ComponentCreator('/docs/plugins/wprently/addons/seasonal-pricing-management/overview', '8f0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/available-addons',
                component: ComponentCreator('/docs/plugins/wprently/available-addons', 'd6d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/changelog',
                component: ComponentCreator('/docs/plugins/wprently/changelog', '9a6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/faq',
                component: ComponentCreator('/docs/plugins/wprently/faq', '83d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/features',
                component: ComponentCreator('/docs/plugins/wprently/features', '38a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/general-guidelines',
                component: ComponentCreator('/docs/plugins/wprently/general-guidelines', 'c0e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/global-settings',
                component: ComponentCreator('/docs/plugins/wprently/global-settings', '0a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/installation-setup',
                component: ComponentCreator('/docs/plugins/wprently/installation-setup', '76f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/overview',
                component: ComponentCreator('/docs/plugins/wprently/overview', '15b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/settings',
                component: ComponentCreator('/docs/plugins/wprently/settings', '749'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wprently/shortcodes',
                component: ComponentCreator('/docs/plugins/wprently/shortcodes', '392'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/backend-order/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/backend-order/overview', '512'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/buy-x-get-y-free/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/buy-x-get-y-free/overview', '8de'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/early-bird-pricing/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/early-bird-pricing/overview', 'c29'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/group-bulk-pricing/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/group-bulk-pricing/overview', '484'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/group-ticket-quantity/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/group-ticket-quantity/overview', '757'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/max-min-booking/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/max-min-booking/overview', 'f34'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/qr-code/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/qr-code/overview', '6fb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/seasonal-pricing/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/seasonal-pricing/overview', '5aa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/addons/seat-plan/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/addons/seat-plan/overview', 'dad'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/changelog',
                component: ComponentCreator('/docs/plugins/wptravelly/changelog', 'b60'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/elementor-integration',
                component: ComponentCreator('/docs/plugins/wptravelly/elementor-integration', 'e92'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/faq',
                component: ComponentCreator('/docs/plugins/wptravelly/faq', '4e1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/features',
                component: ComponentCreator('/docs/plugins/wptravelly/features', '030'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/installation-setup',
                component: ComponentCreator('/docs/plugins/wptravelly/installation-setup', 'f25'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/overview',
                component: ComponentCreator('/docs/plugins/wptravelly/overview', '949'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/settings',
                component: ComponentCreator('/docs/plugins/wptravelly/settings', 'c0f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/shortcodes',
                component: ComponentCreator('/docs/plugins/wptravelly/shortcodes', 'c96'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wptravelly/template-override',
                component: ComponentCreator('/docs/plugins/wptravelly/template-override', '9c5'),
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
