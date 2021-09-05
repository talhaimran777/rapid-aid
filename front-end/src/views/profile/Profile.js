/*eslint comma-dangle: ["error", "always-multiline"]*/

import '@styles/react/pages/page-profile.scss'
import ProfileHeader from './header/ProfileHeader'
import { Fragment, useEffect, useState } from 'react'
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
import ProfileAbout from './about/About'
import ProfileOverview from './overview/ProfileOverview'
import { useDispatch, useSelector } from 'react-redux'
import { handleFetchOwnProfile } from '../../redux/actions/profile/fetch/getOwnProfile'

const ComponentSpinner = () => {
  return (
    <div className='fallback-spinner' style={{ marginTop: '1000px' }}>
      <div className='loading component-loader'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div>
  )
}

const Profile = () => {
  const [ownProfile, setOwnProfile] = useState({})

  const { fetchOwnProfileInProcess, profile } = useSelector((state) => state.profile)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleFetchOwnProfile())
  }, [])

  useEffect(() => {
    // dispatch(handleFetchOwnProfile())

    if (profile) {
      setOwnProfile(profile)
    }
  }, [profile])

  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Profile' breadCrumbParent='Pages' breadCrumbActive='Profile' /> */}
      <div id='user-profile'>
        <Row>
          <Col sm='12'>
            <ProfileHeader profile={ownProfile} />
          </Col>
        </Row>

        {fetchOwnProfileInProcess ? (
          <ComponentSpinner />
        ) : (
          <Row>
            <Col sm={3}>
              <ProfileAbout profile={ownProfile} />
            </Col>
            <Col sm={9}>
              <ProfileOverview />
            </Col>
          </Row>
        )}

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
