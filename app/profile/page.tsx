'use client';

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Button } from '@components/button';
import { ImageViewer } from '@components/imageViewer';
import { Modal } from '@components/modal';

import { Text } from '@styles/components';
import { Icon } from '@styles/components/Icon';

const ProfilePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    // 비지니스 로직 작성
    setTimeout(() => setIsOpenModal(true), 1000);
  }, []);

  return (
    <StyledProfilePage>
      <ImageViewer
        src="/images/profile_background_v1.png"
        alt="프로필_백그라운드"
        width={100}
        height={100}
        layout="responsive"
      />

      <StyledInfoWrap>
        <div className="picture">
          <ImageViewer
            src="/images/profile_v2.png"
            alt="프로필_이미지"
            width={96}
            height={96}
          />
        </div>
        <div className="name">
          <Text typo="headLine_2">정다한</Text>
        </div>
        <div className="career">
          {/* 시안은 body_4이지만 정의가 되어 있지 않음 */}
          <Text typo="body_3" color="gray_40">
            Product Designer
          </Text>
        </div>
        <ul className="relationship">
          <li>
            <Text typo="body_2" color="gray_70">
              팔로워 0명
            </Text>
          </li>
          <li>
            <Text typo="body_2" color="gray_70">
              팔로잉 0명
            </Text>
          </li>
        </ul>
        <div className="utilWrap">
          <div className="iconShare">
            <Icon size={32} icon="share" />
          </div>
          <div className="buttonProfilePost">
            <Button backgroundColor="gray_100">
              <Text as="span" typo="body_3" color="gray_0">
                프로필 작성
              </Text>
            </Button>
          </div>
        </div>
        <div className="summaryWrap">
          <Text typo="body_1" color="gray_70">
            나만의 이력서를 작성해 보세요!
          </Text>
        </div>
      </StyledInfoWrap>

      <Modal isOpen={isOpenModal} footer={[]} closeIcon={null}>
        <StyledModalInfoBox>
          <div className="wrap">
            <div className="titleWrap">
              <Text typo="headLine_1" color="gray_100">
                지금까지의 여정을 입력해주세요.
              </Text>
            </div>
            <div className="descriptionWrap">
              지금까지의 커리어를 입력하고 다양한 인사이트를 확인해보세요.
            </div>
          </div>

          <div className="buttonWrap">나의 여정 입력하기</div>
        </StyledModalInfoBox>
      </Modal>
    </StyledProfilePage>
  );
};

const StyledProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding-bottom: 12px;
`;

const StyledInfoWrap = styled.div`
  position: relative;

  padding-top: 72px;

  text-align: center;

  .picture {
    position: absolute;
    top: 0; 
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .career {
    margin-top: 8px;
  }

  .relationship {
    margin-top: 24px;

    li {
      display: inline-block;

      &:last-child {
        position: relative;
        padding-left: 18px;

        &::before {
            content: '\\002E'; 
            position: absolute;
            left: 9px;
            top: 50%;
            width: 2px;
            height: 2px;
            background: ${({ theme }) => theme.palette['gray_70']};
            border-radius: 100%;
            transform: translate(-0.5px, -10%);
          }
        </styl
      }
    }
  }

  .utilWrap {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 24px;

    .iconShare {
        
    }

    .buttonProfilePost {
        width: 96px;
        height: 40px;

        margin-left: 8px;

        button {
            height: 100%;
        }
    }
  }

  .summaryWrap {
    margin-top: 24px;
  }
`;

const StyledModalInfoBox = styled.div`
  text-align: center;

  .wrap {
    padding: 24px;
  }

  .descriptionWrap {
    margin-top: 16px;
  }

  .buttonWrap {
    padding: 17px;

    border-top: 1px solid ${({ theme }) => theme.palette['gray_6']};

    color: #8673ff;
  }
`;

export default ProfilePage;
