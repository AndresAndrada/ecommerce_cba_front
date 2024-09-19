import axios from 'axios'

function useSignUp() {
  const signUp = async ({
    username,
    email,
    password,
    userFullName,
  }) => {
    const { data } = await axios.post('/user', {
      username,
      email,
      password,
      userFullName,
    })
    console.log(data, 'DATA')
    if (data?.id) {
      return { ok: true }
    }
    return { ok: false, data }
  }

  return {
    signUp,
  }
}

export default useSignUp