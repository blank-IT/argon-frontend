'use client';

import { Text } from '@styles/components';
import { useFunnel } from 'hooks/useFunnel';

const CareerPage = () => {
  const [Funnel, setStep] = useFunnel(
    ['직무', '연차', '관심사'] as const,
    '직무',
  );

  return (
    <div>
      <Funnel>
        <Funnel.Step name="직무">
          <h1 onClick={() => setStep('연차')}>직무</h1>
          <Job />
        </Funnel.Step>
        <Funnel.Step name="연차">
          <h2 onClick={() => setStep('관심사')}>연차</h2>
        </Funnel.Step>
        <Funnel.Step name="관심사">
          <h4 onClick={() => console.log('완료')}>관심사</h4>
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

const Job = () => {
  return (
    <div>
      <Text typo="display_1" color="gray_90">
        하시는 일을 알려주세요.
      </Text>
    </div>
  );
};

export default CareerPage;
