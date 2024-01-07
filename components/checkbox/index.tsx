import { ReactNode } from 'react';
import { Checkbox as AntdCheckBox } from 'antd';

import { Group } from '@components/checkbox/Group';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface CheckboxProps {
  indeterminate?: boolean;
  checked: boolean;
  children: ReactNode;
  onChange?: (event: CheckboxChangeEvent) => void;
}

const Checkbox = ({
  indeterminate,
  checked,
  children,
  onChange,
}: CheckboxProps) => {
  return (
    <AntdCheckBox
      indeterminate={indeterminate}
      checked={checked}
      onChange={onChange}
    >
      {children}
    </AntdCheckBox>
  );
};

Checkbox.Group = Group;

export { Checkbox };
