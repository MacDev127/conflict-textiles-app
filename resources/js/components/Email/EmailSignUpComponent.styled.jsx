import styled from "styled-components";

export const EmailStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 10px 0 50px 0;
    color: #333;
    // background-color: #c2c2c2;
    form {
        display: flex;

        input[type="text"],
        input[type="email"] {
            height: 50px;
            margin: 0 10px;
            padding: 0 10px;
            border: 1px solid #ccc;
            font-size: 16px;
            outline: none;
            width: 340px;
            font-family: "Mullish", sans-serif;
            font-weight: 300;
        }

        input[type="submit"] {
            height: 50px;
            padding: 0 30px;
            background-color: #df0144;
            color: #fff;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
            text-transform: uppercase;
            margin: 0 10px;
            font-family: "Mullish", sans-serif;
            font-weight: 300;
            letter-spacing: 1px;
            &:hover {
                background-color: #dd294d;
            }
        }
    }
`;
