import { useState, useCallback } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const plugins = [
  {
    title: 'WPEvently',
    tagline: 'Event Booking Manager for WooCommerce — WpEvently',
    description: 'Ticketing, seating, check-in',
    version: '5.3.4',
    addons: 14,
    icon: 'event.png',
    docLink: '/plugins/wpevently/overview',
    buyLink: 'https://mage-people.com/product/mage-woo-event-booking-manager-pro/#pricing',
    addonKey: 'wpevently',
    free: true,
    pro: true,
  },
  {
    title: 'WPBusTicketly',
    tagline: 'Bus Ticket Booking with Seat Reservation — WpBusTicketly',
    description: 'Routes, seats, dispatch',
    version: '5.7.2',
    addons: 1,
    icon: 'bus.png',
    docLink: '/plugins/wpbusticketly/overview',
    buyLink: 'https://mage-people.com/product/addon-bus-ticket-booking-with-seat-reservation-pro/#pricing',
    addonKey: 'wpbusticketly',
    free: true,
    pro: true,
  },
  {
    title: 'WPTravelly',
    tagline: 'Tour & Travel Booking Manager — WpTravelly',
    description: 'Itineraries & packages',
    version: '2.1.9',
    addons: 9,
    icon: 'travel.png',
    docLink: '/plugins/wptravelly/overview',
    buyLink: 'https://mage-people.com/product/woocommerce-tour-and-travel-booking-manager-pro/#pricing',
    addonKey: 'wptravelly',
    free: true,
    pro: true,
  },
  {
    title: 'WPBookingly',
    tagline: 'Appointment Booking Plugin for WooCommerce — WpBookingly',
    description: 'Appointments & staff',
    version: '1.3.1',
    addons: 0,
    icon: 'service.png',
    docLink: '/plugins/wpbookingly/overview',
    buyLink: 'https://mage-people.com/product/service-booking-plugin-wpbookingly/#pricing',
    free: true,
    pro: true,
  },
  {
    title: 'eCab',
    tagline: 'E-cab Taxi Booking Manager for WooCommerce — eCab',
    description: 'Rides & dispatch',
    version: '2.0.2',
    addons: 2,
    icon: 'ecab.png',
    docLink: '/plugins/ecab/overview',
    buyLink: 'https://mage-people.com/product/wordpress-taxi-cab-booking-plugin-for-woocommerce/#pricing',
    addonKey: 'ecab',
    free: true,
    pro: true,
  },
  {
    title: 'WPRently',
    tagline: 'Booking and Rental Manager for WooCommerce — WpRently',
    description: 'Inventory & deposits',
    version: '2.7.2',
    addons: 5,
    icon: 'rental.png',
    docLink: '/plugins/wprently/overview',
    buyLink: 'https://mage-people.com/product/booking-and-rental-manager-for-woocommerce-pro/#pricing',
    addonKey: 'wprently',
    free: true,
    pro: true,
  },
  {
    title: 'Car Rental',
    tagline: 'Car Rental Manager — Online Vehicle Booking System',
    description: 'Fleet & driver management',
    version: '1.3.6',
    addons: 0,
    icon: 'car-rental.png',
    docLink: '/plugins/car-rental/overview',
    buyLink: 'https://mage-people.com/product/wordpress-car-rental-plugin/#pricing',
    free: true,
    pro: true,
  },
  {
    title: 'Advanced Discount Coupon',
    tagline: 'Advanced Discount Coupon and Store Credit',
    description: 'Coupons, tiered discounts & store credit',
    version: '1.0.2',
    addons: 0,
    icon: 'discount.png',
    docLink: '/plugins/advanced-discount-coupon-store-credit/overview',
    buyLink: 'https://mage-people.com/product/mage-coupon-advanced-for-woocommerce/#pricing',
    pro: true,
  },
  {
    title: 'WPDepositly',
    tagline: 'Deposits and Partial Payments for WooCommerce — WpDepositly',
    description: 'Partial payments & deposit scheduling',
    version: '3.1.0',
    addons: 0,
    icon: 'partial.png',
    docLink: '/plugins/wpdepositly/overview',
    buyLink: 'https://mage-people.com/product/advanced-deposit-partial-payment-for-woocommerce-pro/#pricing',
    free: true,
    pro: true,
  },
];

