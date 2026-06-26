const h = React.createElement;

function Head({ title, description }) {
  React.useEffect(() => {
    document.title = title || 'Magepeople — Documentation';
    var meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description || 'Complete documentation for events, bookings, rentals, and payment solutions.';
  }, [title, description]);
  return null;
}

function Topbar({ navLinks, logoPath }) {
  var homeHref = logoPath ? logoPath.replace('images/MG-web-logo.webp', 'index.html') : 'index.html';
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Auto-close the mobile menu when the viewport grows back to desktop width.
  React.useEffect(function () {
    function onResize() { if (window.innerWidth > 880) setMenuOpen(false); }
    window.addEventListener('resize', onResize);
    return function () { window.removeEventListener('resize', onResize); };
  }, []);

  // Lock background scrolling while the mobile drawer is open.
  React.useEffect(function () {
    document.body.classList.toggle('nav-locked', menuOpen);
    return function () { document.body.classList.remove('nav-locked'); };
  }, [menuOpen]);

  // Live clock — runs on every page that renders the topbar, so the time works
  // globally without each page needing its own inline tick script.
  React.useEffect(function () {
    var el = document.getElementById('clock');
    if (!el) return;
    function pad(n) { return n.toString().padStart(2, '0'); }
    function tick() {
      var d = new Date();
      el.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    }
    tick();
    var id = setInterval(tick, 1000);
    return function () { clearInterval(id); };
  }, []);

  function closeMenu() { setMenuOpen(false); }

  // Derive a "back" target from the breadcrumb: the deepest nav link that points
  // to a real page (not the current page marker '#'/'' and not an in-page anchor).
  // Home pages use only '#section' anchors, so they get no back button.
  var backLink = null;
  for (var bi = 0; bi < navLinks.length; bi++) {
    var bhref = navLinks[bi].href;
    if (bhref && bhref !== '#' && bhref.charAt(0) !== '#') backLink = navLinks[bi];
  }

  return h('header', { className: 'topbar' + (menuOpen ? ' menu-open' : '') },
    h('div', { className: 'brand' },
      h('a', { href: homeHref, onClick: closeMenu },
        h('img', { src: logoPath || '../images/MG-web-logo.webp', alt: 'Magepeople' })
      )
    ),
    backLink ? h('a', {
      className: 'topbar-back',
      href: backLink.href,
      'aria-label': 'Back to ' + backLink.label,
      onClick: closeMenu
    },
      h('span', { className: 'topbar-back-arrow', 'aria-hidden': 'true' }, '←'),
      h('span', { className: 'topbar-back-label' }, backLink.label)
    ) : null,
    h('button', {
      className: 'nav-toggle',
      type: 'button',
      'aria-label': menuOpen ? 'Close navigation menu' : 'Open navigation menu',
      'aria-expanded': String(menuOpen),
      'aria-controls': 'topbar-collapse',
      onClick: function () { setMenuOpen(function (o) { return !o; }); }
    },
      h('span', null), h('span', null), h('span', null)
    ),
    h('div', { className: 'topbar-collapse', id: 'topbar-collapse' },
      h('nav', { className: 'topnav', id: 'topnav' },
        ...navLinks.map(link =>
          h('a', { key: link.href, href: link.href, onClick: closeMenu }, link.label)
        )
      ),
      h('div', { className: 'search-wrap' },
        h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
          h('circle', { cx: '11', cy: '11', r: '7' }),
          h('path', { d: 'M21 21l-4.3-4.3' })
        ),
        h('input', { id: 'searchInput', type: 'text', placeholder: 'Search plugins or addons\u2026', autoComplete: 'off', onKeyDown: function(e) {
          if (e.key === 'Enter') {
            var q = e.target.value.trim();
            if (q && !document.querySelector('.plugin')) {
              window.location.href = homeHref + '?q=' + encodeURIComponent(q);
            }
          }
        } })
      ),
      h('div', { className: 'clock mono', id: 'clock' }, '--:--:--')
    )
  );
}

