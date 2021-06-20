import { useSelector } from 'react-redux';
import md5 from 'md5';

const ProfileImage = () => {
  const { user } = useSelector((state) => state.auth);

  // GETTING EMAIL FROM THE USER OBJECT
  const { email } = user;

  // HASHING EMAIL WITH MD5
  const hashedEmail = md5(email);

  // REQUEST URL
  const url = `https://www.gravatar.com/avatar/${hashedEmail}?s=200`;

  return (
    <img
      height='35px'
      width='35px'
      className=' rounded-full cursor-pointer'
      src={url}
      alt=''
    />
  );
};

export default ProfileImage;
