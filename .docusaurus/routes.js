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
    component: ComponentCreator('/docs', 'd63'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4ea'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '58d'),
            routes: [
              {
                path: '/docs/addons/bank-payment-gateway/overview',
                component: ComponentCreator('/docs/addons/bank-payment-gateway/overview', '0b2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/bank-payment-gateway/settings',
                component: ComponentCreator('/docs/addons/bank-payment-gateway/settings', 'a87'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/custom-checkout-fields/field-types',
                component: ComponentCreator('/docs/addons/custom-checkout-fields/field-types', '68e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/custom-checkout-fields/overview',
                component: ComponentCreator('/docs/addons/custom-checkout-fields/overview', 'c81'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/woocommerce-booking-elementor/overview',
                component: ComponentCreator('/docs/addons/woocommerce-booking-elementor/overview', 'd07'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/addons/woocommerce-booking-elementor/widgets',
                component: ComponentCreator('/docs/addons/woocommerce-booking-elementor/widgets', '9e0'),
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
                path: '/docs/category/advanced-discount-coupon',
                component: ComponentCreator('/docs/category/advanced-discount-coupon', '0bc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/bank-payment-gateway',
                component: ComponentCreator('/docs/category/bank-payment-gateway', '875'),
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
                path: '/docs/category/custom-checkout-fields',
                component: ComponentCreator('/docs/category/custom-checkout-fields', '978'),
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
                path: '/docs/category/plugins',
                component: ComponentCreator('/docs/category/plugins', '586'),
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
                path: '/docs/category/woocommerce-booking-elementor',
                component: ComponentCreator('/docs/category/woocommerce-booking-elementor', 'a73'),
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
                path: '/docs/category/wpequipments',
                component: ComponentCreator('/docs/category/wpequipments', '657'),
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
                path: '/docs/category/wpfoodly',
                component: ComponentCreator('/docs/category/wpfoodly', '4c3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wpgrouply',
                component: ComponentCreator('/docs/category/wpgrouply', '2fc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/wpgymly',
                component: ComponentCreator('/docs/category/wpgymly', '5dd'),
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
                path: '/docs/plugins/advanced-discount-coupon/changelog',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon/changelog', '53e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon/faq',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon/faq', 'b72'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon/features',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon/features', '251'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon/overview',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon/overview', '623'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon/settings',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon/settings', '767'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/advanced-discount-coupon/shortcodes',
                component: ComponentCreator('/docs/plugins/advanced-discount-coupon/shortcodes', 'f5f'),
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
                path: '/docs/plugins/car-rental/overview',
                component: ComponentCreator('/docs/plugins/car-rental/overview', '59f'),
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
                path: '/docs/plugins/wpbookingly/overview',
                component: ComponentCreator('/docs/plugins/wpbookingly/overview', '39f'),
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
                path: '/docs/plugins/wpbusticketly/overview',
                component: ComponentCreator('/docs/plugins/wpbusticketly/overview', '540'),
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
                path: '/docs/plugins/wpequipments/changelog',
                component: ComponentCreator('/docs/plugins/wpequipments/changelog', 'c00'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpequipments/faq',
                component: ComponentCreator('/docs/plugins/wpequipments/faq', '855'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpequipments/features',
                component: ComponentCreator('/docs/plugins/wpequipments/features', 'add'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpequipments/overview',
                component: ComponentCreator('/docs/plugins/wpequipments/overview', 'b7a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpequipments/settings',
                component: ComponentCreator('/docs/plugins/wpequipments/settings', 'b41'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpequipments/shortcodes',
                component: ComponentCreator('/docs/plugins/wpequipments/shortcodes', '679'),
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
                path: '/docs/plugins/wpevently/overview',
                component: ComponentCreator('/docs/plugins/wpevently/overview', '447'),
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
                path: '/docs/plugins/wpfoodly/changelog',
                component: ComponentCreator('/docs/plugins/wpfoodly/changelog', '1e5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpfoodly/faq',
                component: ComponentCreator('/docs/plugins/wpfoodly/faq', '581'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpfoodly/features',
                component: ComponentCreator('/docs/plugins/wpfoodly/features', '0dd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpfoodly/overview',
                component: ComponentCreator('/docs/plugins/wpfoodly/overview', '972'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpfoodly/settings',
                component: ComponentCreator('/docs/plugins/wpfoodly/settings', '2a1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpfoodly/shortcodes',
                component: ComponentCreator('/docs/plugins/wpfoodly/shortcodes', 'fda'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgrouply/changelog',
                component: ComponentCreator('/docs/plugins/wpgrouply/changelog', '8b8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgrouply/faq',
                component: ComponentCreator('/docs/plugins/wpgrouply/faq', '860'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgrouply/features',
                component: ComponentCreator('/docs/plugins/wpgrouply/features', 'f21'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgrouply/overview',
                component: ComponentCreator('/docs/plugins/wpgrouply/overview', '620'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgrouply/settings',
                component: ComponentCreator('/docs/plugins/wpgrouply/settings', '759'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgrouply/shortcodes',
                component: ComponentCreator('/docs/plugins/wpgrouply/shortcodes', '4e9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgymly/changelog',
                component: ComponentCreator('/docs/plugins/wpgymly/changelog', '2e0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgymly/faq',
                component: ComponentCreator('/docs/plugins/wpgymly/faq', 'b0d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgymly/features',
                component: ComponentCreator('/docs/plugins/wpgymly/features', 'af2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgymly/overview',
                component: ComponentCreator('/docs/plugins/wpgymly/overview', 'bd4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgymly/settings',
                component: ComponentCreator('/docs/plugins/wpgymly/settings', 'ade'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/plugins/wpgymly/shortcodes',
                component: ComponentCreator('/docs/plugins/wpgymly/shortcodes', 'e3d'),
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
                path: '/docs/plugins/wptravelly/changelog',
                component: ComponentCreator('/docs/plugins/wptravelly/changelog', '7d6'),
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