function BoardRow({ code, img, alt, dest, sub, badge, countHref, countLabel, goHref, delay }) {
  return h('div', { className: 'board-row' },
    h('span', { className: 'code flap', style: { animationDelay: delay } },
      h('img', { src: img, alt: alt })
    ),
    h('span', { className: 'flap', style: { animationDelay: delay } },
      h('span', { className: 'dest' },
        dest,
        badge ? h('span', { className: 'pro-badge' }, 'PRO') : null
      ),
      h('span', { className: 'sub' }, sub)
    ),
    h('div', { className: 'count-wrap' },
      h('a', { href: countHref, className: 'count flap', style: { animationDelay: delay } }, countLabel)
    ),
    h('a', { href: goHref, className: 'go flap', style: { animationDelay: delay } }, 'Read Documentation')
  );
}

function Hero({ title, description, rows }) {
  return h('section', { className: 'hero' },
    h('div', { className: 'eyebrow' }, 'Documentation Hub \u00b7 WordPress Booking Suite'),
    h('h1', null, title || 'All-in-One WordPress Booking & Management Plugin Suite'),
    h('p', { className: 'lede' }, description),
    h('div', { className: 'board' },
      h('div', { className: 'board-head' },
        h('span', null, 'Logo'),
        h('span', null, 'Plugin'),
        h('span', null, 'Addons'),
        h('span', null, 'Status'),
        h('span', null, 'Jump')
      ),
      ...rows
    )
  );
}

function AddonRow({ code, name, tag, description, docHref, buyUrl }) {
  const [expanded, setExpanded] = React.useState(false);
  const panelId = 'panel-' + code;
  const hasDocs = docHref && docHref !== '#';
  const hasBuy = buyUrl && buyUrl !== '#';
  return h('li', { className: 'addon', 'data-name': name },
    h('button',
      {
        className: 'addon-row',
        'aria-expanded': String(expanded),
        onClick: () => setExpanded(!expanded)
      },
      h('span', { className: 'addon-code mono' }, code),
      h('span', { className: 'addon-name-wrap' },
        h('span', { className: 'addon-name' }, name)
      ),
      h('span', { className: 'addon-tag' }, tag),
      h('span', { className: 'btn-group' },
        hasBuy
          ? h('a', {
              href: buyUrl,
              className: 'buy-btn',
              target: '_blank',
              rel: 'noopener',
              onClick: e => e.stopPropagation()
            }, 'Buy Addon')
          : null,
        hasDocs
          ? h('a', {
              href: docHref,
              className: 'doc-btn',
              onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                setExpanded(true);
              }
            }, 'Read Docs')
          : h('span', { className: 'doc-btn disabled' }, 'Not Ready')
      ),
      h('span', { className: 'chevron' })
    ),
    h('div',
      { className: 'addon-panel', id: panelId, style: { display: expanded ? 'block' : 'none' } },
      h('div', { className: 'addon-panel-inner' }, description)
    )
  );
}

function PluginSection({ id, dataName, ticketId, title, subtitle, description, addons, showToggle }) {
  const [allOpen, setAllOpen] = React.useState(false);
  const addonList = addons.map(a =>
    h(AddonRow, {
      key: a.code,
      code: a.code,
      name: a.name,
      tag: a.tag,
      description: a.description,
      docHref: a.docHref || '#',
      buyUrl: a.buyUrl || '#'
    })
  );
  return h('section', { className: 'plugin', id, 'data-name': dataName },
    h('div', { className: 'ticket' },
      h('div', { className: 'ticket-head' },
        h('div', null,
          h('span', { className: 'ticket-id' }, ticketId),
          h('h2', null, title, subtitle ? h('span', { className: 'sub-title' }, subtitle) : null),
          h('p', null, description)
        ),
        h('div', { className: 'ticket-meta' },
          h('a', { href: '#', className: 'doc-btn' }, 'Read Docs')
        )
      )
    ),
    addons.length > 0 ? h('div', { className: 'plugin-controls' },
      h('p', { className: 'addon-count mono' }, addons.length + ' addons'),
      showToggle !== false ? h('button', {
        className: 'toggle-all',
        onClick: () => setAllOpen(!allOpen)
      }, allOpen ? 'Collapse all \u25b2' : 'Expand all \u25bc') : null
    ) : null,
    addons.length > 0 ? h('ul', { className: 'addons', 'data-group': id }, addonList) : null
  );
}

