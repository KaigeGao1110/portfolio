import type { Meta, StoryObj } from '@storybook/react';
import ProjectModal from '../components/ProjectModal';

const meta: Meta<typeof ProjectModal> = {
  title: 'Components/ProjectModal',
  component: ProjectModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Modal overlay for project details. Shows title, subtitle, stats, description, feature cards grid, tech stack tags, and action buttons (View Live + GitHub). Click backdrop to close.',
      },
    },
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectModal>;

const scoutProject = {
  title: 'Scout',
  subtitle: 'Sales Intelligence Agent',
  description:
    'Multi-agent sales research platform that turns raw company signals into actionable sales strategy. Continuously monitors target companies for buying signals — layoffs, funding rounds, hiring shifts — and auto-generates one-page AI sales briefs with exactly what to say and how to approach.',
  tags: ['Python', 'FastAPI', 'Cloud Run', 'Multi-Agent', 'GCP', 'CRM'],
  url: 'https://scout-ui-594674305905.us-central1.run.app',
  github: 'https://github.com/KaigeGao1110/scout',
  live: true,
  stats: ['GCP Cloud Run', 'Multi-Agent', '~$0.01/cycle', 'Web UI Deployed'],
  features: [
    { icon: 'network', title: '3-Level Agent Architecture', description: 'Scout → Research + Monitor agents → specialist sub-agents running in parallel' },
    { icon: 'radio', title: 'Signal Detection Engine', description: 'Layoffs +10, funding +8, rating drops +7 — alerts only fire above threshold' },
    { icon: 'database', title: 'CRM Integration', description: 'Syncs AI-generated briefs directly to Salesforce and HubSpot' },
    { icon: 'bell', title: 'Web Dashboard', description: 'Live Scout WebUI for real-time monitoring and alert management' },
  ],
};

const hybridProject = {
  title: 'HybridAgent',
  subtitle: 'Hybrid AI Agent',
  description:
    'Hybrid AI agent that automates employee onboarding. An LLM judgment router classifies every query as General or Time-Sensitive, then delegates to browser automation or search adapter while an FSM orchestrator drives the full IAM provisioning lifecycle.',
  tags: ['Python', 'Playwright', 'Hybrid Agent', 'Claude Sonnet', 'WebSocket', 'SSE'],
  url: 'https://agent.kaigegao777.com',
  github: 'https://github.com/KaigeGao1110/HybridAgents',
  live: true,
  stats: ['Hybrid Architecture', '144 Tests Passing', 'Claude Sonnet 4.6', 'Live Demo UI'],
  features: [
    { icon: 'sparkles', title: 'LLM Judgment Router', description: 'Routes every query to General or Time-Sensitive path using few-shot classification' },
    { icon: 'radio', title: 'Browser Agent', description: 'Playwright executes multi-step UI workflows with human-in-the-loop checkpoints' },
    { icon: 'network', title: 'FSM Orchestrator', description: '6-state machine with crash-resume and dry-run support' },
    { icon: 'database', title: 'RAGAS Evaluation', description: 'Both search adapters scored 0.938 RAGAS faithfulness' },
  ],
};

export const ScoutOpen: Story = {
  name: 'Open — Scout',
  args: {
    isOpen: true,
    project: scoutProject,
  },
};

export const HybridAgentOpen: Story = {
  name: 'Open — HybridAgent',
  args: {
    isOpen: true,
    project: hybridProject,
  },
};

export const Closed: Story = {
  name: 'Closed',
  args: {
    isOpen: false,
    project: scoutProject,
  },
};
