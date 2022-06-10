import React from 'react';
import { Form, Input, Button } from 'antd';
import './FormFSC.css'


export default function FormFSC() {


  return (
    <div className='formContainer'> 
      <form action="form" className='formRequest'>
        <h1>Оставьте заявку, чтобы получить ответ на свои вопросы</h1>

        {/* <Form className='formFSC-antd'
          name="basic"
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input 
                      className='input-name'
                      placeholder='Name'
                    />
                  </Form.Item>
          
        
          <Form.Item
                    name="tel"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your tel!',
                      },
                    ]}
                  >
                    <Input.Group>
                      <Input
                        className='input-int-code'
                        defaultValue="+(996)"
                      />
                      <Input
                        className='input-phone'
                        placeholder="(000)00-00-00"
                      />
                    </Input.Group>
                  </Form.Item>
          
          
          
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    
                    <Button type="primary" htmlType="submit" className='btnFSC'>
                    Оставить заявку
                    </Button>
                  </Form.Item>
          
        </Form> */}

        <input type="text" name='name' placeholder='Имя'required/>      
        <input type="tel" name="telephone" pattern="^[ 0-9]+$" placeholder='+996' required/>  
        
        
        <button type='submit' className='btnFSC'>Отправить</button>
        <h5>Нажимая на кнопку «Отправить», я соглашаюсь с условиями обработки персональных данных</h5>
      </form>
    </div>
   
  

  );
    }
