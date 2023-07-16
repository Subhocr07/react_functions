import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";

interface WithAuthProps {
  session: any;
  status: string;
}

const withAuth = <T extends WithAuthProps>(WrappedComponent: React.ComponentType<T>) => {
  const WithAuth: React.FC<T> = (props) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (!session && router.pathname !== "/login" && router.pathname !== "/signup") {
      // Redirect to login page if user is not authenticated
      router.push("/auth");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  // Assign display name to the wrapped component
  WithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithAuth;
};

export default withAuth;
