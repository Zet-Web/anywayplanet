import cn from 'classnames'

import Image from 'next/image'
import { Logo, Button, Input } from 'components'

import { isEmailValid } from 'shared/helpers/isEmailValid'

import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import MediumBoldGreen from '/public/assets/img/button/MediumBoldGreen.svg'
import SmallGreenEmail from '/public/assets/img/button/SmallGreenEmail.svg'
import greenPlanetFull from '/public/assets/img/greenPlanetFull.png'
import greenPlanetLeftBottom from '/public/assets/img/greenPlanetLeftBottom.png'

import s from './passwordRecoveryPage.module.scss'
import { recovery } from 'shared/api/routes/auth'
import { handleError } from '../../shared/utils/handleError'

interface RecoveryPasswordForm {
  email: string
}

export const PasswordRecoveryPage: FC = () => {
  const router = useRouter()
  const { width } = useWindowDimensions()

  const isLaptopWidth = width > 766

  const [mailSend, setMailSend] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RecoveryPasswordForm>()

  const onSubmit = async (formDdata: RecoveryPasswordForm) => {
    setEmail(formDdata.email)
    try {
      const { data } = await recovery({
        email: formDdata.email,
      })
      setMailSend(true)
    } catch (error) {
      handleError(error)
      setError('email', { message: `No user found for this email` })
    }
  }

  return (
    <>
      <div className={s.bg}>
        <div className={s.wrapper}>
          <div className={s.container}>
            <Logo
              className={s.logo}
              width={isLaptopWidth ? 328 : 196}
              height={isLaptopWidth ? 96 : 56}
            />
            <div className={s.title}>
              <p>password</p>
              <div className={s.greenTitle}>
                <span className={s.greenText}> recovery</span>
                <span className={cn(s.greenTextBorder, s.lightBorder)}>
                  recovery
                </span>
              </div>
            </div>
            <div className={cn(s.formContainer, { [s.emailSended]: mailSend })}>
              {isLaptopWidth && (
                <>
                  <div
                    className={cn(s.leftLine, { [s.emailSended]: mailSend })}
                  >
                    <div className={s.leftLineInner}></div>
                  </div>
                  <div
                    className={cn(s.rightLine, { [s.emailSended]: mailSend })}
                  >
                    <div className={s.rightLineInner}></div>
                  </div>
                </>
              )}
              <div className={s.topLine}>
                <div className={s.topLineInner}></div>
              </div>
              <div className={s.bottomLine}>
                <div className={s.bottomLineInner}></div>
              </div>
              {mailSend ? (
                <>
                  <p className={s.emailSendInfo}>
                    An email has been sent to <span>{email}</span> with a link
                    to reset your forgotten password. If you haven`&apos;`t
                    received an email within 5 minutes, please check your spam
                    folder or resubmit your recovery request.
                  </p>
                  <div className={cn(s.buttonContainer, s.emailSended)}>
                    <Button
                      onClick={() => router.push('/')}
                      className={s.buttonRestorePassword}
                      label='to the main page'
                    >
                      {isLaptopWidth ? (
                        <MediumBoldGreen />
                      ) : (
                        <SmallGreenEmail />
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.wrapperInput}>
                      <Controller
                        name={'email'}
                        control={control}
                        rules={{
                          required: 'Email is required',
                          validate: value =>
                            isEmailValid(value) || 'Enter a valid email',
                        }}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            value={value}
                            onChange={onChange}
                            label={isLaptopWidth ? 'Enter e-mail' : '@ Email'}
                            type='text'
                          />
                        )}
                      />
                    </div>

                    {errors.email?.message && (
                      <p className={s.errorsMessage}>{errors.email?.message}</p>
                    )}

                    <div className={cn(s.buttonContainer, s.emailEnter)}>
                      <Button
                        onClick={handleSubmit(onSubmit)}
                        className={s.buttonRestorePassword}
                        label='reset the password'
                      >
                        {isLaptopWidth ? (
                          <MediumBoldGreen />
                        ) : (
                          <SmallGreenEmail />
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={s.imgPlanetRight}>
        <Image src={greenPlanetFull} />
      </div>
      <div className={s.imgPlanetLeftBottom}>
        <Image src={greenPlanetLeftBottom} />
      </div>
    </>
  )
}
