import { SegmentedButtons } from '../components/SegmentedButtons';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/SegmentedButtons',
  component: SegmentedButtons,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Three OutlineButtons joined into a segmented control. Left segment has rounded left corners, right has rounded right corners, middle has no radius and no left border to avoid double borders. Each segment has independent hover/press states.',
      },
    },
  },
  argTypes: {
    onSegmentClick: { action: 'segment clicked' },
  },
};

export const Default = {
  args: {
    segments: [
      { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
      { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
      { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
    ],
  },
};

export const TextOnly = {
  name: 'Text Only',
  args: {
    segments: [
      { label: 'Option 1', showIcon: false, showText: true, showChevron: false },
      { label: 'Option 2', showIcon: false, showText: true, showChevron: false },
      { label: 'Option 3', showIcon: false, showText: true, showChevron: false },
    ],
  },
};

export const TwoSegments = {
  name: 'Two Segments',
  args: {
    segments: [
      { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
      { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
    ],
  },
};

export const FourSegments = {
  name: 'Four Segments',
  args: {
    segments: [
      { label: 'One', showIcon: false, showText: true, showChevron: false },
      { label: 'Two', showIcon: false, showText: true, showChevron: false },
      { label: 'Three', showIcon: false, showText: true, showChevron: false },
      { label: 'Four', showIcon: false, showText: true, showChevron: false },
    ],
  },
};
