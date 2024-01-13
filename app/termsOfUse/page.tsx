'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

import { Button } from '@components/button';
import { Checkbox } from '@components/checkbox';

import { Text } from '@styles/components';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const plainList = ['type1', 'type2', 'type3'];
const plainOptionList = [
  { value: 'type1', label: '(필수) 만 14세 이상입니다.' },
  { value: 'type2', label: '(필수) 이용약관에 동읠합니다.' },
  { value: 'type3', label: '(필수) 개인정보 수집 및 이용 동의합니다.' },
];

const TermsOfUsePage = () => {
  const router = useRouter();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const isCheckedAll = useMemo(
    () => plainList.length === checkedList.length,
    [plainList, checkedList],
  );
  const isIndeterminate = useMemo(
    () => checkedList.length > 0 && checkedList.length < plainList.length,
    [checkedList, plainList],
  );

  const handleChangeCheckList = useCallback((list: CheckboxValueType[]) => {
    setCheckedList(list);
  }, []);

  const handleChangeCheckListAll = useCallback(
    (event: CheckboxChangeEvent) => {
      setCheckedList(event.target.checked ? plainList : []);
    },
    [plainList],
  );

  const handleClickCheckListAll = useCallback(() => {
    setCheckedList(plainList);
  }, [plainList]);

  const handleClickNext = useCallback(() => {
    router.push('/profile');
  }, []);

  return (
    <StyledTermsOfUsePage>
      <StyledCheckboxInfoWrap>
        <Text typo="display_1" color="gray_90">
          서비스 이용약관에 동의해주세요.
        </Text>

        <StyledCheckboxWrap>
          <Checkbox
            indeterminate={isIndeterminate}
            checked={isCheckedAll}
            onChange={handleChangeCheckListAll}
          >
            <Text as="span" typo="body_2" color="gray_90">
              모든 약관에 동의합니다.
            </Text>
          </Checkbox>

          <Checkbox.Group
            options={plainOptionList}
            value={checkedList}
            onChange={handleChangeCheckList}
          />
        </StyledCheckboxWrap>
      </StyledCheckboxInfoWrap>

      <StyledButtonWrap>
        {isCheckedAll ? (
          <Button backgroundColor="gray_90" onClick={handleClickNext}>
            <Text as="span" typo="headLine_1" color="gray_0">
              다음
            </Text>
          </Button>
        ) : (
          <Button backgroundColor="gray_90" onClick={handleClickCheckListAll}>
            <Text as="span" typo="headLine_1" color="gray_0">
              이용약관 동의하기
            </Text>
          </Button>
        )}
      </StyledButtonWrap>
    </StyledTermsOfUsePage>
  );
};

const StyledTermsOfUsePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding-bottom: 12px;
`;

const StyledCheckboxInfoWrap = styled.div`
  flex-shrink: 0;

  margin-top: 44px;
`;

const StyledCheckboxWrap = styled.div`
  margin-top: 40px;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

export default TermsOfUsePage;
