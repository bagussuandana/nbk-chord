import React, { PropsWithChildren } from "react";

type Props = {};

const SongWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="container">
            <section className="prose dark:prose-invert max-w-full">
                {children}
            </section>
        </div>
    );
};

export default SongWrapper;
