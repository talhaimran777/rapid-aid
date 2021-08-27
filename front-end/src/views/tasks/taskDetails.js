import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap'
import { Image } from 'react-bootstrap'
import { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchTask, handleFetchTasks, initiateTaskFetch } from '../../redux/actions/task/fetch'
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'
// import { MapPin, Calendar } from 'react-feather'
import ComponentSpinner from '../../@core/components/spinner/Loading-spinner'
import { MapPin, Calendar } from 'react-feather'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const TaskDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [postTime, setPostTime] = useState('')
  const { task, inProcess, error } = useSelector((state) => state.taskFetch)

  //   console.log(params)

  useEffect(() => {
    if (id) {
      dispatch(handleFetchTask(id))
    }
  }, [id])

  useEffect(() => {
    if (task) {
      const { postedDate } = task
      setPostTime(moment(postedDate).fromNow())
    }
  }, [task])

  return inProcess ? (
    <ComponentSpinner />
  ) : !error && task ? (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>{task.description}</CardText>

        <Row className='mt-3 justify-content-between align-items-center'>
          <Col>
            <Image src={task.avatar} alt='avatar' roundedCircle height='70px' width='70px' className='mb-1' />
            <h5 className='font-weight-bold'>Posted By</h5>
            <p className='font-weight-light'>{task.name}</p>
          </Col>
          <Col>
            <h5>Posted At</h5>
            <p>{postTime || '26 mins ago'}</p>
          </Col>
        </Row>
        <Row className='mt-3 justify-content-between align-items-center'>
          <Col>
            <div className='d-flex align-items-center mb-1'>
              <MapPin className='mr-1' />
              <h5 className='font-weight-bold'>{task.address}</h5>
            </div>

            <div className='d-flex align-items-center'>
              <Calendar className='mr-1' />
              <h5 className='font-weight-bold'>{task.dueDate}</h5>
            </div>
          </Col>
          {/* <Col>
            <h5>Posted At</h5>
            <p>{postTime || '26 mins ago'}</p>
          </Col> */}
        </Row>
      </CardBody>
    </Card>
  ) : (
    <h1>Error Fetching Task!</h1>
  )
}

export default TaskDetails
