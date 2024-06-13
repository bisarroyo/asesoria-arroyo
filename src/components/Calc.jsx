import { Input } from '@nextui-org/react'
import { Select, SelectItem } from '@nextui-org/react'
import { Divider } from '@nextui-org/react'
import { useState } from 'react'

export default function App() {
  const [values, setValues] = useState({
    initialAmount: undefined,
    monthContribution: undefined,
    years: undefined,
    annualInterestRate: 10,
    compoundingFrequency: 'Mensual'
  })

  const handleInputChange = (field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }))
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full flex-wrap mb-6 md:mb-0 gap-4'>
        <Input
          type='number'
          label='Aporte Inicial'
          placeholder='0.00'
          labelPlacement='outside'
          value={values.initialAmount}
          onChange={(e) =>
            handleInputChange(
              'initialAmount',
              Math.abs(parseFloat(e.target.value))
            )
          }
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>$</span>
            </div>
          }
        />
        <Input
          type='number'
          label='Contribución Mensual'
          placeholder='0.00'
          labelPlacement='outside'
          value={values.monthContribution}
          onChange={(e) =>
            handleInputChange('monthContribution', parseFloat(e.target.value))
          }
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>$</span>
            </div>
          }
        />
        <Input
          type='number'
          label='Años'
          placeholder='1'
          labelPlacement='outside'
          value={values.years}
          onChange={(e) => handleInputChange('years', parseInt(e.target.value))}
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>A</span>
            </div>
          }
        />
        <Input
          type='number'
          label='Tasa interés anualizada'
          placeholder='1'
          labelPlacement='outside'
          value={values.annualInterestRate}
          onChange={(e) =>
            handleInputChange('annualInterestRate', parseFloat(e.target.value))
          }
          startContent={
            <div className='pointer-events-none flex items-center'>
              <span className='text-default-400 text-small'>%</span>
            </div>
          }
        />
        <Select
          label='Frecuencia de capitalización'
          placeholder='Mensual'
          labelPlacement='outside'
          defaultSelectedKeys={values.compoundingFrequency}
          onChange={(value) => handleInputChange('compoundingFrequency', value)}
        >
          <SelectItem key='Mensual'>Mensual</SelectItem>
          <SelectItem key='Trimestral'>Trimestral</SelectItem>
          <SelectItem key='Anual'>Anual</SelectItem>
        </Select>
        <Divider className='my-4' />
      </div>
      <div>
        <p>Initial Amount: {values.initialAmount}</p>
        <p>Monthly Contribution: {values.monthContribution}</p>
        <p>Years: {values.years}</p>
        <p>Annual Interest Rate: {values.annualInterestRate}%</p>
        <p>Compounding Frequency: {values.compoundingFrequency}</p>
      </div>
    </div>
  )
}
