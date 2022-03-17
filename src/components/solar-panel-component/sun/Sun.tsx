export interface SunPropsI {
    light: 1 | 2 | 3 | 4 | 5;
}

const Core = () => {
    return (
        <svg
            width="273"
            height="273"
            viewBox="0 0 273 273"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_391_727)">
                <circle cx="136.5" cy="136.5" r="83.5" fill="#FFFEDB" />
                <circle
                    cx="136.5"
                    cy="136.5"
                    r="83.5"
                    stroke="#FFF6A0"
                    stroke-width="5"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_391_727"
                    x="0.5"
                    y="0.5"
                    width="272"
                    height="272"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 0.959167 0 0 0 0 0.591667 0 0 0 0.36 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_391_727"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_391_727"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

const Sun = () => {
    return <Core />;
};

export default Sun;
