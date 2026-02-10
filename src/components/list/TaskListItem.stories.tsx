import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useState } from 'react';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

import TaskListItem from './TaskListItem';

const meta = {
  title: 'Components/TaskListItem',
  component: TaskListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: '할일 제목',
    date: '2024년 7월 29일',
    checked: false,
    isSelected: false,
    onCheckedChange: fn(),
    onKebabClick: fn(),
    onFrequencyClick: fn(),
  },
  argTypes: {
    checked: { control: 'boolean' },
    isSelected: { control: 'boolean' },
    isEditing: { control: 'boolean' },
    frequency: { control: 'text' },
    commentCount: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TaskListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledTaskListItem: Story['render'] = (args) => {
  const [{ checked }, updateArgs] = useArgs();

  const handleCheckedChange = (nextChecked: boolean) => {
    updateArgs({ checked: nextChecked });
    args.onCheckedChange?.(nextChecked);
  };

  return <TaskListItem {...args} checked={checked} onCheckedChange={handleCheckedChange} />;
};

export const Default: Story = {
  render: ControlledTaskListItem,
};

export const Selected: Story = {
  render: ControlledTaskListItem,
  args: {
    isSelected: true,
  },
};

export const Completed: Story = {
  render: ControlledTaskListItem,
  args: {
    checked: true,
  },
};

export const WithComments: Story = {
  render: ControlledTaskListItem,
  args: {
    commentCount: 3,
  },
};

export const WithFrequency: Story = {
  render: ControlledTaskListItem,
  args: {
    frequency: '매일 반복',
  },
};

const EditingTaskListItem: Story['render'] = (args) => {
  const [title, setTitle] = useState('');

  return (
    <TaskListItem
      {...args}
      title={title}
      isEditing
      placeholder="할 일을 달성하기 위한 체크리스트를 입력해주세요."
      onTitleChange={setTitle}
      onTitleSubmit={() => alert(`입력 완료: ${title}`)}
    />
  );
};

export const Editing: Story = {
  render: EditingTaskListItem,
  args: {
    date: '2024년 7월 29일',
    frequency: '매일 반복',
  },
};

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TaskListItem title="기본 상태" date="2024년 7월 29일" />
      <TaskListItem title="선택 상태 (파란 테두리)" date="2024년 7월 29일" isSelected />
      <TaskListItem title="완료 상태 (취소선 + 흐린 텍스트)" date="2024년 7월 29일" checked />
      <TaskListItem title="댓글 있는 할일" date="2024년 7월 29일" commentCount={3} />
      <TaskListItem title="반복 정보 있는 할일" date="2024년 7월 29일" frequency="매일 반복" />
      <TaskListItem
        title="모든 옵션이 있는 할일"
        date="2024년 7월 29일"
        frequency="매주 반복"
        commentCount={5}
      />
      <TaskListItem
        title=""
        date="2024년 7월 29일"
        frequency="매일 반복"
        isEditing
        placeholder="할 일을 달성하기 위한 체크리스트를 입력해주세요."
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
