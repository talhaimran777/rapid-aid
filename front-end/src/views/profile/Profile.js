/*eslint comma-dangle: ["error", "always-multiline"]*/
import ProfileHeader from './header/ProfileHeader'
import { Fragment } from 'react'
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
const Profile = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Profile' breadCrumbParent='Pages' breadCrumbActive='Profile' /> */}
      <div id='user-profile'>
        <Row>
          <Col sm='12'>
            <ProfileHeader />
          </Col>
        </Row>
        {/* <section id='profile-info'>
          <Row>
            <Col lg={{ size: 3, order: 1 }} sm={{ size: 12 }} xs={{ order: 2 }}>
              <ProfileAbout data={data.userAbout} />
              <ProfileSuggestedPages data={data.suggestedPages} />
              <ProfileTwitterFeeds data={data.twitterFeeds} />
            </Col>
            <Col lg={{ size: 6, order: 2 }} sm={{ size: 12 }} xs={{ order: 1 }}>
              <ProfilePosts data={data.post} />
            </Col>
            <Col lg={{ size: 3, order: 3 }} sm={{ size: 12 }} xs={{ order: 3 }}>
              <ProfileLatestPhotos data={data.latestPhotos} />
              <ProfileFriendsSuggestions data={data.suggestions} />
              <ProfilePoll data={data.polls} />
            </Col>
          </Row>
          <Row>
            <Col className='text-center' sm='12'>
              <Button color='primary' className='border-0 mb-1 profile-load-more' size='sm' onClick={handleBlock}>
                <UILoader blocking={block} overlayColor='rgba(255,255,255, .5)'>
                  <span> Load More</span>
                </UILoader>
              </Button>
            </Col>
          </Row>
        </section> */}
      </div>
    </Fragment>

    // <div>
    //   <ProfileHeader />
    // </div>
  )
}

export default Profile
