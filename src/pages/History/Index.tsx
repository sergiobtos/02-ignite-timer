import { formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { useContext } from 'react'
import { Cycle, CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle: Cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: enUS,
                    })}
                  </td>
                  <td>About {cycle.startDate.toISOString()} minutes</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluded</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">In Progress</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
