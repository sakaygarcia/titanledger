export default function Home() {
  return (
    <>
      <header>
        <h1>TitanLedger</h1>
        <p>Real Capital. Crypto Payouts. Simulated Freedom.</p>
        <div className="cta">
          <a href="#pricing">Get Funded</a>
          <a href="#how-it-works">How It Works</a>
        </div>
      </header>

      <section id="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <p>
          1. Pay in Crypto to access your simulated account.<br />
          2. Trade using TradeLocker.<br />
          3. TitanLedger mirrors top-performing trades on real capital.<br />
          4. Profits paid out in crypto.<br />
          5. Protections via drawdown & lockout systems.
        </p>
      </section>

      <section id="pricing">
        <h2 className="section-title">Pricing Tiers</h2>
        <table>
          <thead>
            <tr><th>Tier</th><th>Sim Account</th><th>Buffer</th><th>Fee</th><th>Total</th><th>Daily Loss Lock</th><th>Commission</th></tr>
          </thead>
          <tbody>
            <tr><td>Micro</td><td>$1,000</td><td>$50</td><td>$100</td><td>$150</td><td>$25</td><td>$7/lot</td></tr>
            <tr><td>Starter</td><td>$2,500</td><td>$125</td><td>$250</td><td>$375</td><td>$62.50</td><td>$7/lot</td></tr>
            <tr><td>Basic</td><td>$5,000</td><td>$250</td><td>$500</td><td>$750</td><td>$125</td><td>$6/lot</td></tr>
            <tr><td>Pro</td><td>$10,000</td><td>$500</td><td>$1,000</td><td>$1,500</td><td>$250</td><td>$6/lot</td></tr>
            <tr><td>Advanced</td><td>$25,000</td><td>$1,250</td><td>$2,500</td><td>$3,750</td><td>$625</td><td>$5/lot</td></tr>
            <tr><td>Executive</td><td>$100,000</td><td>$5,000</td><td>$10,000</td><td>$15,000</td><td>$2,500</td><td>$4/lot</td></tr>
            <tr><td>Titan</td><td>$250,000</td><td>$12,500</td><td>$25,000</td><td>$37,500</td><td>$6,250</td><td>$4/lot</td></tr>
            <tr><td>God Mode</td><td>$1,000,000+</td><td>$50,000+</td><td>$100,000+</td><td>Invite Only</td><td>$25,000+</td><td>Custom</td></tr>
          </tbody>
        </table>
      </section>

      <footer>
        <p>© 2025 TitanLedger. All Rights Reserved. | support@titanledger.com</p>
      </footer>
    </>
  );
}
