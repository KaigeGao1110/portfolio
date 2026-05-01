import type { Meta, StoryObj } from '@storybook/react';
import Contact from '../components/Contact';

const meta: Meta<typeof Contact> = {
  title: 'Components/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Contact section with email, GitHub, and location. Glass card layout. Includes footer with copyright.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {};
