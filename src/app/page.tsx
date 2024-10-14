"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useCurrent } from "@/features/auth/hooks/use-current";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/use-logout";

const Home: React.FC = () => {
  const { data, isLoading } = useCurrent();
  const router = useRouter();
  const { mutate } = useLogout();

  React.useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div>
      ONLY FOR AUTH
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
};

export default Home;
