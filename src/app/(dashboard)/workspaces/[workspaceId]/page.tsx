import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

const WorkspaceIdPage: React.FC = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>WorkspaceIdPage</div>;
};

export default WorkspaceIdPage;
