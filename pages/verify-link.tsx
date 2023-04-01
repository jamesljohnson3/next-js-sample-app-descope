import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useUser, useSignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// Grab the query param server side, and pass through props
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { signInToken: context.query.token ? context.query.token : null },
  };
};

const AcceptToken = ({
  signInToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { signIn, setSession } = useSignIn();
  const { user } = useUser();
  const [signInProcessed, setSignInProcessed] = useState<boolean>(false);

  useEffect(() => {
    if (!signIn || !setSession || !signInToken) {
      return;
    }

    const aFunc = async () => {
      try {
        // Create a signIn with the token, note that you need to use the "ticket" strategy.
        const res = await signIn.create({
          strategy: "ticket",
          ticket: signInToken as string,
        });

        setSession(res.createdSessionId, () => {
          setSignInProcessed(true);
        });
      } catch (err) {
        setSignInProcessed(true);
      }
    };

    aFunc();
  }, [signIn, setSession]);

  if (!signInToken) {
    return <div>no token provided</div>;
  }

  if (!signInProcessed) {
    return <div>loading</div>;
  }

  if (!user) {
    return <div>error invalid token</div>;
  }

  return <div>Signed in as {user.id}</div>;
};

export default AcceptToken;
