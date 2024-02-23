import { ReactNode } from 'react';
import { Modal as AntdModal } from 'antd';
import styled from '@emotion/styled';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  footer?: [];
  closeIcon?: boolean | ReactNode;
  children?: ReactNode;

  handleOk?: () => void;
  handleCancel?: () => void;
}

const Modal = ({
  isOpen,
  title,
  footer,
  closeIcon,
  children,
  handleOk,
  handleCancel,
}: ModalProps) => {
  return (
    <StyledModal>
      <AntdModal
        open={isOpen}
        title={title}
        footer={footer}
        closeIcon={closeIcon}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </AntdModal>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .ant-modal-content {
    padding: 0 !important;
  }
`;

export { Modal };
