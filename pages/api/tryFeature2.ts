import { RequestLike } from "@clerk/nextjs/dist/server/types";
import { getAuth } from "@clerk/nextjs/server";
import { customerHasFeature } from "use-stripe-subscription";

import { findOrCreateCustomerId } from "../../utils/findOrCreateCustomerId";

const handler = (async (req: RequestLike, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; send: (arg0: string) => void; }) => {
  try {
    // Your code here
    res.send("Success!"); // Send a success message in the response
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!"); // Send an error message in the response
  }
  
  const { userId } = getAuth(req);
  if(!userId){
    res.status(401).send("Not logged in");
    return;
  }
  const customerId = await findOrCreateCustomerId({
    clerkUserId: userId,
  });

  if (await customerHasFeature({ customerId, feature: "feature2" })) {
    res.send("Customer has feature2");
  } else {
    res.send("Customer does not have feature2");
  }
});
export default handler;
