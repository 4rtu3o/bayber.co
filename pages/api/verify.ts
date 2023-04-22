import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile';
import { NextApiRequest, NextApiResponse } from 'next';

const verifyEndpoint =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const responseHeaders = {
  'content-type': 'application/json',
};

const secret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.body;

  const verifyData = await fetch(verifyEndpoint, {
    method: 'POST',
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(
      token
    )}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await verifyData.json();

  if (!data.success) {
    return res.status(400).json(data);
  }

  return res.status(200).json(data);
}
