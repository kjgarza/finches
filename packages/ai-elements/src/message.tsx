import * as React from 'react';
import { cn } from '@repo/utils';

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export function Message({
  role,
  content,
  timestamp,
  className,
  ...props
}: MessageProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-lg p-4',
        role === 'user' && 'bg-primary text-primary-foreground ml-auto max-w-[80%]',
        role === 'assistant' && 'bg-muted mr-auto max-w-[80%]',
        role === 'system' && 'bg-secondary text-secondary-foreground mx-auto max-w-[90%] text-center',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase opacity-70">
          {role}
        </span>
        {timestamp && (
          <span className="text-xs opacity-50">
            {timestamp.toLocaleTimeString()}
          </span>
        )}
      </div>
      <div className="whitespace-pre-wrap">{content}</div>
    </div>
  );
}
