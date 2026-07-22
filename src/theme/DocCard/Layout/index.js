import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Heading from '@theme/DocCard/Heading';
import Description from '@theme/DocCard/Description';

import styles from './styles.module.css';

// Same as the upstream DocCard/Layout, except using Infima's "padding--md"
// (1rem) instead of "padding--lg" (2rem). Both are Infima utility classes
// declared with !important inside the "docusaurus.infima" cascade layer, so
// overriding the padding value from custom.css can't win there - swapping
// the class here is the only way to actually change it.
function Container({className, href, children}) {
  return (
    <Link
      href={href}
      className={clsx(
        'card padding--md',
        ThemeClassNames.docs.docCard.container,
        styles.cardContainer,
        className,
      )}>
      {children}
    </Link>
  );
}

export default function DocCardLayout({item, className, href, icon, title, description}) {
  return (
    <Container href={href} className={className}>
      <Heading item={item} icon={icon} title={title} />
      {description && <Description item={item} description={description} />}
    </Container>
  );
}
