import { iconName, IconSet } from '@constants/index';

interface IconProps {
  icon: iconName;
  size: number;
  color?: string;
}

const Icon = ({ icon, size, color }: IconProps) => (
  <svg
    height={size}
    viewBox={IconSet[icon].viewBox}
    fill={IconSet[icon].color || color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={IconSet[icon].path} />
  </svg>
);

export { Icon };
