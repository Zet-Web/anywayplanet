import { Button, Input, Modal } from 'components'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import WithdrawFundsButton from '/public/assets/img/button/WithdrawFundsButton.svg'
import WithdrawFundsButtonMobile from '/public/assets/img/button/WithdrawFundsButtonMobile.svg'

import s from './withdrawFunds.module.scss'

interface Commission {
  placeholder: string
  value: string
}
interface WithdrawFundsModalProps {
  availableAmount: number
  commissions: Commission[]
  isOpen: boolean
  onClose: () => void
}
interface WithdrawFundsForm {
  net: string
  address: string
  amount: number
}
export const WithdrawFundsModal: FC<WithdrawFundsModalProps> = ({
  availableAmount,
  commissions,
  isOpen,
  onClose,
}) => {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
  } = useForm<WithdrawFundsForm>()

  const options = {
    amount: {
      min: 0,
      max: availableAmount,
    },
    adress: {
      required: "Recipient's address is required",
    },
  }

  const { width } = useWindowDimensions()

  const handleClose = (): void => {
    onClose()
  }

  const onSubmit: SubmitHandler<WithdrawFundsForm> = async data => {
    console.log(JSON.stringify(data))
    reset()
  }

  return (
    <>
      <Modal
        contentClassName={s.withdrawFundsModalBody}
        onClose={handleClose}
        isOpen={isOpen}
        isClosable={false}
        className={s.subscribeConfirmModal}
      >
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
          <h1 className={s.title}>withdraw funds</h1>
          <form className={s.withdrawFundsForm}>
            <div className={s.valuesContainer}>
              <span
                style={{ color: 'white', paddingTop: 23, paddingBottom: 24 }}
              >
                Заглушка для селекта
              </span>
              <Controller
                control={control}
                name='address'
                rules={options.adress}
                defaultValue={''}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    className={s.input}
                    labelClassName={s.inputLabel}
                    label="Recipient's address"
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
            <span className={s.amount}>Available: {availableAmount} USD</span>
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
                <span className={s.value}>{watch('amount', 0)}</span>
              </div>
            </div>
            <div className={s.withdrawButton}>
              <Button label='withdraw funds' onClick={handleSubmit(onSubmit)}>
                {width > 768 ? (
                  <WithdrawFundsButton />
                ) : (
                  <WithdrawFundsButtonMobile />
                )}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}
