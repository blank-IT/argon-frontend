'use client';

import { ConfigProvider } from 'antd';

import { Text } from '@styles/components';

import { themeAntdConfig } from '@styles/theme';

const Main = () => {
  return (
    <ConfigProvider theme={themeAntdConfig}>
      <main>
        <Text as="span" typo="headLine_1" color="gray_100">
          Main
        </Text>
      </main>
    </ConfigProvider>
  );
};

export default Main;
