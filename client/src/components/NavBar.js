import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, GALLERY_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container fluid>
                    <NavLink to={GALLERY_ROUTE} className='navbar-brand'>
                        Домик в деревне
                    </NavLink>
                    {user.isAuth ? (
                        <Nav className='ml-auto nav-link'>
                            <Button
                                variant='outline-light'
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            <Button
                                variant='outline-light'
                                onClick={() => logOut()}
                                className='ms-3'
                            >
                                Выйти
                            </Button>
                        </Nav>
                    ) : (
                        <Nav className='ms-auto nav-link'>
                            <Button
                                variant='outline-light'
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Авторизация
                            </Button>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </div>
    )
})

export default NavBar
