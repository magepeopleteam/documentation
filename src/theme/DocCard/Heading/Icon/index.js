import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

// Matches the plugin icons already used on the homepage (src/pages/index.js)
// so a plugin's category card shows the same artwork everywhere instead of
// Docusaurus's generic "🗃" folder icon.
const PLUGIN_ICONS = {
  WpEvently: 'event.png',
  eCab: 'ecab.png',
  WpTravelly: 'travel.png',
  WpBookingly: 'service.png',
  WpBusTicketly: 'bus.png',
  WpRently: 'rental.png',
  'Car Rental': 'car-rental.png',
  'Advanced Discount Coupon and Store Credit': 'discount.png',
  WpDepositly: 'partial.png',
};

export default function DocCardHeadingIcon({item, icon}) {
  const label = 'label' in item ? item.label : undefined;
  const pluginIcon = label && PLUGIN_ICONS[label];
  const imgSrc = useBaseUrl(pluginIcon ? `/img/plugins/${pluginIcon}` : '');

  return (
    <span
      className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon)}>
      {pluginIcon ? (
        <img src={imgSrc} alt="" className={styles.cardTitleIconImg} />
      ) : (
        icon
      )}
    </span>
  );
}
