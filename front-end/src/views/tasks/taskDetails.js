import { Card, CardHeader, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap'
import { Image } from 'react-bootstrap'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchTask, handleFetchTasks, initiateTaskFetch } from '../../redux/actions/task/fetch'
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'
import ComponentSpinner from '../../@core/components/spinner/Loading-spinner'
import { MapPin, Calendar } from 'react-feather'
import { useParams } from 'react-router-dom'
const TaskDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  //   console.log(params)

  useEffect(() => {
    if (id) {
      dispatch(handleFetchTask(id))
    }
  }, [id])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Details</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>Showing Task with ID: {id}</CardText>
      </CardBody>
    </Card>
  )
}

export default TaskDetails
