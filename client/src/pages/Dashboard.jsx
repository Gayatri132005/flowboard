import { useEffect, useState } from 'react';
import { BarChart3, Bell, FolderKanban, LogOut, Plus, Settings, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'User', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <main className="dashboard-page">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark"><BarChart3 size={18}/></span>Flow<span>Board</span></div>
        <nav>
          <a className="active"><BarChart3 size={18}/> Dashboard</a>
          <a><FolderKanban size={18}/> Projects</a>
          <a><Users size={18}/> Team</a>
          <a><BarChart3 size={18}/> Analytics</a>
          <a><Settings size={18}/> Settings</a>
        </nav>
        <button className="logout-btn" onClick={logout}><LogOut size={17}/> Logout</button>
      </aside>

      <section className="dash-main">
        <div className="dash-header">
          <div><span className="muted">Workspace / Overview</span><h1>Good morning, {user.name.split(' ')[0]} 👋</h1><p>Here is what's happening with your team today.</p></div>
          <div className="dash-actions"><button className="icon-btn"><Bell size={19}/></button><button className="primary-btn"><Plus size={18}/> New project</button></div>
        </div>

        <div className="dash-metrics">
          <div><span>Total revenue</span><strong>₹18,392.07</strong><em>↗ 5.2% <small>vs last month</small></em></div>
          <div><span>Active projects</span><strong>24</strong><em>↗ 8.4% <small>vs last month</small></em></div>
          <div><span>Team members</span><strong>128</strong><em>↗ 12.1% <small>vs last month</small></em></div>
          <div><span>Tasks completed</span><strong>842</strong><em>↗ 14.8% <small>vs last month</small></em></div>
        </div>

        <div className="dash-grid">
          <div className="dash-card large">
            <div className="card-title"><div><h3>Performance overview</h3><span>Monthly project activity</span></div><select><option>Last 7 days</option><option>Last 30 days</option></select></div>
            <div className="big-chart">
              {[55,72,48,84,65,91,77,106,88,118,96,126,105,136,120,146].map((h,i)=><div key={i} style={{height:h}}><span/></div>)}
            </div>
            <div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
          </div>

          <div className="dash-card">
            <div className="card-title"><div><h3>Team utilization</h3><span>Current week</span></div></div>
            <div className="donut-wrap"><div className="donut"><b>84%</b><span>Utilized</span></div></div>
            <div className="legend"><span><i/>Productive <b>68%</b></span><span><i/>Meetings <b>16%</b></span><span><i/>Available <b>16%</b></span></div>
          </div>

          <div className="dash-card large">
            <div className="card-title"><div><h3>Recent projects</h3><span>Latest team activity</span></div><button className="text-btn">View all</button></div>
            <div className="table">
              <div className="table-head"><span>Project</span><span>Owner</span><span>Progress</span><span>Status</span></div>
              {[['Website redesign','Aarav','82%','On track'],['Mobile application','Maya','64%','On track'],['Marketing campaign','Rohan','46%','Review'],['Analytics dashboard','Isha','91%','Complete']].map((r,i)=>
                <div className="table-row" key={i}><span><b>{r[0]}</b><small>Updated today</small></span><span>{r[1]}</span><span><div className="progress"><i style={{width:r[2]}}/></div>{r[2]}</span><span className={r[3]==='Complete'?'badge complete':r[3]==='Review'?'badge review':'badge'}>{r[3]}</span></div>
              )}
            </div>
          </div>

          <div className="dash-card">
            <div className="card-title"><div><h3>Quick actions</h3><span>Common tasks</span></div></div>
            <div className="quick-actions">
              <button><Plus/> Create project</button>
              <button><Users/> Invite teammate</button>
              <button><FolderKanban/> View reports</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}