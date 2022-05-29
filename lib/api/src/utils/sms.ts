import { Twilio } from 'twilio'
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } from '../config/sms'

export const sendOtp = async (mobileNumber: number, text: string) => {
  if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN) {
    const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

    await client.messages.create({
      body: text,
      from: TWILIO_PHONE_NUMBER,
      to: `+91${mobileNumber}`,
    })
  }
}
