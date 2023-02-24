import { customerHasFeature } from "use-stripe-subscription";
import {getAuth} from "@clerk/nextjs/server"
import { findOrCreateCustomerId } from "../../utils/findOrCreateCustomerId";
import { RequestLike } from "@clerk/nextjs/dist/server/types";

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

  if (await customerHasFeature({ customerId, feature: "feature1" })) {
    res.send("Customer has feature1");
  } else {
    res.send("Customer does not have feature1");
  }
});
export default handler;
