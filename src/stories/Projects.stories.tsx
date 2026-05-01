import type { Meta, StoryObj } from '@storybook/react';
import Projects from '../components/Projects';

const meta: Meta<typeof Projects> = {
  title: 'Components/Projects',
  component: Projects,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '2-column project card grid. Each card is clickable and opens a ProjectModal. Cards: Scout, HybridAgent, CureForge AI, AI Document Processing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Projects>;

export const Default: Story = {};
