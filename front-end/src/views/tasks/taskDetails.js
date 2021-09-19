/*eslint comma-dangle: ["error", "always-multiline"]*/
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
  Input,
  Button,
  Label,
  Spinner,
} from 'reactstrap'
import classnames from 'classnames'
import { Image } from 'react-bootstrap'
import { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchTask, handleFetchTasks, initiateTaskFetch } from '../../redux/actions/task/fetch'
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'
// import { MapPin, Calendar } from 'react-feather'
import ComponentSpinner from '../../@core/components/spinner/Loading-spinner'
import { MapPin, Calendar } from 'react-feather'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import { isObjEmpty } from '@utils'
import { handleAddComment } from '../../redux/actions/comment/add'

const TaskDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [postTime, setPostTime] = useState('')
  const [comment, setComment] = useState('')
  // const [comments, setComments] = useState([])

  const { register, errors, handleSubmit } = useForm()

  const { task, inProcess, error } = useSelector((state) => state.taskFetch)
  const { user } = useSelector((state) => state.auth)
  const { commentAddInProcess } = useSelector((state) => state.addComment)
  const { avatar } = user

  //   console.log(params)

  const onSubmit = (formData) => {
    if (isObjEmpty(errors)) {
      const data = {}
      data.taskId = task._id
      data.comment = comment.trim()

      dispatch(handleAddComment(data))
      setComment('')
    }
  }

  const getCommentPostedTime = (date) => {
    return moment(date).fromNow()
  }

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

  // useEffect(() => {
  //   if (task) {
  //     const { postedDate } = task
  //     setPostTime(moment(postedDate).fromNow())
  //   }
  // }, [task])

  return inProcess ? (
    <ComponentSpinner />
  ) : !error && task ? (
    <Card>
      <CardHeader>
        <CardTitle className='text-primary'>{task.title}</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col sm={12} md={10} lg={8}>
            <CardText>{task.description}</CardText>

            <Row className='mt-3 justify-content-between align-items-center'>
              <Col>
                <Image src={task.avatar} alt='avatar' roundedCircle height='70px' width='70px' className='mb-1' />
                <h5 className='font-weight-bold text-primary'>Posted By</h5>
                <p className='font-weight-light'>{task.name}</p>
              </Col>
              <Col>
                <h5 className='text-primary'>Posted At</h5>
                <p>{postTime || '26 mins ago'}</p>
              </Col>

              {task.user === user.id ? (
                <Col className='d-flex justify-content-end'>
                  <Link to={`/task-update/${task._id}`}>
                    <Button.Ripple color='primary'>Update Task</Button.Ripple>
                  </Link>
                </Col>
              ) : (
                ''
              )}

              {task.user !== user.id ? (
                <Col className='d-flex justify-content-end'>
                  <Button.Ripple color='primary'>Make Offer</Button.Ripple>
                </Col>
              ) : (
                ''
              )}
            </Row>
            <Row className='my-3 justify-content-between align-items-center'>
              <Col>
                <div className='d-flex mb-1'>
                  <MapPin className='mr-1 text-primary' />
                  <h5 className='font-weight-bold'>{task.address}</h5>
                </div>

                <div className='d-flex'>
                  <Calendar className='mr-1 text-primary' />
                  <h5 className='font-weight-bold'>{task.dueDate}</h5>
                </div>
              </Col>
              {/* <Col>
            <h5>Posted At</h5>
            <p>{postTime || '26 mins ago'}</p>
          </Col> */}
            </Row>

            <CardTitle className='text-primary'>Comment Section</CardTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Label for='comment' className='mb-1'>
                Add Comment
              </Label>
              <Row className='mb-3'>
                <Col className='d-flex justify-content-between align-items-start'>
                  <Image src={avatar} alt='avatar' roundedCircle height='40px' width='40px' className='mr-1' />

                  <Input
                    type='textarea'
                    name='comment'
                    id='comment'
                    rows={5}
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    className={classnames({
                      'is-invalid': errors['comment'],
                    })}
                    innerRef={register({
                      required: true,
                      validate: (value) => value !== '',
                    })}
                  />
                </Col>
                <Col sm={12}>
                  <Button.Ripple className='mt-2 mr-1' color='primary' type='submit'>
                    Add
                  </Button.Ripple>

                  {commentAddInProcess ? <Spinner type='grow' color='primary' /> : ''}
                </Col>
              </Row>
            </form>

            <>
              <CardTitle>Comments</CardTitle>

              {task && task.comments && task.comments.length > 0 ? (
                task.comments.map((comment) => (
                  <Col className=''>
                    <Card className='border p-1'>
                      <Row className='align-items-center'>
                        <Col sm={2} className='mb-1 mb-sm-0'>
                          <Image
                            src={comment.avatar}
                            alt='avatar'
                            roundedCircle
                            height='40px'
                            width='40px'
                            className='mr-1'
                          />
                        </Col>
                        <Col className='text-justify'>
                          <span className=''>{comment.comment}</span>
                        </Col>
                        <Col sm={12} className='mt-1'>
                          <span className='font-lg text-primary'>{getCommentPostedTime(comment.date)}</span>
                        </Col>
                      </Row>
                      {/* <h1>Comment</h1> */}
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No Comments Available</p>
              )}
            </>
            {/* <CardHeader></CardHeader> */}

            {/* <p>{getCommentPostedTime(comment.date)}</p> */}
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) : (
    <h1>Error Fetching Task!</h1>
  )
}

export default TaskDetails
