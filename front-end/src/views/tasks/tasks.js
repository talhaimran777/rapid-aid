import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap'
import { Image } from 'react-bootstrap'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchTasks, initiateTaskFetch } from '../../redux/actions/task/fetch'
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'
import ComponentSpinner from '../../@core/components/spinner/Loading-spinner'
import { MapPin, Calendar } from 'react-feather'

const Tasks = () => {
  const dispatch = useDispatch()

  // ** REDUX SELECTORS
  const { tasks, inProcess } = useSelector((state) => state.task)

  const fetchTasks = useCallback(async () => {
    // dispatch(initiateTaskFetch())
    dispatch(handleFetchTasks())
  }, [dispatch])

  useEffect(() => {
    fetchTasks()
  }, [])

  return inProcess ? (
    <ComponentSpinner />
  ) : (
    <Row className='justify-content-center'>
      {/* <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader> */}
      <Col xs={12} sm={10} md={8} lg={7} xl={6}>
        {tasks &&
          tasks.map((task) => (
            <Card key={task.id} style={{ cursor: 'pointer' }}>
              {/* <CardHeader>
                <CardTitle>{task.title}</CardTitle>
              </CardHeader> */}
              <CardBody>
                <Row className=' align-items-center mb-2'>
                  <Col xs={2} sm={2} md={2} className='text-left text-sm-left'>
                    <Image
                      src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                      alt='task'
                      roundedCircle
                      height='50px'
                      width='50px'
                    />
                  </Col>
                  <Col xs={10} sm={10} md={6} className='text-left text-sm-left'>
                    {' '}
                    <h5 className='text-truncate'>{task.title}</h5>{' '}
                  </Col>
                  <Col xs={12} md={4} className='text-left  text-sm-left text-md-right mt-1 mt-md-0'>
                    {' '}
                    <strong>RS </strong>
                    {task.budget}
                  </Col>
                </Row>
                <Row className='align-items-center mb-1'>
                  <Col xs={12} className='text-truncate text-left'>
                    <MapPin className='mr-1 text-primary' size={20} />
                    {task.location}
                  </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                  <Col xs={12} className='text-left'>
                    <Calendar className='mr-1 text-primary' size={20} />
                    {task.dueDate}
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col>
                    <h4>
                      <Badge color='primary'>{task.status}</Badge>
                    </h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
      </Col>
    </Row>
  )
}

export default Tasks
