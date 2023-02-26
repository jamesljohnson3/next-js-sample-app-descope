import {SignedIn, SignedOut} from "@clerk/nextjs";
import type {NextPage} from "next";
import {SignInLayout} from "../../layouts/SignInLayout";
import {SignInForm} from "../../components/SignInForm";
import Box from "../ma";
const SignIn: NextPage = () => {
  return (
    <><SignedIn>
 <Box/>
    </SignedIn>
    <SignInLayout>
        <SignedOut>
          <SignInForm />
        </SignedOut>
      </SignInLayout></>
  );
};

export default SignIn;
