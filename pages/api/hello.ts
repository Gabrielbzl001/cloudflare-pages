// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
export const config = {
  runtime: 'experimental-edge',
}

export function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({name: 'John Teste'})
  
}

export default async function (req: any) {
  return new Response(
    JSON.stringify({ name: 'John Doe' }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}