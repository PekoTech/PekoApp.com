export type ApiError = {
  status: number
  message: string
}

export type User = {
  first_name: string
  last_name: string
  email: string
}

export type ContactMessage = {
  first_name: string
  email: string
  message: string
}

const request = (...args: Parameters<Window['fetch']>) => {
  return new Promise((resolve, reject) =>
    window.fetch(...args).then((res) => {
      return res.json().then((data) => {
        if (res.ok) {
          return resolve({ data })
        } else {
          return reject({ status: res.status, error: data.error })
        }
      })
    })
  )
}

export const api = {
  signup(user: User) {
    return request(
      `/api/mail?email=${user.email}&first_name=${user.first_name}&last_name=${user.last_name}`,
      {
        method: 'POST',
      }
    )
  },
  contact(info: ContactMessage) {
    return request(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
  },
}
