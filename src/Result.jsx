import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Result = ({ result }) => (
  <Container fluid className="p-5">
    <Row>
      <Col xs={12} md={10} lg={8} className="text-dark mx-auto">
        <div className="me-3">
          { result === 'error' ? (
            <div>
              <p className="text-center text-danger fs-3">Данные введены некорректно. Введите числа через запятую.</p>
            </div>
            ) : (
            <>
              <h3 className="text-center">Результат:</h3>
              <div>
                <p className="text-center fs-2"><b>{result}</b></p>
              </div>
            </>
            )
          }
        </div>
      </Col>
    </Row>
  </Container>
);

export default Result;
