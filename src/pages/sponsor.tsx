import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './sponsor.module.css';

function SponsorHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>Support AGIT Development</h1>
        <p className={styles.description}>
          AGIT is open source and free to use. Your sponsorship helps fund continued development,
          new features, and maintaining the infrastructure that keeps AGIT running.
        </p>
      </div>
    </header>
  );
}

type WhyItem = {
  title: string;
  description: string;
};

const WhyList: WhyItem[] = [
  {
    title: 'Accelerate Development',
    description: 'Help us ship new features faster: better editor integrations, cloud sync, team collaboration.',
  },
  {
    title: 'Ensure Sustainability',
    description: 'Keep AGIT maintained and secure. Fund dependency updates, security audits, and infrastructure.',
  },
  {
    title: 'Show Support',
    description: 'Be part of the community building the future of AI-assisted development workflows.',
  },
];

function WhySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Why Sponsor?</h2>
        <div className={styles.grid}>
          {WhyList.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type TierItem = {
  title: string;
  amount: string;
  benefits: string[];
  featured?: boolean;
};

const TierList: TierItem[] = [
  {
    title: 'Supporter',
    amount: '$3',
    benefits: ['Support open source', 'Sponsor badge on GitHub', 'Our gratitude'],
  },
  {
    title: 'Backer',
    amount: '$10',
    benefits: ['Everything in Supporter', 'Early access to new features', 'Priority support', 'Vote on roadmap priorities'],
    featured: true,
  },
  {
    title: 'Gold Sponsor',
    amount: '$50',
    benefits: ['Everything in Backer', 'Logo on website & README', 'Direct communication channel', 'Feature request priority'],
  },
];

function TiersSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Sponsorship Tiers</h2>
        <div className={styles.tiersGrid}>
          {TierList.map((tier, idx) => (
            <div key={idx} className={clsx(styles.tierCard, tier.featured && styles.featured)}>
              {tier.featured && <span className={styles.popularBadge}>Popular</span>}
              <h3>{tier.title}</h3>
              <div className={styles.amount}>{tier.amount}<span>/month</span></div>
              <ul>
                {tier.benefits.map((benefit, bidx) => (
                  <li key={bidx}>{benefit}</li>
                ))}
              </ul>
              <Link
                className={clsx('button', tier.featured ? 'button--primary' : 'button--secondary', 'button--block')}
                href="https://www.patreon.com/cw/agitccm"
              >
                Become a {tier.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OneTimeSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>One-Time Donations</h2>
        <div className={styles.oneTime}>
          <p>
            Prefer a one-time contribution? You can support AGIT with a single donation via Patreon.
          </p>
          <Link className="button button--primary button--lg" href="https://www.patreon.com/cw/agitccm">
            Make a One-Time Donation
          </Link>
        </div>
      </div>
    </section>
  );
}

function CurrentSponsors() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Current Sponsors</h2>
        <div className={styles.sponsorsPlaceholder}>
          <p>Be the first to support AGIT! Your name/logo will appear here.</p>
          <div className={styles.logoPlaceholder}>
            <span>Your Logo Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}

type OtherWayItem = {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
};

const OtherWaysList: OtherWayItem[] = [
  {
    title: 'Star on GitHub',
    description: 'Help others discover AGIT by starring the repository.',
    link: 'https://github.com/agit-stuff/agit',
    linkText: 'Star Repository',
  },
  {
    title: 'Report Issues',
    description: 'Found a bug? Let us know and help improve AGIT.',
    link: 'https://github.com/agit-stuff/agit/issues',
    linkText: 'Open Issue',
  },
  {
    title: 'Contribute Code',
    description: 'Submit PRs for bug fixes, features, or documentation.',
    link: 'https://github.com/agit-stuff/agit/blob/main/CONTRIBUTING.md',
    linkText: 'Contribution Guide',
  },
  {
    title: 'Spread the Word',
    description: 'Share AGIT with your team and on social media.',
  },
];

function OtherWaysSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Other Ways to Help</h2>
        <div className={styles.grid}>
          {OtherWaysList.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <Link href={item.link}>{item.linkText} &rarr;</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Sponsor(): JSX.Element {
  return (
    <Layout
      title="Sponsor AGIT"
      description="Support AGIT development and help build the future of AI-assisted development workflows.">
      <main>
        <SponsorHeader />
        <WhySection />
        <TiersSection />
        <OneTimeSection />
        <CurrentSponsors />
        <OtherWaysSection />
      </main>
    </Layout>
  );
}
