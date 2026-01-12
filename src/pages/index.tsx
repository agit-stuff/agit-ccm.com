import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <img src="/img/agit-logo.svg" alt="AGIT" className={styles.heroLogo} />
        <p className={styles.heroTagline}>Code Context Management</p>
        <p className={styles.heroDescription}>
          Capture the <strong>reasoning context</strong> (Why/How) alongside your <strong>code changes</strong> (What).
          AGIT creates a "Neural Graph" parallel to Git's commit graph, giving you a complete history of
          not just what changed, but <em>why</em> it changed and <em>how</em> the decision was made.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/installation">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" href="https://github.com/agit-stuff/agit">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function Terminal() {
  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <span className={clsx(styles.terminalDot, styles.red)}></span>
        <span className={clsx(styles.terminalDot, styles.yellow)}></span>
        <span className={clsx(styles.terminalDot, styles.green)}></span>
      </div>
      <div className={styles.terminalBody}>
        <div className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>
          <span className={styles.terminalCommand}> agit init</span>
        </div>
        <div className={clsx(styles.terminalLine, styles.terminalOutput)}>Initialized AGIT in /your-project/.agit</div>
        <div className={clsx(styles.terminalLine, styles.terminalOutput)}>Created: .cursorrules, CLAUDE.md, .windsurfrules</div>
        <div className={styles.terminalLine}>&nbsp;</div>
        <div className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>
          <span className={styles.terminalCommand}> agit record "Planning to refactor auth module"</span>
        </div>
        <div className={clsx(styles.terminalLine, styles.terminalOutput)}>Recorded thought to staging area</div>
        <div className={styles.terminalLine}>&nbsp;</div>
        <div className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>
          <span className={styles.terminalCommand}> agit commit -m "Refactor auth module"</span>
        </div>
        <div className={clsx(styles.terminalLine, styles.terminalOutput)}>Created git commit:    e8d4f1a</div>
        <div className={clsx(styles.terminalLine, styles.terminalOutput)}>Created neural commit: a3f7b2c</div>
        <div className={clsx(styles.terminalLine, styles.terminalOutput)}>Summary: Intent: Refactor auth module. Plan: Add try/catch around token validation.</div>
      </div>
    </div>
  );
}

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamless Integration',
    description: 'Works with Cursor, Claude Code, Windsurf, and other AI coding assistants. Your AI automatically logs thoughts via MCP.',
  },
  {
    title: 'Zero Configuration',
    description: 'Just run `agit init` and you\'re ready. Auto-generates config files for all major AI editors.',
  },
  {
    title: 'Neural Graph',
    description: 'Creates a parallel graph of reasoning alongside Git\'s commit graph. Query the "why" behind any change.',
  },
  {
    title: 'Git Compatible',
    description: 'Built on libgit2, works alongside your existing Git workflow. Not a replacement—an enhancement.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Why AGIT?</h2>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.featureCard}>
            <h3>The "Seamless Echo" Strategy</h3>
            <p>Unlike traditional tools that call LLMs, AGIT inverts the flow. Your <strong>AI editor</strong> pushes context to AGIT via MCP:</p>
            <ol className={styles.stepsList}>
              <li><strong>User asks:</strong> "Fix the auth bug"</li>
              <li><strong>AI logs intent:</strong> <code>agit_log_step(role="user", ...)</code></li>
              <li><strong>AI plans:</strong> "I'll add a try/catch block"</li>
              <li><strong>AI logs plan:</strong> <code>agit_log_step(role="ai", ...)</code></li>
              <li><strong>User commits:</strong> <code>agit commit -m "Fix auth bug"</code></li>
              <li><strong>AGIT synthesizes:</strong> Links Intent + Plan to git commit</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickInstall() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Quick Install</h2>
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span className={clsx(styles.terminalDot, styles.red)}></span>
            <span className={clsx(styles.terminalDot, styles.yellow)}></span>
            <span className={clsx(styles.terminalDot, styles.green)}></span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>#</span>
              <span className={styles.terminalOutput}> macOS</span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>$</span>
              <span className={styles.terminalCommand}> brew tap agit-stuff/agit && brew install agit</span>
            </div>
            <div className={styles.terminalLine}>&nbsp;</div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>#</span>
              <span className={styles.terminalOutput}> Linux / CI</span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>$</span>
              <span className={styles.terminalCommand}> curl -fsSL https://agit.dev/install.sh | bash</span>
            </div>
            <div className={styles.terminalLine}>&nbsp;</div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>#</span>
              <span className={styles.terminalOutput}> Windows (PowerShell)</span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>&gt;</span>
              <span className={styles.terminalCommand}> scoop bucket add agit https://github.com/agit-stuff/agit; scoop install agit</span>
            </div>
          </div>
        </div>
        <div className={styles.ctaWrapper}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/installation">
            All Installation Options
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="AI-Native Git Wrapper"
      description="Capture the reasoning context alongside your code changes. AGIT creates a Neural Graph parallel to Git's commit graph.">
      <HomepageHeader />
      <main>
        <Terminal />
        <FeaturesSection />
        <HowItWorks />
        <QuickInstall />
      </main>
    </Layout>
  );
}
