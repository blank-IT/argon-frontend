'use client';

import { Col, Container } from '@styles/layout';
import Row from '@styles/layout/Row';

export default function Home() {
  return (
    <main>
      <Container>
        <Row>
          <Col span={4}>Content</Col>
          <Col span={4}>Content</Col>
        </Row>
      </Container>
    </main>
  );
}
