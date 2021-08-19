import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchTasks, initiateTaskFetch } from '../../redux/actions/task/fetch'
import useJwt from '@src/auth/jwt/useJwt'
import axios from 'axios'

const Tasks = () => {
  const dispatch = useDispatch()

  const fetchTasks = useCallback(async () => {
    dispatch(initiateTaskFetch())
    dispatch(handleFetchTasks())
  }, [dispatch])

  useEffect(() => {
    fetchTasks()
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>This is your tasks page.</CardText>
      </CardBody>
    </Card>
  )
}

export default Tasks
