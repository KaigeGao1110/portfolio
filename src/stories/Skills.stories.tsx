import type { Meta, StoryObj } from '@storybook/react';
import Skills from '../components/Skills';

const meta: Meta<typeof Skills> = {
  title: 'Components/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Two skill panels side-by-side: "AI & Agents" and "Cloud & Infra". Progress bars animate width from 0 to target % when scrolled into view.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skills>;

export const Default: Story = {};
