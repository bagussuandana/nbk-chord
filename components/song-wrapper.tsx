import React, { PropsWithChildren } from "react";

type Props = {};

const SongWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="container">
            <section className="prose dark:prose-invert">{children}</section>
        </div>
    );
};

export default SongWrapper;
