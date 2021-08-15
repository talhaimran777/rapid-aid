/*eslint comma-dangle: ["error", "always-multiline"]*/
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Rapid Aid Home Page</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Use this application to find & post work</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
