import { UserButton, UserProfile } from "@clerk/nextjs";
import Head from "next/head";
import { Gate, useSubscription } from "use-stripe-subscription";

export default function Home() {
  const {
    isLoaded,
    products,
    subscription,
    redirectToCheckout,
    redirectToCustomerPortal,
  } = useSubscription();

  if (!isLoaded) {
    return null;
  }

  const alertResponse = async (path: RequestInfo | URL) => {
    const res = await fetch(path);
    const body = await res.text();
    alert(`Path requested: ${path}\nResponse: ${body}`);
  };

  return (
    <main style={{ padding: "1rem 2rem" }}>
      <Head>
        <title>use-stripe-subscription</title>
      </Head>
      <h1>use-stripe-subscription demo</h1>
      <h2>Plans</h2>
      
      <h2>Features</h2>
      <div>
        <Gate feature="feature1">Plan has &quot;feature1&quot;</Gate>
        <Gate feature="feature1" negate>
          Plan does not have &quot;feature1&quot;
        </Gate>{" "}
        <button onClick={() => alertResponse("/api/tryFeature1")}>
          Test the backend!
        </button>
      </div>
      <div>
        <Gate feature="unlimitednow">Plan has &quot;feature2&quot;</Gate>
        <Gate feature="feature2" negate>
          Plan does not have &quot;feature2&quot;
        </Gate>{" "}
        <button onClick={() => alertResponse("/api/tryFeature2")}>
          Test the backend!
        </button>
      </div>
      <h2>Account management</h2>
      <UserButton />
    </main>
  );
}
