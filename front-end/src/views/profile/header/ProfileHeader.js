import { useState } from 'react'
import { AlignJustify, Rss, Info, Users, Edit } from 'react-feather'
import { Card, CardImg, Collapse, Navbar, Nav, NavItem, NavLink, Button, CardHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'react-bootstrap'

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Card className='profile-header mb-2'>
      {/* <CardImg src={user.avatar} alt='User Profile Image' top /> */}

      <CardHeader>
        <div className='position-relative'>
          <div className='profile-img-container d-flex align-items-center'>
            <div className='profile-img'>
              <Image src={user.avatar} alt='avatar' roundedCircle width='120px' height='120px' />
              {/* <img className='rounded img-fluid' src={user.avatar} alt='Card image' /> */}
            </div>
            <div className='profile-title ml-3'>
              <h2 className='text-white'>{user.name}</h2>
              {/* <p className='text-white'>React Developer</p> */}
            </div>
          </div>
        </div>
      </CardHeader>
      {/* <div className='profile-header-nav'>
        <Navbar className='justify-content-end justify-content-md-between w-100' expand='md' light>
          <Button color='' className='btn-icon navbar-toggler' onClick={toggle}>
            <AlignJustify size={21} />
          </Button>
          <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
              <Nav className='mb-0' pills>
                <NavItem>
                  <NavLink className='font-weight-bold' active>
                    <span className='d-none d-md-block'>Feed</span>
                    <Rss className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='font-weight-bold'>
                    <span className='d-none d-md-block'>About</span>
                    <Info className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='font-weight-bold'>
                    <span className='d-none d-md-block'>Photos</span>
                    <Image className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='font-weight-bold'>
                    <span className='d-none d-md-block'>Friends</span>
                    <Users className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
              </Nav>
              <Button color='primary'>
                <Edit className='d-block d-md-none' size={14} />
                <span className='font-weight-bold d-none d-md-block'>Edit</span>
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div> */}
    </Card>
  )
}

export default ProfileHeader
