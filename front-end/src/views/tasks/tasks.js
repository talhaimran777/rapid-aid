import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap'
import { Image } from 'react-bootstrap'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchTasks, initiateTaskFetch } from '../../redux/actions/task/fetch'
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'
import ComponentSpinner from '../../@core/components/spinner/Loading-spinner'
import { MapPin, Calendar } from 'react-feather'
import { Link } from 'react-router-dom'

const Tasks = () => {
  const dispatch = useDispatch()

  // ** REDUX SELECTORS
  const { tasks, inProcess } = useSelector((state) => state.taskFetch)

  const fetchTasks = useCallback(async () => {
    // dispatch(initiateTaskFetch())
    dispatch(handleFetchTasks())
  }, [dispatch])

  useEffect(() => {
    fetchTasks()

    return () => {
      dispatch({ type: 'CLEAR_FETCH_TASKS' })
    }
  }, [])

  return inProcess ? (
    <ComponentSpinner />
  ) : (
    <Row className='justify-content-center'>
      {/* <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader> */}
      <Col xs={12} sm={10} md={8} lg={7} xl={6}>
        {tasks && tasks.length >= 1 ? (
          tasks.map((task) => (
            <Link key={task._id} to={`/tasks/${task._id}`}>
              <Card style={{ cursor: 'pointer' }}>
                {/* <CardHeader>
                  <CardTitle>{task.title}</CardTitle>
                </CardHeader> */}
                <CardBody>
                  <Row className=' align-items-center mb-2'>
                    <Col xs={2} sm={2} md={2} className='text-left text-sm-left'>
                      <Image src={task.avatar} alt='task' roundedCircle height='50px' width='50px' />
                    </Col>
                    <Col xs={10} sm={10} md={6} className='text-left text-sm-left'>
                      {' '}
                      <h3 className='text-truncate text-primary font-weight-bold'>{task.title}</h3>{' '}
                    </Col>
                    <Col xs={12} md={4} className='text-left text-sm-left text-md-right mt-1 mt-md-0'>
                      {' '}
                      <strong className=''>RS </strong>
                      {task.budget}
                    </Col>
                  </Row>
                  <Row className='align-items-center mb-1'>
                    <Col xs={12} className='text-truncate text-left'>
                      <MapPin className='mr-1' size={20} />
                      <span className='text-white font-weight-light'>{task.address}</span>
                    </Col>
                  </Row>
                  <Row className='justify-content-center align-items-center'>
                    <Col xs={12} className='text-left'>
                      <Calendar className='mr-1 ' size={20} />
                      <span className='text-white font-weight-light'>{task.dueDate}</span>
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
            </Link>
          ))
        ) : (
          <h1 className='text-center'>No Tasks Available</h1>
        )}
      </Col>
    </Row>
  )
}

export default Tasks
