import md5 from 'md5';

const getImageURL = (email, size) => {
  // HASHING EMAIL WITH MD5
  const hashedEmail = md5(email);

  // REQUEST URL
  const url = `https://www.gravatar.com/avatar/${hashedEmail}?s=${size}`;

  // RETURN THE PROFILE IMAGE URL
  return url;
};

export default getImageURL;
