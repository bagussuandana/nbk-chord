import React, { PropsWithChildren } from "react";

const TransposerWrapper = ({ children }: PropsWithChildren) => {
    return <pre className="bg-transparent text-black/80 !p-0">{children}</pre>;
};

export default TransposerWrapper;
