import { Button } from '@repo/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui';
import { Artifact, Message } from '@repo/ai-elements';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Client B</h1>
        <p className="text-muted-foreground">
          Another Next.js 15 app with shared packages
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Shared Package Demo</CardTitle>
            <CardDescription>
              Components from @repo/ui and @repo/ai-elements
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Button variant="default">Primary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            
            <Message
              role="user"
              content="This is a user message using the Message component"
              timestamp={new Date()}
            />
            
            <Message
              role="assistant"
              content="And this is an assistant response from the AI Elements package"
              timestamp={new Date()}
            />
          </CardContent>
        </Card>

        <Artifact title="TypeScript Utility" type="code">
          {`import { cn } from '@repo/utils';\n\nconst classes = cn('base-class', {\n  'conditional-class': true\n});`}
        </Artifact>
      </div>

      <div className="flex gap-4 text-sm text-muted-foreground">
        <span>✓ Workspace Protocol</span>
        <span>✓ Type References</span>
        <span>✓ Hot Reload</span>
        <span>✓ Tailwind CSS 4</span>
      </div>
    </main>
  );
}
