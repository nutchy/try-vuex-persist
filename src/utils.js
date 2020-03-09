export const doLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1500)
  }).then(() => {
    return { accessToken: '1234', refreshToken: '456', expiredIn: 10 } // 10 sec }
  })
}

export const doRefreshToken = () => {
  console.log('doRefreshToken')
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1500)
  }).then(() => {
    return { accessToken: '1234', refreshToken: '456', expiredIn: 10 } // 10 sec }
  })
}

export const calculateExpiredAt = expiresIn => expiresIn * 1000 + new Date().getTime()
