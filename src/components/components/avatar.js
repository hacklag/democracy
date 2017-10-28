import React from 'react'
import md5 from 'md5'

const GRAVATAR_URL = 'https://gravatar.com/avatar/'

const Avatar = ({src, size = 40, email}) => {
  src = src || `${GRAVATAR_URL}${md5(email)}?s=${size}&d=mm`

  return (
    <div className='Avatar'>
      <img
        className='Avatar__image'
        src={src}
        alt='avatar'
        width={size}
        height={size}
      />

      <style jsx>{`
        .Avatar {
          display: inline-block;
          position: relative;
        }

        .Avatar__image {
          display: inline-block;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}

export default Avatar
