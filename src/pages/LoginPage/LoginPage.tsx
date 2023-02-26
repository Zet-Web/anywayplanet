import { FC, useState } from 'react'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import { add } from 'date-fns'

import Image from 'next/image'

import { Button, GreenTitle, Input, Logo } from 'components'

import { useWindowDimensions } from '../../shared/hooks/useWindowDimensions'
import MediumBoldGreen from '/public/assets/img/button/MediumBoldGreen.svg'
import SmallBoldGreen from '/public/assets/img/button/SmallBoldGreen.svg'
import formPlanet from '../../../public/assets/img/formPlanet.png'
import formTopPlanet from '../../../public/assets/img/formTopPlanet.png'

import s from './loginPage.module.scss'
import { authorize } from 'shared/api/routes/auth'
import { cookies } from 'shared/utils/cookies'
import { useRouter } from 'next/router'
import { useAppDispatch } from 'shared/hooks/redux'
import { setToken } from 'store/slices/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type LoginFormState = {
  email: string
  password: string
}
const loginFormValues: LoginFormState = {
  email: '',
  password: '',
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
})

export const LoginPage: FC = () => {
  const { width } = useWindowDimensions()
  const [loginForm, setLoginForm] = useState<LoginFormState>(loginFormValues)
  const [pass, setPass] = useState<boolean>(true)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handlePass = () => setPass(prev => !prev)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({
    defaultValues: loginFormValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = async (formData: LoginFormState) => {
    setLoginForm(formData)
    const { data } = await authorize({
      email: formData.email,
      password: formData.password,
    })
    if (!!Object.keys(errors).length) return

    cookies.set('access_token', data.accessToken, {
      path: '/',
      expires: add(new Date(), { hours: 2 }),
    })
    cookies.set('refresh_token', data.refreshToken, {
      path: '/',
    })

    dispatch(setToken(data.accessToken))
    router.push('/')
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.bottomImage}>
          <Image src={formPlanet} alt='img' />
        </div>
        <Logo height={105} width={360} className={s.logo} />
        <h2 className={s.headingWrap}>
          <div className={s.heading}>Log in or</div>
          <div className={s.headingGreen}>
            <GreenTitle text='sign up' lightBorder={true} />
          </div>
        </h2>
        <div className={s.formContainer}>
          <div className={s.topImage}>
            <Image src={formTopPlanet} alt='img' />
          </div>
          <div className={s.lineContainerTop}>
            <div className={s.lineTop} />
          </div>
          <div className={s.lineContainerLeft}>
            <div className={s.lineLeft} />
          </div>
          <div className={s.lineContainerRight}>
            <div className={s.lineRight} />
          </div>
          <div className={s.lineContainerBottom}>
            <div className={s.lineBottom} />
          </div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.formBlock}>
              <Controller
                name='email'
                control={control}
                rules={{ required: 'email is required' }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    type='text'
                    label='@ Email'
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <span className={s.error}>{errors.email.message}</span>
              )}
              <Controller
                name='password'
                control={control}
                rules={{ required: 'password is required' }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    iconType='password'
                    label='Password'
                    onChange={onChange}
                    value={value}
                    onIconClick={handlePass}
                    type={pass ? 'password' : 'text'}
                  />
                )}
              />
              {errors.password && (
                <span className={s.error}>{errors.password.message}</span>
              )}
            </div>
            <Link href='/password-recovery' className={s.link}>
              <a className={s.link}>I forgot my password</a>
            </Link>
            <div className={s.button}>
              <Button
                className={s.button}
                onClick={handleSubmit(onSubmit)}
                label='LOG IN'
              >
                {width >= 768 ? <MediumBoldGreen /> : <SmallBoldGreen />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