function Footer({ copyright, pluginCount, addonCount }) {
  if (copyright) {
    return h('footer', null,
      h('p', null,
        '\u00a9 2026 ',
        h('a', { href: 'https://mage-people.com', target: '_blank', rel: 'noopener' }, 'MagePeople'),
        '. All rights reserved.'
      )
    );
  }
  return h('footer', null,
    'BOOKING SUITE DOCS \u00b7 ' + (pluginCount || '7') + ' PLUGINS \u00b7 ' + (addonCount || '44') + ' PLUGIN ADDONS \u00b7 BUILT WITH PLAIN HTML, CSS & JS'
  );
}

function initCopyButtons(){
  document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      var code = btn.getAttribute('data-code') || btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(code).then(function(){
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function(){ btn.textContent = 'Copy'; btn.classList.remove('copied'); },2000);
      });
    });
  });
}

function initVideoPlayers(){
  document.querySelectorAll('.video-player').forEach(function(wrap){
    var vid = wrap.querySelector('video');
    var btn = wrap.querySelector('.video-btn');
    if(!vid||!btn)return;
    vid.removeAttribute('controls');
    function openModal(){
      var src = vid.getAttribute('src');
      var overlay = document.createElement('div');
      overlay.className = 'video-modal';
      overlay.innerHTML = '<button class="video-close">&times;</button><video src="'+src+'" controls autoplay></video>';
      document.body.appendChild(overlay);
      overlay.querySelector('.video-close').addEventListener('click',function(){
        overlay.querySelector('video').pause();
        overlay.remove();
      });
      overlay.addEventListener('click',function(e){
        if(e.target===overlay){ overlay.querySelector('video').pause(); overlay.remove(); }
      });
    }
    btn.addEventListener('click',function(e){ e.stopPropagation(); openModal(); });
    wrap.addEventListener('click',function(e){ if(e.target===wrap||e.target===vid) openModal(); });
  });
}

function renderFooter(opts) {
  var el = document.getElementById('footer-root');
  if (el) ReactDOM.render(h(Footer, opts || {}), el);
}

function renderTopbar(navLinks, logoPath) {
  const el = document.getElementById('topbar-root');
  if (el) ReactDOM.render(
    h(React.Fragment, null,
      h(Head, { title: 'Magepeople — Documentation', description: 'Complete documentation for events, bookings, rentals, and payment solutions.' }),
      h(Topbar, { navLinks, logoPath })
    ),
    el
  );
}

function DocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/wpevently/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'elementor-guidelines.html', label: 'Elementor Guidelines' },
    { href: base + 'template-override.html', label: 'Template Override' },
    { href: base + 'action-hooks.html', label: 'Action Hooks' },
    { href: base + 'rest-api.html', label: 'REST API' },
    { href: base + 'faq.html', label: 'FAQ' },
    { href: '/index.html#wpevently', label: 'Available Addons' }
  ];

  var addonLinks = [
    { href: base + 'addons/min-max-quantity.html', label: 'Min/Max Quantity' },
    { href: base + 'addons/book-events-from-dashboard/index.html', label: 'Book Events from Dashboard' },
    { href: base + 'addons/event-seat-plan/index.html', label: 'Event Seat Plan' },
    { href: base + 'addons/email-reminder/index.html', label: 'Email Reminder' },
    { href: base + 'addons/event-duplicator/index.html', label: 'Event Duplicator' },
    { href: base + 'addons/group-ticket-qty/index.html', label: 'Group Ticket Qty' },
    { href: base + 'addons/event-max-min-quantity-limiting/index.html', label: 'Event Max-Min Qty Limiting' },
    { href: base + 'addons/category-based-ticket-type/index.html', label: 'Category Based Ticket Type' },
    { href: base + 'addons/woocommerce-event-calendar/index.html', label: 'Event Calendar' },
    { href: base + 'addons/woocommerce-event-qr-code/index.html', label: 'Event QR Code' },
    { href: base + 'addons/membership-price/index.html', label: 'Membership Price' },
    { href: base + 'addons/marketplace-frontend-submission/index.html', label: 'Marketplace / Frontend Submission' },
    { href: base + 'addons/woocommerce-event-coupon-code/index.html', label: 'Event Coupon Code' },
    { href: base + 'addons/review-and-rating/index.html', label: 'Review & Rating' },
    { href: base + 'addons/woocommerce-event-waitlist/index.html', label: 'Event Waitlist' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      }),
      h('h3', { className: 'docs-sidebar-title' }, 'Addons'),
      ...addonLinks.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebar(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(DocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function BusDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/wpbusticketly/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'general-guidelines.html', label: 'General Guidelines' },
    { href: base + 'bus-manager-settings.html', label: 'Bus Manager Settings' },
    { href: base + 'rest-api.html', label: 'REST API' },
    { href: base + 'faq.html', label: 'FAQ' },
    { href: '/index.html#wpbusticketly', label: 'Available Addons' }
  ];

  var addonLinks = [
    { href: base + 'addons/woocommerce-bus-qr-code/', label: 'QR Code' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      }),
      h('h3', { className: 'docs-sidebar-title' }, 'Addons'),
      ...addonLinks.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarBus(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(BusDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function TravellyDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/wptravelly/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'template-override.html', label: 'Template Override' },
    { href: base + 'elementor-guidelines.html', label: 'Elementor Guidelines' },
    { href: base + 'general-guidelines.html', label: 'General Guidelines' },
    { href: base + 'faq.html', label: 'FAQ' },
    { href: '/index.html#wptravelly', label: 'Available Addons' }
  ];

  var addonLinks = [
    { href: base + 'addons/backend-order/', label: 'Backend Order' },
    { href: base + 'addons/seat-plan/', label: 'Seat Plan' },
    { href: base + 'addons/seasonal-pricing/', label: 'Seasonal Pricing' },
    { href: base + 'addons/group-ticket-quantity/', label: 'Group Ticket Quantity' },
    { href: base + 'addons/group-bulk-pricing/', label: 'Group & Bulk Pricing' },
    { href: base + 'addons/early-bird-pricing/', label: 'Early Bird Pricing' },
    { href: base + 'addons/qr-code/', label: 'QR Code' },
    { href: base + 'addons/max-min-booking/', label: 'Max-Min Booking' },
    { href: base + 'addons/buy-x-get-y-free/', label: 'Buy X Get Y Free' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      }),
      h('h3', { className: 'docs-sidebar-title' }, 'Addons'),
      ...addonLinks.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarTravelly(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(TravellyDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function BookinglyDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/wpbookingly/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'service-management.html', label: 'Service Management' },
    { href: base + 'staff-scheduling.html', label: 'Staff & Scheduling' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'payment-integration.html', label: 'Payment Integration' },
    { href: base + 'general-guidelines.html', label: 'General Guidelines' },
    { href: base + 'faq.html', label: 'FAQ' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarBookingly(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(BookinglyDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function EcabDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/ecab/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'plugin-settings.html', label: 'Plugin Settings' },
    { href: base + 'general-guidelines.html', label: 'General Guidelines' },
    { href: base + 'pro-features.html', label: 'Pro Features' },
    { href: base + 'faq.html', label: 'FAQ' },
    { href: '/index.html#ecab', label: 'Available Addons' }
  ];

  var addonLinks = [
    { href: base + 'addons/peak-hour-pricing/', label: 'Peak Hour Pricing' },
    { href: base + 'addons/distance-tier-pricing/', label: 'Distance Tier Pricing' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      }),
      h('h3', { className: 'docs-sidebar-title' }, 'Addons'),
      ...addonLinks.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarEcab(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(EcabDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function RentlyDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/wprently/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'general-guidelines.html', label: 'General Guidelines' },
    { href: base + 'global-settings.html', label: 'Global Settings' },
    { href: base + 'faq.html', label: 'FAQ' },
    { href: '/index.html#wprently', label: 'Available Addons' }
  ];

  var addonLinks = [
    { href: base + 'addons/min-max-booking-limit/', label: 'Min and Max Booking Limit' },
    { href: base + 'addons/seasonal-pricing-management/', label: 'Seasonal Pricing Management' },
    { href: base + 'addons/multi-day-discount-pricing/', label: 'Multi-Day Discount Pricing' },
    { href: base + 'addons/admin-backend-order/', label: 'Admin Backend Order' },
    { href: base + 'addons/pricing-discount-over-x-days/', label: 'Pricing Discount Over x Days' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      }),
      h('h3', { className: 'docs-sidebar-title' }, 'Addons'),
      ...addonLinks.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarRently(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(RentlyDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function CarRentalDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/car-rental/';
  var links = [
    { href: base + 'installation-setup.html', label: 'Installation & Setup' },
    { href: base + 'shortcode-guidelines.html', label: 'Shortcode Guidelines' },
    { href: base + 'vehicle-management.html', label: 'Vehicle Management' },
    { href: base + 'pricing-availability.html', label: 'Pricing & Availability' },
    { href: base + 'general-guidelines.html', label: 'General Guidelines' },
    { href: base + 'faq.html', label: 'FAQ' }
  ];

  function isActive(href) {
    var path = window.location.pathname;
    if (href === path) return true;
    if (path.endsWith('/') && href === path + 'index.html') return true;
    return false;
  }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link' + (isActive(link.href) ? ' active' : '')
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarCarRental(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(CarRentalDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function CouponlyDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/advanced-discount-coupon-store-credit/';
  var links = [
    { href: base + 'index.html#installation-setup', label: 'Installation & Setup' },
    { href: base + 'index.html#shortcode-guidelines', label: 'Shortcode Guidelines' },
    { href: base + 'index.html#discount-rules', label: 'Discount Rules' },
    { href: base + 'index.html#store-credit', label: 'Store Credit' },
    { href: base + 'index.html#general-guidelines', label: 'General Guidelines' },
    { href: base + 'index.html#faq', label: 'FAQ' }
  ];

  function isActive(href) { return false; }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link'
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarCouponly(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(CouponlyDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function DeposityDocsSidebar({ activePage, hideBackLink }) {
  var base = '/plugins/wpdeposity/';
  var links = [
    { href: base + 'index.html#installation-setup', label: 'Installation & Setup' },
    { href: base + 'index.html#shortcode-guidelines', label: 'Shortcode Guidelines' },
    { href: base + 'index.html#deposit-types', label: 'Deposit Types' },
    { href: base + 'index.html#payment-management', label: 'Order & Payment Management' },
    { href: base + 'index.html#general-guidelines', label: 'General Guidelines' },
    { href: base + 'index.html#faq', label: 'FAQ' }
  ];

  function isActive(href) { return false; }

  return h('aside', { className: 'docs-sidebar' },
    h('h3', { className: 'docs-sidebar-title' }, 'Documentation'),
    h('nav', { className: 'docs-nav' },
      hideBackLink ? null : h('a', { href: base + 'index.html', className: 'docs-nav-link' }, '\u2190 Back to Overview'),
      ...links.map(function(link) {
        return h('a', {
          key: link.href,
          href: link.href,
          className: 'docs-nav-link'
        }, link.label);
      })
    )
  );
}

function renderDocsSidebarDeposity(activePage, hideBackLink) {
  var el = document.getElementById('sidebar-root');
  if (el) ReactDOM.render(h(DeposityDocsSidebar, { activePage: activePage, hideBackLink: hideBackLink }), el);
}

function renderPage({ title, description, boardRows, plugins, pluginCount, addonCount, navLinks }) {
  const root = document.getElementById('root');
  if (!root) return;

  if (!navLinks) {
    navLinks = plugins.map(p => ({ href: '#' + p.id, label: p.navLabel }));
  }

  ReactDOM.render(
    h(React.Fragment, null,
      h(Head, { title, description }),
      h(Topbar, { navLinks, logoPath: '../images/MG-web-logo.webp' }),
      h(Hero, { title, description, rows: boardRows }),
      h('main', { id: 'main' },
        ...plugins.map(p =>
          h(PluginSection, {
            key: p.id,
            id: p.id,
            dataName: p.dataName,
            ticketId: p.ticketId,
            title: p.title,
            subtitle: p.subtitle,
            description: p.description,
            addons: p.addons
          })
        ),
        h('p', { className: 'no-results', id: 'noResults' }, 'No plugins or addons match that search.')
      ),
      h(Footer, { pluginCount, addonCount })
    ),
    root
  );
}
