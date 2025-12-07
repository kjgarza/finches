import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import { cn } from '@repo/utils';

export interface ArtifactProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  type?: 'code' | 'text' | 'image' | 'chart';
}

export function Artifact({
  title,
  type = 'text',
  className,
  children,
  ...props
}: ArtifactProps) {
  return (
    <Card className={cn('w-full', className)} {...props}>
      {title && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-xs uppercase text-muted-foreground">
              {type}
            </span>
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn(type === 'code' && 'font-mono text-sm')}>
        {children}
      </CardContent>
    </Card>
  );
}
