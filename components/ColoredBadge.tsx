import { Badge } from '@geist-ui/core';
import React from 'react';
//@ts-ignore
import hex from 'text-hex';

export function ColoredBadge({ children }: React.PropsWithChildren<{}>) {
    return <Badge style={{ backgroundColor: hex(children) }}>{children}</Badge>;
}
