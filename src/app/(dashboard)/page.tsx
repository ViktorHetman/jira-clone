import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

const Home: React.FC = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>This is a home page</div>;
};

export default Home;
