import type { Meta, StoryObj } from '@storybook/react';
import About from '../components/About';

const meta: Meta<typeof About> = {
  title: 'Components/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'About section with bio text and three stat cards (4+ Projects Shipped, 3 Cloud Platforms, 1 Goal: Founder). Uses framer-motion scroll-triggered fade-up animations.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {};
