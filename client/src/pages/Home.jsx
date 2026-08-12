import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';

const features = [
  ['Smart analytics', 'Turn project activity into simple, actionable insights.', BarChart3],
  ['Team collaboration', 'Keep people, tasks and conversations together.', Users],
  ['Secure by design', 'Authentication and protected routes keep accounts safe.', ShieldCheck],
  ['Fast workflow', 'Remove repetitive work and focus on what matters.', Zap],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">WORKSPACE · ANALYTICS · COLLABORATION</div>
          <h1>Your team workspace, <span>simplified.</span></h1>
          <p>Plan projects, understand performance and collaborate with your team from one beautiful workspace.</p>
          <div className="hero-actions">
            <Link to="/signup" className="primary-btn">Get Started <ArrowRight size={18}/></Link>
            <a href="#features" className="secondary-btn">Explore features</a>
          </div>
          <div className="trust-row">
            <CheckCircle2 size={18}/> No credit card required
            <CheckCircle2 size={18}/> Responsive
            <CheckCircle2 size={18}/> Secure auth
          </div>
        </div>

        <div className="dashboard-preview">
          <div className="preview-top">
            <div>
              <span className="muted">Welcome back</span>
              <h3>Workspace Overview</h3>
            </div>
            <span className="status-pill">● Live</span>
          </div>
          <div className="metric-grid">
            <div className="metric-card"><span>Revenue</span><strong>₹18,392</strong><em>+12.5%</em></div>
            <div className="metric-card"><span>Projects</span><strong>24</strong><em>+8.2%</em></div>
            <div className="metric-card"><span>Members</span><strong>128</strong><em>+5.1%</em></div>
          </div>
          <div className="chart-card">
            <div className="chart-head"><strong>Performance</strong><span>Last 7 days</span></div>
            <div className="bars">
              {[42,68,50,82,64,92,76,100,85,108,94,120].map((h,i)=><i key={i} style={{height:h}} />)}
            </div>
          </div>
          <div className="activity-card">
            <strong>Recent activity</strong>
            <div className="activity"><span className="avatar">AK</span><div><b>Alex created a project</b><small>Marketing website · 4 min ago</small></div><span>•••</span></div>
            <div className="activity"><span className="avatar purple">MS</span><div><b>Maya completed a task</b><small>Design review · 18 min ago</small></div><span>•••</span></div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-heading">
          <span className="eyebrow">EVERYTHING IN ONE PLACE</span>
          <h2>Built for modern teams.</h2>
          <p>Everything your team needs to stay aligned, productive and moving forward.</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, text, Icon]) => (
            <article className="feature-card" key={title}>
              <div className="icon-box"><Icon size={22}/></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#workflow">Learn more <ArrowRight size={16}/></a>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="workflow section">
        <div className="workflow-panel">
          <div>
            <span className="eyebrow">SIMPLE WORKFLOW</span>
            <h2>From idea to execution without the chaos.</h2>
            <p>Create a workspace, invite your team and keep every project moving with clear ownership and measurable progress.</p>
            <Link to="/signup" className="primary-btn">Build your workspace <ArrowRight size={18}/></Link>
          </div>
          <div className="steps">
            <div><b>01</b><span>Create</span><p>Set up your team workspace in minutes.</p></div>
            <div><b>02</b><span>Collaborate</span><p>Assign tasks and keep everyone aligned.</p></div>
            <div><b>03</b><span>Measure</span><p>Use dashboard insights to improve results.</p></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <div className="section-heading">
          <span className="eyebrow">SIMPLE PRICING</span>
          <h2>Start free. Scale when ready.</h2>
        </div>
        <div className="price-card">
          <div><span className="eyebrow">STARTER</span><h3>Free</h3><p>Everything needed for a small team.</p></div>
          <ul><li>Up to 5 members</li><li>Unlimited projects</li><li>Basic analytics</li><li>Secure authentication</li></ul>
          <Link to="/signup" className="primary-btn">Get Started</Link>
        </div>
      </section>

      <footer>© 2026 FlowBoard · Built for the ThinkBuild technical assessment.</footer>
    </main>
  );
}