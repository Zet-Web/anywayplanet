import { FC, useState } from 'react'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'

import Image from 'next/image'

import { Button, GreenTitle, Input, Logo } from 'components'

import { useWindowDimensions } from '../../shared/hooks/useWindowDimensions'
import MediumBoldGreen from '/public/assets/img/button/MediumBoldGreen.svg'
import SmallBoldGreen from '/public/assets/img/button/SmallBoldGreen.svg'
import formPlanet from '../../../public/assets/img/formPlanet.png'
import formTopPlanet from '../../../public/assets/img/formTopPlanet.png'

import s from './registerPage.module.scss'
import { register } from 'shared/api/routes/auth'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type RegisterFormState = {
  email: string
  user_name: string
  password: string
  repeat_password: string
}
const registerFormValues: RegisterFormState = {
  email: '',
  user_name: '',
  password: '',
  repeat_password: '',
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  user_name: yup.string().required(),
  repeat_password: yup.string().oneOf([yup.ref('password')]),
})

export const RegisterPage: FC = () => {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const [registerForm, setRegisterForm] =
    useState<RegisterFormState>(registerFormValues)
  const [pass, setPass] = useState<boolean>(true)
  const [repPass, setRepPass] = useState<boolean>(true)

  const handlePass = () => setPass(prev => !prev)
  const handleRepPass = () => setRepPass(prev => !prev)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormState>({
    defaultValues: registerFormValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = async (formData: RegisterFormState) => {
    setRegisterForm(formData)

    const { data } = await register({
      email: formData.email,
      password: formData.password,
      username: formData.user_name,
    })
  
    reset()
    if (data.statusCode != 400) router.push('/login')
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.bottomImage}>
          <Image src={formPlanet} alt='img' />
        </div>
        <Logo height={105} width={360} className={s.logo} />
        <h2 className={s.headingWrap}>
          <div className={s.heading}>Register or</div>
          <div className={s.headingGreen}>
            <GreenTitle text='login' lightBorder={true} />
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
                    type='email'
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
                name='user_name'
                control={control}
                rules={{ required: 'user name is required' }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    type='text'
                    label='User name'
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.user_name && (
                <span className={s.error}>user name is a required field</span>
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
              <Controller
                name='repeat_password'
                control={control}
                rules={{ required: 'Repeat the password is required' }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    iconType='password'
                    label='Repeat the password'
                    onChange={onChange}
                    value={value}
                    onIconClick={handleRepPass}
                    type={repPass ? 'password' : 'text'}
                  />
                )}
              />
              {errors.repeat_password && (
                <span className={s.error}>
                  repeat password not equal password
                </span>
              )}
            </div>

            <div className={s.button}>
              <Button
                className={s.button}
                onClick={handleSubmit(onSubmit)}
                label={width >= 768 ? 'SIGN UP' : 'LOG IN'}
              >
                {width >= 768 ? <MediumBoldGreen /> : <SmallBoldGreen />}
              </Button>
            </div>
            <div className={s.rules}>
              {`By clicking on the "Sign Up" button, I confirm
							that I have read
                the`}
              <Link href='#' className={s.link}>
                <a className={s.link}>rules</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
