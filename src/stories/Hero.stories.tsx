import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../components/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full-screen hero section. Typewriter cycles through "AI Agent Builder", "Cloud Architect", "Indie Founder". Animated orbs, cyber grid background, two CTA buttons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
