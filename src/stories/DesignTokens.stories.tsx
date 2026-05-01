import type { Meta, StoryObj } from '@storybook/react';

// ──────────────────────────────────────────────────────────────
// Design Tokens Story — visual reference for the design system
// ──────────────────────────────────────────────────────────────

function ColorSwatch({ name, value, textDark = true }: { name: string; value: string; textDark?: boolean }) {
  return (
    <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', width: 140 }}>
      <div style={{ height: 56, background: value }} />
      <div style={{ padding: '6px 10px', background: '#fff' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#1a1a1a' }}>{name}</div>
        <div style={{ fontSize: 10, color: '#6b7280', fontFamily: 'monospace' }}>{value}</div>
      </div>
    </div>
  );
}

function DesignTokensPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#faf8f5', minHeight: '100vh', padding: 40 }}>

      {/* Colors */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3b82f6', marginBottom: 16 }}>Colors</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
          <ColorSwatch name="bg" value="#faf8f5" />
          <ColorSwatch name="bg-section" value="#f0eeeb" />
          <ColorSwatch name="card" value="#ffffff" />
          <ColorSwatch name="foreground" value="#1a1a1a" textDark={false} />
          <ColorSwatch name="muted" value="#6b7280" textDark={false} />
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <ColorSwatch name="accent-dim" value="#2563eb" textDark={false} />
          <ColorSwatch name="accent" value="#3b82f6" textDark={false} />
          <ColorSwatch name="accent-light" value="#60a5fa" textDark={false} />
          <ColorSwatch name="accent-bg" value="#eff6ff" />
          <ColorSwatch name="accent-border" value="#dbeafe" />
        </div>
      </section>

      {/* Type Scale */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3b82f6', marginBottom: 16 }}>Type Scale</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 12 }}>
            <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Hero · clamp(2.5rem, 8vw, 6rem) · 800</div>
            <div style={{ fontSize: 48, fontWeight: 800, background: 'linear-gradient(135deg,#1a1a1a 0%,#3b82f6 50%,#1a1a1a 100%)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hi, I am Kaige Gao</div>
          </div>
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 12 }}>
            <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Heading · clamp(1.75rem, 5vw, 3.75rem) · 700</div>
            <div style={{ fontSize: 36, fontWeight: 700 }}>Featured Projects</div>
          </div>
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 12 }}>
            <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Subtitle · clamp(1.25rem, 3vw, 2.5rem) · 600</div>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'rgba(26,26,26,0.9)' }}>AI Agent Builder</div>
          </div>
          <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 12 }}>
            <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Body · clamp(1rem, 1.5vw, 1.25rem) · 400 · lh 1.6</div>
            <div style={{ fontSize: 16, fontWeight: 400, color: 'rgba(75,75,75,0.7)', lineHeight: 1.6 }}>Building autonomous systems that work while I sleep.</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 4 }}>Eyebrow · 0.875rem · 600 · tracking 0.2em · uppercase</div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3b82f6' }}>About Me</div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3b82f6', marginBottom: 16 }}>Buttons</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#" style={{ padding: '10px 24px', borderRadius: 12, background: '#3b82f6', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>View Projects</a>
          <a href="#" style={{ padding: '10px 24px', borderRadius: 12, border: '1px solid rgba(59,130,246,0.4)', color: '#3b82f6', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Get in Touch</a>
          <a href="#" style={{ padding: '7px 14px', borderRadius: 8, background: '#eff6ff', color: '#3b82f6', border: '1px solid #dbeafe', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Hire Me</a>
        </div>
      </section>

      {/* Tags */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3b82f6', marginBottom: 16 }}>Tags & Badges</h2>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['Python', 'FastAPI', 'Cloud Run', 'Multi-Agent', 'GCP', 'LangGraph', 'Terraform', 'Claude Sonnet'].map(t => (
            <span key={t} style={{ padding: '3px 12px', background: '#eff6ff', color: '#3b82f6', border: '1px solid #dbeafe', borderRadius: 9999, fontSize: 12, fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </section>

      {/* Border Radius & Shadows */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3b82f6', marginBottom: 16 }}>Radius & Shadows</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[{r:6,name:'sm'},{r:8,name:'md'},{r:12,name:'lg'},{r:16,name:'xl'}].map(({r,name}) => (
            <div key={name} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: r, width: 72, height: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#1a1a1a' }}>{name}</span>
              <span style={{ fontSize: 9, color: '#6b7280' }}>{r}px</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'warm' },
    docs: {
      description: {
        component: 'Visual reference for all design tokens: colors, type scale, buttons, tags, radius, and shadows.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllTokens: Story = {
  name: 'All Tokens',
  render: () => <DesignTokensPage />,
};
