import { CronJob } from 'cron'
import { ExampleJob } from '../jobs/exampleJob'
export const Job = new CronJob('0 */10 * * * *', function () {
  ExampleJob
})
