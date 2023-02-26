import React, { useState } from 'react'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form'
import { Input, Button } from 'components'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import MediumGreyMix from '/public/assets/img/button/MediumGreyMix.svg'
import SmallMediumGreyMix from '/public/assets/img/button/SmallMediumGreyMix.svg'
import formPlanet from '../../../public/assets/img/formPlanet.png'
import formTopPlanet from '../../../public/assets/img/formTopPlanet.png'
import s from './settingsPage.module.scss'

interface SettingFormState {
    name: string
    email: string
    oldPassword: string
    newPassword: string
    repeatPassword: string
}

export const SettingsPage = () => {
    const [oldPass, setOldPass] = useState<boolean>(true)
    const [newPass, setNewPass] = useState<boolean>(true)
    const [repeatPass, setRepeatPass] = useState<boolean>(true)

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [oldPassword, setOldPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SettingFormState>({
        defaultValues: {
            name,
            email,
            oldPassword,
            newPassword,
            repeatPassword,
        },
    })

    const onSubmit = (formData: SettingFormState) => {
        const { name, email, oldPassword, newPassword, repeatPassword } =
            formData
        setName(name)
        setEmail(email)
        setOldPassword(oldPassword)
        setNewPassword(newPassword)
        setRepeatPassword(repeatPassword)
    }

    const handleOldPass = () => setOldPass(prev => !prev)
    const handleNewPass = () => setNewPass(prev => !prev)
    const handleRepeatPass = () => setRepeatPass(prev => !prev)

    const { width } = useWindowDimensions()

    return (
        <div className={s.settingsWrapper}>
            <div className={s.bottomImage}><Image src={formPlanet} alt='img' /></div>
            <div className={s.topImage}><Image src={formTopPlanet} alt='img' /></div>
            <main className={s.mainWrapper}>
                <div className={s.titleWrapper}>
                    <h1 className={s.title}>
                        Personal backoffice
                        <span className={s.titleSmallText}> / SETTINGS</span>
                        <br />
                        <span className={s.titleBigText}>SETTINGS</span>
                    </h1>
                </div>
                <div className={s.settingsCard}>
                    <div className={s.topLine}>
                        <div className={s.topLineInner}></div>
                    </div>
                    <div className={s.bottomLine}>
                        <div className={s.bottomLineInner}></div>
                    </div>
                    <div className={s.leftLine}>
                        <div className={s.leftLineInner}></div>
                    </div>
                    <div className={s.rightLine}>
                        <div className={s.rightLineInner}></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.inputWrapper}>
                            <Controller
                                name='name'
                                control={control}
                                rules={{ required: 'name is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        iconType='rewrite'
                                        value={value}
                                        label='Your name'
                                        onChange={onChange}
                                    />
                                )}
                            />
                            {errors.name && (
                                <span className={s.error}>{errors.name.message}</span>
                            )}
                        </div>
                        <div className={s.inputWrapper}>
                            <Controller
                                name='email'
                                control={control}
                                rules={{ required: 'email is required' }}
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        value={value}
                                        label='@ Email'
                                        onChange={onChange}
                                    />
                                )}
                            />
                            {errors.email && (
                                <span className={s.error}>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className={s.securitySettings}>
                            <div className={s.securitySettingsTitle}>
                                security settings
                            </div>
                            <div className={s.inputWrapper}>
                                <Controller
                                    name='oldPassword'
                                    control={control}
                                    rules={{ required: 'old password is required' }}
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            type={oldPass ? 'password' : 'text'}
                                            onIconClick={handleOldPass}
                                            iconType='password'
                                            value={value}
                                            label='Enter the old password'
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                {errors.oldPassword && (
                                    <span className={s.error}>
                                        {errors.oldPassword.message}
                                    </span>
                                )}
                            </div>
                            <div className={s.inputWrapper}>
                                <Controller
                                    name='newPassword'
                                    control={control}
                                    rules={{ required: 'new password is required' }}
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            type={newPass ? 'password' : 'text'}
                                            onIconClick={handleNewPass}
                                            iconType='password'
                                            value={value}
                                            label='Enter a new password'
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                {errors.newPassword && (
                                    <span className={s.error}>
                                        {errors.newPassword.message}
                                    </span>
                                )}
                            </div>
                            <div className={s.inputWrapper}>
                                <Controller
                                    name='repeatPassword'
                                    control={control}
                                    rules={{ required: 'repeat password is required' }}
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            type={repeatPass ? 'password' : 'text'}
                                            onIconClick={handleRepeatPass}
                                            iconType='password'
                                            value={value}
                                            label='Repeat new password'
                                            onChange={onChange}
                                        />
                                    )}
                                />
                                {errors.repeatPassword && (
                                    <span className={s.error}>
                                        {errors.repeatPassword.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={s.buttonWrapper}>
                            <Button
                                onClick={handleSubmit(onSubmit)}
                                label='Save setting'
                                className={s.custom}
                            >
                                {width > 768 ? (
                                    <MediumGreyMix />
                                ) : (
                                    <SmallMediumGreyMix />
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
