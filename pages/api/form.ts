import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.body.user;

  // Make a POST request to the connect endpoint
  const response = await fetch("https://hook.us1.make.com/5gicl1lx7wgxcq7ptcxpb62hh39l57ee", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ success: false });
  }
}
