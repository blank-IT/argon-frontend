import { ReactNode } from 'react';
import { Checkbox as AntdCheckBox } from 'antd';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface CheckboxProps {
  options?: string[] | number[] | Option[];
  value: (string | number | boolean)[];
  children?: ReactNode;
  onChange?: (list: CheckboxValueType[]) => void;
}

const AntdCheckboxGroup = AntdCheckBox.Group;

const Group = ({ options, value, children, onChange }: CheckboxProps) => {
  return (
    <AntdCheckboxGroup options={options} value={value} onChange={onChange}>
      {children}
    </AntdCheckboxGroup>
  );
};

export { Group };
