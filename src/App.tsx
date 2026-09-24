import { useRef, useState } from 'react'

const asset = (name: string) => `/assets/product/${name}`
// Existing image sources: revenuecat.com/feature/paywalls (paywall examples),
// revenuecat.com/feature/charts (charts-cohort.jpg),
// revenuecat.com/feature/experiments (experiments-results.png), and
// revenuecat.com/customers/floga (floga-site.png).
// Web illustrations: revenuecat.com/billing. The access diagram is explanatory.
// web-billing-campaigns.svg: https://cdn.sanity.io/images/c3qnx9b0/production/994f3be35137e5a7e3ea82da627d319334ce0602-731x598.svg
function ActionIcon({ play = false }: { play?: boolean }) {
  return <span className={`action-icon${play ? ' action-icon-play' : ''}`} aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      {play ? <path d="m9 6 9 6-9 6V6Z" fill="currentColor"/> : <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
    </svg>
  </span>
}
function ConversionActions() {
  return <>
    <a className="button button-primary" href="https://app.revenuecat.com/signup">Start for free <ActionIcon/></a><a className="button-link" href="#">Explore the demo <ActionIcon play/></a>
  </>
}
function Logo() { return <a className="brand" href="https://www.revenuecat.com/" aria-label="RevenueCat home"><img src="/assets/revenuecat-logo.svg" width="138" height="40" alt="RevenueCat" /></a> }


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <Logo/>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="https://www.revenuecat.com/why-revenuecat">Why RevenueCat?<span className="nav-chevron" aria-hidden="true"/></a>
          <a href="https://www.revenuecat.com/for-product">Solutions<span className="nav-chevron" aria-hidden="true"/></a>
          <a href="https://www.revenuecat.com/docs">Developers<span className="nav-chevron" aria-hidden="true"/></a>
          <a href="https://www.revenuecat.com/blog">Resources<span className="nav-chevron" aria-hidden="true"/></a>
          <a href="https://www.revenuecat.com/pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a className="header-login" href="https://app.revenuecat.com/login">Log in</a>
          <a className="header-contact" href="https://www.revenuecat.com/talk-to-sales">Contact sales</a>
          <a className="header-signup" href="https://app.revenuecat.com/signup">Sign up</a>
        </div>
        <button className="menu-toggle" ref={menuButtonRef} type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </div>
      <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen} onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); menuButtonRef.current?.focus() } }}>
        <div className="wrap mobile-menu-inner">
          <div className="mobile-menu-links">
            <a href="https://www.revenuecat.com/why-revenuecat">Why RevenueCat?</a>
            <a href="https://www.revenuecat.com/for-product">Solutions</a>
            <a href="https://www.revenuecat.com/docs">Developers</a>
            <a href="https://www.revenuecat.com/blog">Resources</a>
            <a href="https://www.revenuecat.com/pricing">Pricing</a>
          </div>
          <div className="mobile-menu-actions">
            <a className="header-login" href="https://app.revenuecat.com/login">Log in</a>
            <a className="header-contact" href="https://www.revenuecat.com/talk-to-sales">Contact sales</a>
            <a className="header-signup" href="https://app.revenuecat.com/signup">Sign up</a>
          </div>
        </div>
      </nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="wrap hero-layout"><div className="hero-copy"><span className="eyebrow-pill">For product</span><h1 id="hero-title">Build and improve how your product earns revenue.</h1><p>Create purchase experiences across your app and the web. Launch offers, review their results and keep evolving your monetization, backed by RevenueCat’s subscription infrastructure.</p><div className="hero-actions"><ConversionActions/></div></div><figure className="hero-visual"><div className="hero-glow"/><img className="hero-paywall" src={asset('paywall-study.jpg')} width="256" height="503" alt="Meditation app purchase screen with subscription benefits"/><img className="hero-chart" src={asset('charts-cohort.jpg')} width="640" height="429" alt="Prediction Explorer view from RevenueCat Charts"/><figcaption>Create the purchase experience. Understand its impact.</figcaption></figure></div></section>
      <nav className="section-index" aria-label="Explore the page"><div className="wrap index-inner"><a href="#paywalls"><span>01</span> Purchase experience</a><a href="#web"><span>02</span> Web acquisition</a><a href="#infrastructure"><span>03</span> Connected access</a><a href="#insights"><span>04</span> Lasting revenue</a><a href="#stories"><span>05</span> Customer stories</a></div></nav>
      <section className="product-section shape-section" id="paywalls" aria-labelledby="paywalls-title"><div className="wrap feature-grid"><div className="section-copy"><span className="overline">01 / PAYWALLS</span><h2 id="paywalls-title">Make the purchase experience fit your product</h2><p>Build a paywall for the offer you want to make, then change it as you learn. The <a href="https://www.revenuecat.com/feature/paywalls">Paywalls</a> visual editor lets you design and update purchase screens yourself.</p><p>Once your app is connected, publish changes without another engineering sprint or app release. You can refine the message, layout and offers as your product evolves.</p></div><figure className="paywalls-visual"><div className="paywall-stage"><img src={asset('paywall-meditation.jpg')} width="256" height="503" loading="lazy" alt="Recipe app purchase screen with subscription options"/><img src={asset('paywall-sunset.jpg')} width="256" height="503" loading="lazy" alt="Outdoor app purchase screen with subscription options"/></div><figcaption>Shape the offer, message and design around your product.</figcaption></figure></div></section>
      <section className="product-section web-section" id="web" aria-labelledby="web-title"><div className="wrap"><div className="feature-intro"><div className="section-copy"><span className="overline">02 / FUNNELS + WEB BILLING</span><h2 id="web-title">Win customers before they install your app</h2></div><div className="section-copy prose"><p>Give people a way to discover your product and subscribe on the web. With <a href="https://www.revenuecat.com/feature/funnels">Funnels</a>, turn a campaign click into a branded onboarding experience that helps customers understand your product before they buy.</p><p><a href="https://www.revenuecat.com/billing">Web Billing</a> handles the web purchase. Customers can subscribe, then follow a link to unlock what they bought in your app. You gain another way to acquire paying customers, with more flexibility to shape the journey from first visit to purchase.</p></div></div><div className="web-gallery">
        <figure className="web-product-image"><div><img src={asset('web-billing-campaigns.svg')} width="731" height="598" loading="lazy" alt="An app subscription offer presented in a social ad, sponsored post and email"/></div><figcaption><span>Bring customers from campaigns to web checkout.</span><a href="https://www.revenuecat.com/feature/funnels">Explore Funnels <ActionIcon/></a></figcaption></figure>
        <figure className="web-product-image"><div><img src={asset('web-billing-checkout.svg')} width="734" height="591" loading="lazy" alt="A purchased Pro plan available on both a phone and a web browser"/></div><figcaption><span>Give web buyers access in your app.</span><a href="https://www.revenuecat.com/billing">Explore Web Billing <ActionIcon/></a></figcaption></figure>
      </div></div></section>
      <section className="product-section infrastructure-section" id="infrastructure" aria-labelledby="infrastructure-title"><div className="wrap feature-grid"><div className="section-copy"><span className="overline">03 / SUBSCRIPTION INFRASTRUCTURE</span><h2 id="infrastructure-title">Make subscriptions work wherever customers buy</h2><p>A customer might subscribe on iOS, Android or the web, then use your product on another platform. RevenueCat’s <a href="https://www.revenuecat.com/feature/infrastructure">subscription infrastructure</a> keeps track of what they bought and what they should have access to, including changes when they renew, upgrade or cancel.</p><p>Your team can build on that foundation instead of maintaining a separate subscription system for each platform. You can expand where customers buy while keeping their access connected.</p></div><figure className="access-visual"><div className="access-flow"><div className="platforms"><span>iOS</span><span>Android</span><span>Web</span></div><div className="access-line" aria-hidden="true"/><div className="access-core"><img src="/assets/revenuecat-logo.svg" alt="RevenueCat"/></div><div className="access-line" aria-hidden="true"/><div className="access-outcome"><span aria-hidden="true">✓</span><strong>Customer access</strong><small>Across platforms</small></div></div><figcaption>Keep customer access connected across iOS, Android and the web.</figcaption></figure></div></section>
      <section className="product-section insights-section" id="insights" aria-labelledby="insights-title"><div className="wrap"><div className="feature-intro"><div className="section-copy"><span className="overline">04 / CHARTS + EXPERIMENTS + TARGETING</span><h2 id="insights-title">Understand what creates lasting revenue</h2></div><div className="section-copy prose"><p>Bring app and web results together in <a href="https://www.revenuecat.com/feature/charts">Charts</a>. Review paywall conversion, renewals, retention and revenue to understand where customers drop off and how much revenue they generate over time.</p><p>Use <a href="https://www.revenuecat.com/feature/experiments">Experiments</a> to compare paywalls and subscription offers. Evaluate which options turn visitors into paying customers and how those customers perform after the first purchase.</p><p>Then act on what you learn. Roll out the selected offer to the right audience with <a href="https://www.revenuecat.com/feature/targeting">Targeting</a>, and use the results to guide your next change.</p></div></div><div className="insight-flow"><figure className="insight-image"><div><img src={asset('charts-cohort.jpg')} width="640" height="429" loading="lazy" alt="Prediction Explorer view from RevenueCat Charts"/></div><figcaption><span>01 / Review in Charts</span><a href="https://www.revenuecat.com/feature/charts">Explore Charts <ActionIcon/></a></figcaption></figure><span className="insight-arrow" aria-hidden="true">→</span><figure className="insight-image"><div><img src={asset('experiments-results.png')} width="1184" height="1070" loading="lazy" alt="RevenueCat Experiments interface comparing paywall variants over time"/></div><figcaption><span>02 / Compare in Experiments</span><a href="https://www.revenuecat.com/feature/experiments">Explore Experiments <ActionIcon/></a></figcaption></figure><span className="insight-arrow" aria-hidden="true">→</span><div className="targeting-tile"><span aria-hidden="true">◎</span><strong>03 / Roll out with Targeting</strong><a href="https://www.revenuecat.com/feature/targeting">Explore Targeting <ActionIcon/></a></div></div></div></section>
      <section className="stories-section" id="stories" aria-labelledby="stories-title">
        <div className="wrap">
          <span className="overline">05 / CUSTOMER STORIES</span>
          <h2 id="stories-title">See how teams turn offers into paying customers</h2>
          <article className="featured-story">
            <div className="featured-story-copy">
              <span className="story-tag">WEB BILLING / FIRST LAUNCH</span>
              <h3>Floga: sell before the app launches</h3>
              <p>Floga used Web Billing to sell more than $120,000 in lifetime memberships in one day before its app launched. Buyers received a link to redeem their purchase in the app.</p>
              <div className="featured-result" aria-label="More than $120,000 in lifetime memberships sold in one day before the app launched">
                <strong>More than $120,000</strong>
                <span>in lifetime memberships sold in one day before the app launched</span>
              </div>
              <a className="source-link" href="https://www.revenuecat.com/customers/floga">Read Floga’s story <ActionIcon/></a>
            </div>
            <figure className="featured-story-visual">
              <img src={asset('floga-site.png')} width="828" height="416" loading="lazy" alt="Floga yoga app website offering lifetime memberships"/>
              <figcaption>Lifetime memberships, available before the app launch.</figcaption>
            </figure>
          </article>
          <div className="supporting-stories">
            <article className="story-card pixelcut-card">
              <div className="story-card-copy">
                <span className="story-tag">EXPERIMENTS / OPTIMIZATION</span>
                <h3>Pixelcut: find an offer more customers choose</h3>
                <p>Pixelcut compared weekly and monthly subscriptions with Experiments. The weekly offer produced 16% more paying customers, and the team used Targeting to roll it out to new users.</p>
                <a className="source-link" href="https://www.revenuecat.com/customers/pixelcut">Read Pixelcut’s story <ActionIcon/></a>
              </div>
              <div className="pixelcut-result" aria-label="Pixelcut customer result: 16% more paying customers">
                <span>Pixelcut</span><strong>16%</strong><span>more paying customers</span><small>Weekly offer versus monthly subscriptions</small>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="closing" aria-labelledby="closing-title"><div className="wrap closing-layout"><div><span className="overline">GET STARTED</span><h2 id="closing-title">Build the monetization your product needs next</h2><p>Start with your first purchase experience or improve one that’s already live.</p></div><div className="closing-actions"><ConversionActions/></div></div></section>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner"><Logo/><span>Product landing page concept</span><a href="https://www.revenuecat.com/">revenuecat.com <ActionIcon/></a></div></footer>
  </>
}
