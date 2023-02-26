import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input, Modal } from 'components'
import { Select, SelectOption } from 'components/Select/Select'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import TransferFundsButton from '/public/assets/img/button/WithdrawFundsButton.svg'
import TransferFundsButtonMobile from '/public/assets/img/button/WithdrawFundsButtonMobile.svg'

import s from './transferFundsModal.module.scss'

interface Commission {
  placeholder: string
  value: string
}
interface TransferFundsModalProps {
  resources: SelectOption[]
  commissions: Commission[]
  onClose: () => void
}
interface TransferFundsForm {
  username: string
  resource: SelectOption
  amount: number
}
export const TransferFundsModal: FC<TransferFundsModalProps> = ({
  resources,
  commissions,
  onClose,
}) => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    watch,
  } = useForm<TransferFundsForm>()

  const availableAmount = getValues('resource.summ') || 0

  const options = {
    amount: {
      min: 0,
      max: availableAmount,
    },
    username: {
      required: 'User name is required',
    },
  }

  const { width } = useWindowDimensions()

  const handleClose = (): void => {
    onClose()
  }

  const onSubmit: SubmitHandler<TransferFundsForm> = async data => {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <div className={s.container}>
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
      <h1 className={s.title}>Transfer funds</h1>
      <form className={s.withdrawFundsForm}>
        <div className={s.valuesContainer}>
          <Controller
            control={control}
            name='username'
            rules={options.username}
            defaultValue={''}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                className={s.input}
                labelClassName={s.inputLabel}
                label='User name'
              />
            )}
          />
          <Controller
            control={control}
            name='resource'
            rules={options.username}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={newValue => onChange(newValue)}
                options={resources}
                variant='resource'
              />
            )}
          />

          <Controller
            control={control}
            name='amount'
            rules={options.amount}
            defaultValue={0}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChange={onChange}
                className={s.input}
                labelClassName={s.inputLabel}
                label='Enter amount'
                type='number'
                min={0}
                max={availableAmount}
                button='withdraw all'
                onButtonClick={() => {
                  setValue('amount', availableAmount)
                }}
              />
            )}
          />
        </div>

        <div className={s.content}>
          <h1 className={s.contentTitle}>in total</h1>
          <div className={s.commissions}>
            {commissions.map(({ placeholder, value }, index) => (
              <div className={s.commission} key={index}>
                <span className={s.placeholder}>{placeholder}</span>
                <span className={s.value}>{value}</span>
              </div>
            ))}
          </div>
          <div className={s.total}>
            <span className={s.placeholder}>Total receivable</span>
            <span className={s.value}>
              {watch('amount', 0)} {getValues('resource.label')}
            </span>
          </div>
        </div>
        <div className={s.withdrawButton}>
          <Button label='Transfer funds' onClick={handleSubmit(onSubmit)}>
            {width > 768 ? (
              <TransferFundsButton />
            ) : (
              <TransferFundsButtonMobile />
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
