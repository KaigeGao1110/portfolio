import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Fixed navigation bar. Transparent at top of page, switches to frosted glass on scroll. Desktop shows links + "Hire Me" CTA; mobile shows hamburger menu.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const AtTop: Story = {
  name: 'Transparent (top of page)',
  parameters: {
    backgrounds: { default: 'warm' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '200px', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

export const Scrolled: Story = {
  name: 'Glass (after scroll)',
  decorators: [
    (Story) => {
      // Simulate scrolled state by patching scrollY
      if (typeof window !== 'undefined') {
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
        window.dispatchEvent(new Event('scroll'));
      }
      return (
        <div style={{ height: '200px', position: 'relative' }}>
          <Story />
        </div>
      );
    },
  ],
};
