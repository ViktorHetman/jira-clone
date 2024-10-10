import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div>
      <Button variant="primary" size="lg">
        Primary
      </Button>
      <Button variant="secondary" size="xs">
        Secondary
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  );
};

export default Home;
