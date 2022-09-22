import React from 'react';

const IconSelector = ({id, color}) => {
    switch (id) {
        case "linkedin":
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M2.16112 4.16279C0.96809 4.16279 0 3.21559 0 2.07202C0 0.928439 0.96809 0.000488281 2.16112 0.000488281C3.35416 0.000488281 4.32224 0.928439 4.32224 2.07202C4.32224 3.21559 3.35416 4.16279 2.16112 4.16279ZM4.02911 17.2505H0.297363V5.73389H4.02911V17.2505ZM14.2723 17.2507H17.996H18.0001V10.9245C18.0001 7.82872 17.3052 5.44531 13.5292 5.44531C11.7135 5.44531 10.4963 6.40021 9.99827 7.30506H9.94606V5.73409H6.36694V17.2507H10.0947V11.5482C10.0947 10.0465 10.3919 8.59499 12.3321 8.59499C14.2442 8.59499 14.2723 10.3084 14.2723 11.6444V17.2507Z" 
                        fill={color || "white"}
                    />
                </svg>
            )

        case "facebook":
            return (
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="facebook">
                    <path 
                        id="Shape" 
                        d="M16.25 0.000488281H2.75C1.50912 0.000488281 0.5 1.00961 0.5 2.25049V15.7505C0.5 16.9914 1.50912 18.0005 2.75 18.0005H9.5V11.813H7.25V9.00049H9.5V6.75049C9.5 4.88636 11.0109 3.37549 12.875 3.37549H15.125V6.18799H14C13.379 6.18799 12.875 6.12949 12.875 6.75049V9.00049H15.6875L14.5625 11.813H12.875V18.0005H16.25C17.4909 18.0005 18.5 16.9914 18.5 15.7505V2.25049C18.5 1.00961 17.4909 0.000488281 16.25 0.000488281Z" 
                        fill={color || "white"}
                    />
                    </g>
                </svg>
            )

        case "youtube":
            return (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="youtube">
                    <path 
                        id="Combined Shape" 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M15.138 0.103988C16.2169 0.164738 16.7467 0.324488 17.235 1.19299C17.7435 2.06036 18 3.55436 18 6.18574V6.18911V6.19474C18 8.81374 17.7435 10.319 17.2361 11.1774C16.7479 12.0459 16.218 12.2034 15.1391 12.2765C14.0602 12.3384 11.3501 12.3755 9.00225 12.3755C6.64988 12.3755 3.93863 12.3384 2.86088 12.2754C1.78425 12.2022 1.25437 12.0447 0.761625 11.1762C0.25875 10.3179 0 8.81261 0 6.19361V6.19136V6.18799V6.18461C0 3.55436 0.25875 2.06036 0.761625 1.19299C1.25437 0.323363 1.78537 0.164738 2.862 0.102863C3.93863 0.0308633 6.64988 0.000488281 9.00225 0.000488281C11.3501 0.000488281 14.0603 0.0308633 15.138 0.103988ZM12.375 6.18799L6.75 2.81299V9.56299L12.375 6.18799Z" 
                        fill={color || "white"}
                    />
                    </g>
                </svg>
            )
                
        case "telegram":
            return (
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="telegram">
                    <path 
                        id="XMLID_497_" 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M4.96549 9.60462L0.817933 8.05367C0.396673 7.89551 0.393013 7.29965 0.813073 7.13734L17.8348 0.55835C18.1956 0.418524 18.568 0.735267 18.4894 1.11495L15.4347 15.8365C15.3627 16.184 14.956 16.3417 14.6689 16.1326L10.499 13.0994C10.2457 12.9152 9.90055 12.925 9.65821 13.1229L7.34629 15.0112C7.07791 15.231 6.67357 15.1086 6.57085 14.7773L4.96549 9.60462ZM14.4181 3.7767L6.31226 8.77865C6.00159 8.97077 5.85531 9.34667 5.95569 9.69858L6.83211 12.784C6.89433 13.0026 7.21107 12.9802 7.24125 12.7543L7.46912 11.0623C7.51208 10.7437 7.66376 10.4503 7.8989 10.231L14.5886 4.00069C14.7137 3.88442 14.5638 3.68707 14.4181 3.7767Z" 
                        fill={color || "white"}
                    />
                    </g>
                </svg>
            )
        
        case "instagram":
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="instagram">
                    <path 
                        id="Combined Shape" 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M12.375 0.000488281H5.625C2.51888 0.000488281 0 2.51936 0 5.62549V12.3755C0 15.4816 2.51888 18.0005 5.625 18.0005H12.375C15.4811 18.0005 18 15.4816 18 12.3755V5.62549C18 2.51936 15.4811 0.000488281 12.375 0.000488281ZM4.5 9.00049C4.5 6.51536 6.51487 4.50049 9 4.50049C11.4851 4.50049 13.5 6.51536 13.5 9.00049C13.5 11.4856 11.4851 13.5005 9 13.5005C6.51487 13.5005 4.5 11.4856 4.5 9.00049ZM6.1875 9.00049C6.1875 10.5507 7.44975 11.813 9 11.813C10.5503 11.813 11.8125 10.5507 11.8125 9.00049C11.8125 7.44911 10.5503 6.18799 9 6.18799C7.44975 6.18799 6.1875 7.44911 6.1875 9.00049ZM14.437 4.16298C14.437 4.49414 14.1686 4.7626 13.8374 4.7626C13.5063 4.7626 13.2378 4.49414 13.2378 4.16298C13.2378 3.83182 13.5063 3.56335 13.8374 3.56335C14.1686 3.56335 14.437 3.83182 14.437 4.16298Z" 
                        fill={color || "white"}
                    />
                    </g>
                </svg>
            )
        default:
            return <svg></svg>
    }
}

export default IconSelector;