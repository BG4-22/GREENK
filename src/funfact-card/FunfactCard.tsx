import React from 'react';
import '../index.css';

interface FunfactCardPropsI {
    title: string;
    ordered?: boolean;
    list: string[];
}

const FunfactCard: React.FC<FunfactCardPropsI> = ({
    title,
    ordered = false,
    list,
}: FunfactCardPropsI) => {
    const listItems = list.map((item, i) => (
        <li key={`item-${item}`}>{item}</li>
    ));

    const containerStyle =
        'w-fit min-w-max max-w-xs sm flex flex-col border-2 m-2 p-4 px-8';
    const listStyle = 'list-outside w-fit max-w-xs sm text-l';
    const orderedListStyle = 'list-decimal font-';
    const unOrderedListStyle = 'list-disc';
    const titleStyle = 'border-b-2 font-bold ';
    return (
        <div
            className={containerStyle}
            style={{ backgroundColor: '#f2f4fc', borderColor: '#9dbe98' }}>
            <h1 className={titleStyle} style={{ borderColor: '#9dbe98' }}>
                {title}
            </h1>
            {ordered ? (
                <ol className={`${listStyle} ${orderedListStyle}`}>
                    {listItems}
                </ol>
            ) : (
                <ul className={`${listStyle} ${unOrderedListStyle}`}>
                    {listItems}
                </ul>
            )}
        </div>
    );
};

export default FunfactCard;
