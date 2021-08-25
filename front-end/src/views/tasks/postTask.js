/* eslint-disable */
/*eslint comma-dangle: ["error", "always-multiline"]*/
// import { Card } from "react-bootstrap"
// import { Card, CardHeader, CardTitle, Form } from 'reactstrap'
import CardBody from 'reactstrap/lib/CardBody'
import { useState, useContext, Fragment, useEffect } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
// import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import {
  Alert,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip,
} from 'reactstrap'

// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Flatpickr from 'react-flatpickr'
import { handlePostTask } from '../../redux/actions/task/post'
import { RESET_TASK_POST } from '../../redux/actions/action.types/actionTypes'

const ComponentSpinner = () => {
  return (
    <div className='fallback-spinner' style={{ marginTop: '600px' }}>
      <div className='loading component-loader'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div>
  )
}

const PostTask = () => {
  // SETTING INITIAL STATE FOR LOGIN
  const initialState = {
    title: '',
    description: '',
    location: '',
    budget: 0,
  }

  const [state, setState] = useState(initialState)
  const [dueDate, setDueDate] = useState(new Date())
  const { register, errors, handleSubmit } = useForm()
  const { user } = useSelector((state) => state.auth)
  const { status, inProcess } = useSelector((state) => state.taskPost)

  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    if (isObjEmpty(errors)) {
      const data = {
        ...state,
        dueDate,
        userId: user.id,
      }
      dispatch(handlePostTask(data))

      // dispatch(loginInitiated())
      // dispatch(handleLogin({ email, password }, history))
      // alert('You are ready to login!')
      // try {
      //   const res = await axios.post('/api/v1/auth/login', { email, password })
      //   // const res = axios.get('/api')
      //   if (res && res.data) {
      //     console.log(res.data)
      //   }
      // } catch (err) {
      //   if (err.response && err.response.data) {
      //     console.log(err.response.data)
      //   }
      // }
      // console.log(state, dueDate)
    }
  }

  useEffect(() => {
    return () => {
      dispatch({ type: RESET_TASK_POST })
    }
  }, [])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Task</CardTitle>
      </CardHeader>

      {inProcess ? (
        <ComponentSpinner />
      ) : (
        <CardBody>
          <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-2'>
              <Col sm={12} lg={6}>
                <FormGroup>
                  <Label className='' for='title'>
                    Task Title
                  </Label>
                  <Input
                    autoFocus
                    type='text'
                    // value={email}
                    id='title'
                    name='title'
                    placeholder='Logo required'
                    onChange={onChangeHandler}
                    className={classnames({
                      'is-invalid': errors['title'],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== '',
                    })}
                  />
                </FormGroup>
              </Col>

              <Col sm={12} lg={6}>
                <FormGroup>
                  <Label for='description'>Task Description</Label>
                  <Input
                    type='text'
                    name='description'
                    id='description'
                    autoFocus
                    onChange={onChangeHandler}
                    className={classnames({
                      'is-invalid': errors['description'],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== '',
                    })}
                  />
                </FormGroup>
              </Col>

              <Col sm={12} lg={6}>
                <FormGroup>
                  <Label className='' for='address'>
                    Give Address
                  </Label>
                  <Input
                    autoFocus
                    type='text'
                    // value={email}
                    id='address'
                    name='address'
                    onChange={onChangeHandler}
                    className={classnames({
                      'is-invalid': errors['address'],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== '',
                    })}
                  />
                </FormGroup>
              </Col>

              <Col sm={12} lg={6}>
                <FormGroup>
                  <Label className='' for='budget'>
                    Enter your budget
                  </Label>
                  <Input
                    autoFocus
                    type='number'
                    // value={email}
                    id='budget'
                    name='budget'
                    onChange={onChangeHandler}
                    min={100}
                    className={classnames({
                      'is-invalid': errors['budget'],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== '',
                    })}
                  />
                </FormGroup>
              </Col>

              <Col sm={4}>
                <FormGroup>
                  <Label for='dueDate'>Select Due Date</Label>
                  <Flatpickr
                    value={dueDate}
                    id='dueDate'
                    name='dueDate'
                    className='form-control'
                    onChange={(date) => setDueDate(date)}
                    options={{
                      altInput: true,
                      altFormat: 'F j, Y',
                      dateFormat: 'Y-m-d',
                    }}
                  />
                  {/* <DatePicker /> */}
                  {/* <Flatpickr
                    data-enable-time
                    value={state.dueDate}
                    onChange={(date) => {
                      setState({ ...state, ['dueDate']: date })
                    }}
                  /> */}
                </FormGroup>
              </Col>
            </Row>

            {status === 'SUCCESS' ? <p className='text-success'>Task has been posted successfully!</p> : ''}
            <Button.Ripple type='submit' color='primary'>
              Post Task
            </Button.Ripple>
          </Form>
        </CardBody>
      )}
    </Card>
  )
}

export default PostTask
