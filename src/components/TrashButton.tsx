import React from "react";
import styled from "styled-components";

const DeleteButton = styled.div`
    background: #5094b9;
    border-radius: 11px;
    border: none;
    padding: 4px;
    width: 30px;
    height: 30px;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
    margin: 0px;
    * {
        margin: 0px;
    }
`;

const TrashButton = ({ onClick }: any) => {
    return (
        <DeleteButton onClick={onClick}>
            <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: "0px" }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 1.75V3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H0.75C0.335786 4.5 0 4.16421 0 3.75C0 3.33579 0.335786 3 0.75 3H6V1.75C6 0.783502 6.7835 0 7.75 0H12.25C13.2165 0 14 0.783502 14 1.75ZM7.5 1.75C7.5 1.61193 7.61193 1.5 7.75 1.5H12.25C12.3881 1.5 12.5 1.61193 12.5 1.75V3H7.5V1.75Z"
                    fill="white"
                />
                <path
                    d="M2.99657 6.17775C2.95667 5.76546 2.5901 5.46358 2.17781 5.50348C1.76552 5.54338 1.46364 5.90995 1.50354 6.32224L2.91609 20.9186C3.0029 21.8156 3.75674 22.5 4.65795 22.5H15.3422C16.2434 22.5 16.9972 21.8156 17.084 20.9186L18.4966 6.32224C18.5365 5.90995 18.2346 5.54338 17.8223 5.50348C17.41 5.46358 17.0434 5.76546 17.0035 6.17775L15.591 20.7741C15.5786 20.9022 15.4709 21 15.3422 21H4.65795C4.52921 21 4.42151 20.9022 4.40911 20.7741L2.99657 6.17775Z"
                    fill="white"
                />
                <path
                    d="M7.20598 7.50129C7.61948 7.47696 7.97441 7.79245 7.99873 8.20595L8.49873 16.706C8.52305 17.1194 8.20756 17.4744 7.79406 17.4987C7.38057 17.523 7.02564 17.2075 7.00132 16.794L6.50132 8.29403C6.47699 7.88054 6.79248 7.52561 7.20598 7.50129Z"
                    fill="white"
                />
                <path
                    d="M13.4987 8.29403C13.5231 7.88054 13.2076 7.52561 12.7941 7.50129C12.3806 7.47696 12.0256 7.79245 12.0013 8.20595L11.5013 16.706C11.477 17.1194 11.7925 17.4744 12.206 17.4987C12.6195 17.523 12.9744 17.2075 12.9987 16.794L13.4987 8.29403Z"
                    fill="white"
                />
            </svg>
        </DeleteButton>
    );
};

export default TrashButton;
