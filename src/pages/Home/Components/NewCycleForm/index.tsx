import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Type task name'),
  minutesAmount: zod.number().min(5).max(60),
})

/* interface NewCycleFormData {
  task: string
  minutesAmount: number
} */

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  return (
    <FormContainer>
      <label htmlFor="task">I going to work on</label>
      <TaskInput
        disabled={!!activeCycle}
        id="task"
        list="task-suggestions"
        placeholder="Give a name for your project"
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="test" />
      </datalist>
      <label htmlFor="task">during</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
