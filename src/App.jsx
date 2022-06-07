import React, { useState, useRef, useEffect } from 'react';
import { 
  Container,
  Col,
  Row,
  Form,
  Button,
} from 'react-bootstrap';
import { Formik, Form as FormikForm } from 'formik';

import handler from './handler.js';
import Result from './Result.jsx';

const App = () => {
  const [result, setResult] = useState(null);
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="d-flex flex-column vh-100">
      <Container fluid className="p-5 bg-dark">
        <Row>
          <Col xs={12} md={10} lg={8} className="mx-auto text-white">
            <h2 className="my-4 text-center">Добро пожаловать!</h2>
            <p className="text-start fs-5 mt-3">Эта программа находит сумму двух наименьших чисел из последовательности.</p>
            <p className="text-start fs-5 mt-3 mb-4">В форму вводятся числа через запятую.</p>
            <Formik
              initialValues={{
                numbers: [],
              }}
              onSubmit={({ numbers }) => {
                const arr = numbers.split(',');
                if (arr.some((item) => item.trim().length === 0)) {
                  setResult('error');
                  return;
                }
                const arrayOfNumbers = arr.map((n) => Number(n));
                const sum = handler(arrayOfNumbers);
                sum === null ? setResult('error') : setResult(sum);
              }}
            >
              {(formik) => (
              <FormikForm>
                <Row>
                  <Col>
                    <Form.Floating>
                      <Form.Control
                        ref={inputRef}
                        className="w-100 fs-5"
                        name="numbers"
                        id="numbers"
                        placeholder="Введите числа"
                        {...formik.getFieldProps('numbers')}
                      />
                      <Form.Label className="text-secondary" htmlFor="numbers">Введите числа</Form.Label>
                    </Form.Floating>
                  </Col>
                  <Col className="col-auto">
                    <Button size="lg" className="h-100" type="submit">Отправить</Button>
                  </Col>
                </Row>
              </FormikForm>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
      { result === null ?  null : <Result result={result}/> }
    </div>
  );
};

export default App;