const addonsData = {
  wpevently: {
    name: 'WpEvently',
    tagline: 'Event Manager Plugin WpEvently',
    description: 'Sell tickets, manage capacity, and run check‑in for conferences, concerts, and multi‑session events.',
    addons: [
      { id: 'min-max-quantity', title: 'Event Max‑Min Quantity Limiting', version: '2.0.2', type: 'Capacity', docLink: '/addons/wpevently/event-max-min-quantity-limiting', buyLink: 'https://mage-people.com/product/event-max-min-quantity-limiting-addon-for-woocommerce-event-manager/', description: 'The event max-min addon is necessary for limiting the amount of tickets sold. Organizers can set a maximum buying quantity or minimum purchase quantity.' },
      { id: 'marketplace-frontend-submission', title: 'Marketplace / Frontend Submission', version: '2.0.0', type: 'Management', docLink: '/addons/wpevently/marketplace-frontend-submission', buyLink: 'https://mage-people.com/product/event-frontend-submit-addon-for-event-manager/', description: 'This is event marketplace addon that is needed to allow event submit from frontend. Multiple organisers can sell tickets together in a same site.' },
      { id: 'woocommerce-event-qr-code', title: 'WooCommerce Event QR Code', version: '3.0.5', type: 'Check‑in', docLink: '/addons/wpevently/woocommerce-event-qr-code', buyLink: 'https://mage-people.com/product/woocommerce-event-qr-code-addon/', description: 'QR code addon is needed to validate the ticket. If you have a large event then this addon must need to check ticket validity by scanning by QR scanner or mobile.' },
      { id: 'woocommerce-event-waitlist', title: 'WooCommerce Event Waitlist', version: '4.0.5', type: 'Capacity', docLink: '/addons/wpevently/woocommerce-event-waitlist', buyLink: 'https://mage-people.com/product/woocommerce-event-waitlist-addon/', description: 'Waitlist addon is very useful, if any ticket became sold out organiser can get subscription for next available ticket sell.' },
      { id: 'woocommerce-event-calendar', title: 'WooCommerce Event Calendar', version: '3.1.4', type: 'Display', docLink: '/addons/wpevently/woocommerce-event-calendar', buyLink: 'https://mage-people.com/product/woocommerce-event-calendar-addon/', description: 'Event Calendar addon is a nice enhancement of event list display in calendar so that everyone can easily understand event date.' },
      { id: 'book-events-from-dashboard', title: 'Book Events from Dashboard', version: '4.1.5', type: 'Admin', docLink: '/addons/wpevently/book-events-from-dashboard', buyLink: 'https://mage-people.com/product/woocommerce-event-book-an-event-from-dashboard/', description: 'This Addon is mainly used for admin, if anyone wants to get order offline like phone order then after taking order admin can add attendee from dashboard.' },
      { id: 'email-reminder', title: 'Email Reminder', version: '2.0.0', type: 'Notification', docLink: '/addons/wpevently/email-reminder', buyLink: 'https://mage-people.com/product/event-email-reminder-addon/', description: 'Send automatic reminder emails before an event. This helps reduce no-shows and keeps attendees informed.' },
      { id: 'group-ticket-qty', title: 'Group Ticket Qty', version: '1.0.0', type: 'Ticketing', docLink: '/addons/wpevently/group-ticket-qty', buyLink: 'https://mage-people.com/product/group-ticket-qty-addon-for-event-manager-plugin/', description: 'Enable customers to purchase multiple tickets in groups with flexible quantity selection options.' },
      { id: 'event-seat-plan', title: 'Event Seat Plan', version: '2.3.2', type: 'Layout', docLink: '/addons/wpevently/event-seat-plan', buyLink: 'https://mage-people.com/product/seat-plan-addon-for-event-manager/', description: 'A seat plan addon is needed for that organiser who wants to display a seat plan for customers to choose seating during event ticket buying.' },
      { id: 'membership-price', title: 'Membership Price', version: '4.0.8', type: 'Pricing', docLink: '/addons/wpevently/membership-price', buyLink: 'https://mage-people.com/product/membership-pricing-for-event-manager-plugin/', description: 'A membership pricing addon for the event is needed for that organiser who wants to offer different pricing based on the user role of a WordPress website.' },
      { id: 'event-duplicator', title: 'Event Duplicator', version: '1.0.7', type: 'Utility', docLink: '/addons/wpevently/event-duplicator', buyLink: 'https://mage-people.com/product/woocommerce-event-duplicator-addon/', description: 'Duplicator addon mainly needed to save time while event creating, if you have an already created event and you want to duplicate that event then this addon needed.' },
      { id: 'category-based-ticket-type', title: 'Category Based Ticket Type', version: '1.0.0', type: 'Ticketing', docLink: '/addons/wpevently/category-based-ticket-type', buyLink: 'https://mage-people.com/product/category-based-ticket-type-addon-for-event-manager-plugin/', description: 'Assign different ticket types based on categories for better organization and flexible event pricing options.' },
      { id: 'woocommerce-event-coupon-code', title: 'WooCommerce Event Coupon Code', version: '1.0.0', type: 'Marketing', docLink: '/addons/wpevently/woocommerce-event-coupon-code', buyLink: 'https://mage-people.com/product/woocommerce-event-coupon-code-addon/', description: 'Event coupon addon that is used for marketing purpose and giving discount to customer for boosting sell.' },
      { id: 'review-and-rating', title: 'Review and Rating', version: '1.0.0', type: 'Marketing', docLink: '/addons/wpevently/review-and-rating', buyLink: 'https://mage-people.com/product/review-and-rating-addon-for-event-manager/', description: 'The Event Review and Rating Addon is a fantastic value-added offering designed to help businesses gather feedback from customers about their events.' },
    ],
  },
  wpbusticketly: {
    name: 'WPBusTicketly',
    tagline: 'Bus Booking WpBusTicketly',
    description: 'Sell seats across fixed routes, manage fleets and drivers, and give riders live updates on where their bus is.',
    addons: [
      { id: 'qr-code', title: 'QR Code', version: '3.0.5', type: 'Check‑in', docLink: '/addons/wpbusticketly/qr-code', buyLink: 'https://mage-people.com/product/bus-ticket-booking-with-seat-reservation-pro-addon-qr-code/', description: 'Automatically generates a unique QR code for each booked ticket, embedded in PDF tickets and confirmation emails for fast, contactless boarding.' },
    ],
  },
  wptravelly: {
    name: 'WPTravelly',
    tagline: 'Tour Booking WpTravelly',
    description: 'Package multi‑day trips with guides, pricing in local currency, and bundled extras like transport or meals.',
    addons: [
      { id: 'backend-order', title: 'Backend Order', version: '1.0.1', type: 'Admin', docLink: '/addons/wptravelly/backend-order', buyLink: 'https://mage-people.com/product/backend-order-addon-for-tour-booking-manager/', description: 'Manage tour bookings directly from your WordPress dashboard. Take phone orders or offline sales effortlessly and keep all travel bookings organized in one place.' },
      { id: 'seat-plan', title: 'Seat Plan', version: '1.0.6', type: 'Layout', docLink: '/addons/wptravelly/seat-plan', buyLink: 'https://mage-people.com/product/seat-plan-addon-for-tour-booking-manager/', description: 'Give your travelers control over seat selection during booking. Improves the booking experience and ensures every customer can pick their preferred seats easily.' },
      { id: 'seasonal-pricing', title: 'Seasonal Pricing', version: '1.1.5', type: 'Pricing', docLink: '/addons/wptravelly/seasonal-pricing', buyLink: 'https://mage-people.com/product/seasonal-pricing-addon-for-woocommerce-tour-plugin/', description: 'Offer dynamic tour pricing based on peak seasons, holidays, or special dates. Helps your travel agency boost sales and optimize revenue with smart pricing strategies.' },
      { id: 'group-ticket-quantity', title: 'Group Ticket Quantity', version: '1.1.0', type: 'Ticketing', docLink: '/addons/wptravelly/group-ticket-quantity', buyLink: 'https://mage-people.com/product/group-ticket-quantity-for-tour-plugin-wptravelly/', description: 'Sell group tickets with ease. Set group sizes and discounted rates, encouraging larger bookings while keeping your tours profitable and well-organized.' },
      { id: 'group-bulk-pricing', title: 'Group Pricing & Bulk Pricing', version: '1.0.8', type: 'Pricing', docLink: '/addons/wptravelly/group-bulk-pricing', buyLink: 'https://mage-people.com/product/group-pricing-or-bulk-qty-discount-addon-for-tour-plugin/', description: 'Offer bulk discounts for group travelers. Attract bigger groups and increase sales, while travelers enjoy cost-effective packages.' },
      { id: 'early-bird-pricing', title: 'Early Bird Pricing', version: '1.0.5', type: 'Pricing', docLink: '/addons/wptravelly/early-bird-pricing', buyLink: 'https://mage-people.com/product/early-bird-pricing-addon-for-tour-booking-manager/', description: 'Reward early bookings with special discounts. Perfect for tours that sell fast, this addon encourages travelers to reserve seats quickly, boosting your revenue.' },
      { id: 'qr-code', title: 'QR Code', version: '1.0.6', type: 'Check‑in', docLink: '/addons/wptravelly/qr-code', buyLink: 'https://mage-people.com/product/qr-code-addon-for-tour-booking-manager/', description: 'Validate tickets quickly with QR codes. Travelers receive QR-enabled PDF tickets, making check-ins fast, secure, and fully integrated with your WordPress travel plugin.' },
      { id: 'max-min-booking', title: 'Max‑Min Booking', version: '1.0.0', type: 'Capacity', docLink: '/addons/wptravelly/max-min-booking', buyLink: 'https://mage-people.com/product/tour-booking-max-min-addon/', description: 'Control tour participation with minimum and maximum limits. Ensures every tour has the right number of travelers, helping you plan better and avoid overbooking.' },
      { id: 'buy-x-get-y-free', title: 'Buy X Get Y Free', version: '1.0.0', type: 'Marketing', docLink: '/addons/wptravelly/buy-x-get-y-free', buyLink: 'https://mage-people.com/product/tour-booking-buy-x-and-get-y-free-addon/', description: 'Create attractive promotions for your tours. Offer free tickets when customers buy a set number, driving more sales and increasing customer engagement.' },
    ],
  },
  ecab: {
    name: 'eCab',
    tagline: 'Taxi Cab and Chauffeur Booking eCab',
    description: 'Run on‑demand and pre‑booked rides with fare estimation, driver dispatch, and corporate billing.',
    addons: [
      { id: 'peak-hour-pricing', title: 'Taxi Peak Hour Pricing', version: '1.0.0', type: 'Pricing', docLink: '/addons/ecab/peak-hour-pricing', buyLink: 'https://mage-people.com/product/taxi-peak-hour-pricing-addon/', description: 'Set dynamic fares during peak hours to maximize revenue. Customize rates for different times of the day and make pricing simple and efficient.' },
      { id: 'distance-tier-pricing', title: 'Distance Tier Pricing', version: '1.0.0', type: 'Pricing', docLink: '/addons/ecab/distance-tier-pricing', buyLink: 'https://mage-people.com/product/distance-based-tier-pricing-for-e-cab/', description: 'Charge accurately with tiered pricing based on distance. Create flexible fare rules to match short, medium, or long rides and increase your earning potential.' },
    ],
  },
  wprently: {
    name: 'WPRently',
    tagline: 'Booking and Rental Manager WpRently',
    description: 'Run a rental counter for gear, tools, or venue equipment with deposits, availability, and return tracking built in.',
    addons: [
      { id: 'min-max-booking-limit', title: 'Min and Max Booking Limit', version: '1.0.1', type: 'Capacity', docLink: '/addons/wprently/min-max-booking-limit', buyLink: 'https://mage-people.com/product/min-and-max-booking-day-for-booking-and-rental-plugin/', description: 'Set minimum and maximum booking limits for rental items. Helps control rental quantity per customer and keeps your inventory usage balanced and well-managed.' },
      { id: 'seasonal-pricing-management', title: 'Seasonal Pricing Management', version: '1.0.4', type: 'Pricing', docLink: '/addons/wprently/seasonal-pricing-management', buyLink: 'https://mage-people.com/product/booking-and-rental-manager-for-woocommerce-addon-seasonal-pricing/', description: 'Apply different rental prices based on seasons, dates, or time ranges. Helps adjust pricing dynamically during peak and off-peak periods for better revenue control.' },
      { id: 'multi-day-discount-pricing', title: 'Multi‑Day Discount Pricing', version: '1.0.2', type: 'Pricing', docLink: '/addons/wprently/multi-day-discount-pricing', buyLink: 'https://mage-people.com/product/multi-day-price-saver-addon-for-wprently/', description: 'Offer special discounts for multi-day rentals. Encourages longer bookings and helps increase overall rental value while giving customers better pricing options.' },
      { id: 'admin-backend-order', title: 'Admin Backend Order', version: '1.0.5', type: 'Admin', docLink: '/addons/wprently/admin-backend-order', buyLink: 'https://mage-people.com/product/backend-order-addon-wprently/', description: 'Create and manage rental orders directly from the admin dashboard. Place bookings manually for customers and maintain full control over rental operations.' },
      { id: 'pricing-discount-over-x-days', title: 'Pricing Discount Over x Days', version: '1.0.7', type: 'Pricing', docLink: '/addons/wprently/pricing-discount-over-x-days', buyLink: 'https://mage-people.com/product/pricing-discount-over-x-day-addon-for-rental-and-booking-plugin/', description: 'Enable rental business owners to set discounts based on the quantity or number of days rented.' },
    ],
  },
};
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [expanded, setExpanded] = useState({});

  const toggleAddon = useCallback((pluginKey, addonId) => {
    setExpanded((prev) => ({
      ...prev,
      [`${pluginKey}-${addonId}`]: !prev[`${pluginKey}-${addonId}`],
    }));
  }, []);

  const toggleAll = useCallback((pluginKey, addons) => {
    const allExpanded = addons.every(
      (a) => expanded[`${pluginKey}-${a.id}`]
    );
    setExpanded((prev) => {
      const next = { ...prev };
      addons.forEach((a) => {
        next[`${pluginKey}-${a.id}`] = !allExpanded;
      });
      return next;
    });
  }, [expanded]);

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
          <div className={styles.summaryInline}>
            <span className={styles.summaryItem}><strong>9</strong> Plugins</span>
            <span className={styles.summarySep}></span>
            <span className={styles.summaryItem}><strong>31</strong> Addons</span>
            <span className={styles.summarySep}></span>
            <span className={styles.summaryItem}><strong>44</strong> Doc Pages</span>
            <span className={styles.summarySep}></span>
            <span className={styles.summaryItem}><strong>7</strong> Categories</span>
          </div>
        </div>
      </header>

      <main>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.pluginGrid}>
              {plugins.map((plugin) => (
                <div key={plugin.title} className={styles.pluginCard}>
                  <div className={styles.cardTop}>
                    <img
                      src={`/img/plugins/${plugin.icon}`}
                      alt={plugin.title}
                      className={styles.cardIcon}
                    />
                    <div className={styles.cardInfo}>
                      <Link to={plugin.docLink} className={styles.cardName}>
                        {plugin.tagline}
                      </Link>
                      <span className={styles.cardSub}>{plugin.description}</span>
                      <div className={styles.cardVersionRow}>
                        <span className={styles.cardVersion}>V<strong>{plugin.version}</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardMeta}>
                      {plugin.addons > 0 ? (
                        <a href={`#${plugin.addonKey}`} className={styles.countLink}>
                          {plugin.addons} addon{plugin.addons > 1 ? 's' : ''}
                        </a>
                      ) : null}
                    </div>
                    <div className={styles.cardActions}>
                      <a
                        href={plugin.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardBuy}>
                        Buy Plugin
                      </a>
                      <Link to={plugin.docLink} className={styles.cardDocs}>
                        Read Docs
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {plugins.filter((p) => p.addonKey && addonsData[p.addonKey]).map((plugin) => {
          const section = addonsData[plugin.addonKey];
          const isAllExpanded = section.addons.every(
            (a) => expanded[`${plugin.addonKey}-${a.id}`]
          );
          return (
            <section key={plugin.addonKey} className={styles.addonSection} id={plugin.addonKey}>
              <div className={styles.container}>
              <div className={`${styles.ticket}`}>
                <div className={styles.ticketHead}>
                  <div>
                    <span className={styles.ticketId}>{plugin.addonKey}</span>
                    <h2>{section.tagline.replace(/ \w+$/, '')} <span className={styles.ticketSubTitle}>{section.tagline.split(' ').pop()}</span></h2>
                    <p>{section.description}</p>
                  </div>
                  <div className={styles.ticketMeta}>
                    <span className={styles.ticketAddonCount}>
                        Addons<strong className={styles.ticketAddonCountValue}>{String(section.addons.length).padStart(2, '0')}</strong>
                      </span>
                    <button className={styles.toggleAll} onClick={() => toggleAll(plugin.addonKey, section.addons)}>
                      {isAllExpanded ? 'Collapse all' : 'Expand all'}
                    </button>
                  </div>
                </div>

                <div className={styles.perforation}></div>

                <div className={styles.addonList}>
                  <div className={styles.addonListHead}>
                    <span className={styles.addonListHeadCode}>Code</span>
                    <span className={styles.addonListHeadName}>Title</span>
                    <span className={styles.headGroup}>
                      <span className={styles.headTypeLabel}>Addon Type</span>
                    </span>
                  </div>
                  {section.addons.map((addon, idx) => {
                    const isOpen = expanded[`${plugin.addonKey}-${addon.id}`] || false;
                    return (
                      <div key={addon.id} className={styles.addonItem}>
                        <button
                          className={styles.addonRow}
                          onClick={() => toggleAddon(plugin.addonKey, addon.id)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.addonCode}>{String(idx + 1).padStart(2, '0')}</span>
                          <span className={styles.addonNameWrap}>
                            <Link to={addon.docLink} className={styles.addonNameLink} onClick={(e) => e.stopPropagation()}>
                              {addon.title}
                            </Link>
                            <span className={styles.addonBadge}>Add‑On</span>
                            <span className={styles.addonVersion}>V{addon.version}</span>
                          </span>
                          <span className={styles.addonTag}>{addon.type}</span>
                          <span className={styles.addonActions} onClick={(e) => e.stopPropagation()}>
                            <a href={addon.buyLink} target="_blank" rel="noopener noreferrer" className={styles.buyButton}>Buy Addon</a>
                            <Link to={addon.docLink} className={styles.readButton}>Read Docs</Link>
                          </span>
                          <span className={`${styles.chevron} ${isOpen ? styles.chevronExpanded : ''}`}></span>
                        </button>
                        <div className={`${styles.addonPanel} ${isOpen ? styles.addonPanelOpen : ''}`}>
                          <div className={styles.addonPanelInner}>
                            {addon.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              </div>
            </section>
          );
        })}
      </main>
    </Layout>
  );
}
