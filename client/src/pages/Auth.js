import React, { useContext, useState } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, GALLERY_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const Auth = observer(() => {
    const history = useHistory()
    const { user } = useContext(Context)
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log(data)
            }

            user.setUser(user)
            user.setIsAuth(true)
            history.push(GALLERY_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 80 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>
                    {isLogin ? 'Авторизация' : 'Регистрация'}
                </h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        placeholder='Введите Ваш Email...'
                        className='mt-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        placeholder='Введите Ваш пароль...'
                        className='mt-3'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                    <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ? (
                            <div>
                                Нет аккаунта?
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Регистрация
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Есть аккаунт?
                                <NavLink to={LOGIN_ROUTE}> Войдите</NavLink>
                            </div>
                        )}

                        <Button variant='outline-success' onClick={click}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
