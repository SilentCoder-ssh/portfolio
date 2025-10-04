import { createFileRoute } from "@tanstack/react-router";
import HomeUn from "../components/pages/HomeUn";
import HomeDeux from "../components/pages/HomeDeux";
import FullPageShell from "../components/fullpage/FullPageShell";

export const Route = createFileRoute("/home")({
  component: () => (
    <FullPageShell anchors={["Welcome", "Why"]}>
      <div className="section">
        <HomeUn />
      </div>
      <div className="section">
        <HomeDeux />
      </div>
    </FullPageShell>
  ),
});
