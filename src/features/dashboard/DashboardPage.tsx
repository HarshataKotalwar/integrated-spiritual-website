import DashboardSidebar from '@/components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import DashStatCard from './DashStatCard';
import { userNavSections } from './userNavConfig';
import { useAuth } from '@/hooks/useAuth';
import { Flower2, Sparkles, Flower } from 'lucide-react';
import UpcomingEventsWidget from './widgets/UpcomingEventsWidget';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="dash-layout">
      <DashboardSidebar portalLabel="MY SPACE" sections={userNavSections} homePath="/dashboard" />

      <main className="dash-main">
        <DashboardHeader
          title={`Good Morning, ${user?.name ?? ''}`}
          subtitle="Take a moment for yourself today."
        />

        <div className="dash-stats-grid">
          <DashStatCard label="Today's Sadhana" value="4/5" meta="Tasks completed" />
          <DashStatCard label="Meditation" value="12" meta="Sessions this month" />
          <DashStatCard label="Learning Progress" value="72%" meta="current course" />
          <DashStatCard label="Spiritual Streak" value="7 days" meta="keep going!" />
        </div>

        <div className="dash-widgets-grid">
          <div className="dash-widget-card">
            <h3 className="dash-widget-title">
              <span className="dash-widget-icon-badge"><Flower size={16} /></span>
              Today's Spiritual Practice
            </h3>
            <p className="dash-widget-subtext">Nurture your mind, body and soul.</p>
            <ul className="dash-checklist">
              <li>✓ Morning Prayer — Completed</li>
              <li>✓ Reading — Completed</li>
              <li>✓ Meditation — 10 min pending</li>
              <li>○ Reflection — Pending</li>
            </ul>
            <button className="dash-widget-btn">Continue Sadhana →</button>
          </div>

          <div className="dash-widget-card">
            <h3 className="dash-widget-title">Your Mood</h3>
            <p className="dash-widget-value">Feeling Peaceful</p>
            <p className="dash-widget-subtext">Today's overall mood</p>
            <button className="dash-widget-btn">Track Mood →</button>
          </div>

          <div className="dash-widget-card">
            <h3 className="dash-widget-title">
              <span className="dash-widget-icon-badge"><Flower2 size={16} /></span>
              Today's Meditation
            </h3>
            <p className="dash-widget-meta">10 MINUTES</p>
            <p className="dash-widget-value">Calm the Mind</p>
            <p className="dash-widget-subtext">A guided meditation to bring peace and clarity.</p>
            <button className="dash-widget-btn">Start Meditation →</button>
          </div>

          <div className="dash-widget-card">
            <h3 className="dash-widget-title">Continue Learning</h3>
            <p className="dash-widget-value">Mindfulness Basics</p>
            <p className="dash-widget-subtext">Lesson 8 of 12 — 8/12 lessons completed</p>
            <button className="dash-widget-btn">Continue Course →</button>
          </div>

          <div className="dash-widget-card">
            <h3 className="dash-widget-title">
              <span className="dash-widget-icon-badge"><Sparkles size={16} /></span>
              AI Guide
            </h3>
            <p className="dash-widget-subtext">
              You've been showing great consistency in your practice. A short evening meditation can help you maintain your inner balance.
            </p>
            <button className="dash-widget-btn">Ask AI Guide →</button>
          </div>

          <UpcomingEventsWidget />
        </div>

        <div className="dash-quote-card">
          <p className="dash-quote-label">A thought for today</p>
          <p className="dash-quote-text">"Peace comes from within."</p>
          <p className="dash-quote-hint">Take a moment to reflect.</p>
          <button className="dash-widget-btn">Begin Reflection →</button>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;