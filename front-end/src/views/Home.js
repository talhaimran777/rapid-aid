/*eslint comma-dangle: ["error", "always-multiline"]*/
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Button } from 'reactstrap'
import { handleFetchActiveOrder } from '../redux/actions/order'
import moment from 'moment'
import { isObjEmpty } from '../utility/Utils'
const Home = () => {
  const { order, inProcess } = useSelector((state) => state.orderFetch)
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleFetchActiveOrder())
  }, [])
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Active Order Details</CardTitle>
        </CardHeader>

        {inProcess ? (
          <CardBody>
            <CardText>Fetching acitve order</CardText>
          </CardBody>
        ) : (
          <CardBody>
            {!order ? <CardText>You don't have any active order!</CardText> : ''}

            {user?.id === order?.taskerId ? (
              <CardText>You have a due order to be completed {moment(order?.taskId?.dueDate).fromNow()}</CardText>
            ) : (
              ''
            )}

            {user?.id === order?.hirerId ? (
              <CardText>Your order will be completed {moment(order?.taskId?.dueDate).fromNow()}</CardText>
            ) : (
              ''
            )}

            {user?.id === order?.hirerId ? (
              <div className=''>
                <CardText>If your order has been completed then mark your order as completed!</CardText>
                <Button.Ripple color='primary'>Mark Complete</Button.Ripple>
              </div>
            ) : (
              ''
            )}
          </CardBody>
        )}
      </Card>
    </div>
  )
}

export default Home
