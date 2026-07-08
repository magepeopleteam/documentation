import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const plugins = [
  {
    title: 'WPEvently',
    tagline: 'Event Booking Manager for WooCommerce',
    description: 'Ticketing, seating, check-in',
    version: '5.3.4',
    addons: 14,
    icon: 'event.png',
    docLink: '/docs/plugins/wpevently/overview',
    buyLink: 'https://mage-people.com/product/mage-woo-event-booking-manager-pro/#pricing',
  },
  {
    title: 'WPBusTicketly',
    tagline: 'Bus Ticket Booking with Seat Reservation',
    description: 'Routes, seats, dispatch',
    version: '5.7.2',
    addons: 1,
    icon: 'bus.png',
    docLink: '/docs/plugins/wpbusticketly/overview',
    buyLink: 'https://mage-people.com/product/addon-bus-ticket-booking-with-seat-reservation-pro/#pricing',
  },
  {
    title: 'WPTravelly',
    tagline: 'Tour & Travel Booking Manager',
    description: 'Itineraries & packages',
    version: '2.1.9',
    addons: 9,
    icon: 'travel.png',
    docLink: '/docs/plugins/wptravelly/overview',
    buyLink: 'https://mage-people.com/product/woocommerce-tour-and-travel-booking-manager-pro/#pricing',
  },
  {
    title: 'WPBookingly',
    tagline: 'Appointment Booking Plugin for WooCommerce',
    description: 'Appointments & staff',
    version: '1.3.1',
    addons: 0,
    icon: 'service.png',
    docLink: '/docs/plugins/wpbookingly/overview',
    buyLink: 'https://mage-people.com/product/service-booking-plugin-wpbookingly/#pricing',
  },
  {
    title: 'eCab',
    tagline: 'E-cab Taxi Booking Manager for WooCommerce',
    description: 'Rides & dispatch',
    version: '2.0.2',
    addons: 2,
    icon: 'ecab.png',
    docLink: '/docs/plugins/ecab/overview',
    buyLink: 'https://mage-people.com/product/wordpress-taxi-cab-booking-plugin-for-woocommerce/#pricing',
  },
  {
    title: 'WPRently',
    tagline: 'Booking and Rental Manager for WooCommerce',
    description: 'Inventory & deposits',
    version: '2.7.2',
    addons: 5,
    icon: 'rental.png',
    docLink: '/docs/plugins/wprently/overview',
    buyLink: 'https://mage-people.com/product/booking-and-rental-manager-for-woocommerce-pro/#pricing',
  },
  {
    title: 'Car Rental',
    tagline: 'Online Vehicle Booking System',
    description: 'Fleet & driver management',
    version: '1.3.6',
    addons: 0,
    icon: 'car-rental.png',
    docLink: '/docs/plugins/car-rental/overview',
    buyLink: 'https://mage-people.com/product/wordpress-car-rental-plugin/#pricing',
  },
  {
    title: 'Advanced Discount Coupon',
    tagline: 'Advanced Discount Coupon and Store Credit',
    description: 'Coupons, tiered discounts & store credit',
    version: '1.0.2',
    addons: 0,
    icon: 'discount.png',
    docLink: '/docs/plugins/advanced-discount-coupon-store-credit/overview',
    buyLink: 'https://mage-people.com/product/mage-coupon-advanced-for-woocommerce/#pricing',
  },
  {
    title: 'WPDeposity',
    tagline: 'Deposits and Partial Payments for WooCommerce',
    description: 'Partial payments & deposit scheduling',
    version: '3.1.0',
    addons: 0,
    icon: 'partial.png',
    docLink: '/docs/plugins/wpdeposity/overview',
    buyLink: 'https://mage-people.com/product/advanced-deposit-partial-payment-for-woocommerce-pro/#pricing',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Complete documentation for events, bookings, rentals, and payment solutions — everything you need to set up and manage your WordPress booking system.">
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.heroBadge}>Documentation Hub · WordPress Booking Suite</span>
          <Heading as="h1" className={styles.heroTitle}>
            All-in-One WordPress Booking & Management Plugin Suite
          </Heading>
          <p className={styles.heroDescription}>
            Complete documentation for events, bookings, rentals, and payment solutions — everything you need to set up and manage your WordPress booking system.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>9</span>
              <span className={styles.statLabel}>Plugins</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>31</span>
              <span className={styles.statLabel}>Addons</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>44+</span>
              <span className={styles.statLabel}>Doc Pages</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>7</span>
              <span className={styles.statLabel}>Categories</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.pluginList}>
              <div className={styles.listHeader}>
                <span className={styles.colIcon}>Logo</span>
                <span className={styles.colPlugin}>Plugin</span>
                <span className={styles.colAddons}>Addons</span>
                <span className={styles.colActions}></span>
              </div>
              {plugins.map((plugin) => (
                <div key={plugin.title} className={styles.listRow}>
                  <span className={styles.colIcon}>
                    <img
                      src={`/img/plugins/${plugin.icon}`}
                      alt={plugin.title}
                      className={styles.pluginIcon}
                    />
                  </span>
                  <span className={styles.colPlugin}>
                    <Link to={plugin.docLink} className={styles.pluginName}>
                      {plugin.tagline}
                    </Link>
                    <span className={styles.pluginSub}>{plugin.description}</span>
                    <span className={styles.pluginVersion}>V{plugin.version}</span>
                  </span>
                  <span className={styles.colAddons}>
                    {plugin.addons > 0 ? (
                      <span className={styles.addonCount}>
                        {plugin.addons} addon{plugin.addons > 1 ? 's' : ''}
                      </span>
                    ) : null}
                  </span>
                  <span className={styles.colActions}>
                    <a
                      href={plugin.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buyButton}>
                      Buy Plugin
                    </a>
                    <Link to={plugin.docLink} className={styles.readButton}>
                      Read Docs
                    </Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
