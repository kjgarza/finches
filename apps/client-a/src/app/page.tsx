import { Button } from '@repo/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui';
import { Artifact, Message } from '@repo/ai-elements';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Client A</h1>
        <p className="text-muted-foreground">
          Next.js 15 app with shared packages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>UI Package</CardTitle>
            <CardDescription>
              Shared components from @repo/ui
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Built with shadcn/ui components
            </p>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-4">
          <Artifact title="Code Example" type="code">
            {`function hello() {\n  return "Hello from Client A";\n}`}
          </Artifact>
          <Message
            role="assistant"
            content="Welcome to the Finches monorepo!"
            timestamp={new Date()}
          />
        </div>
      </div>

      <div className="flex gap-4 text-sm text-muted-foreground">
        <span>✓ Turborepo</span>
        <span>✓ Bun</span>
        <span>✓ Next.js 15</span>
        <span>✓ React 19</span>
        <span>✓ TypeScript</span>
      </div>
    </main>
  );
}
