import styled from "styled-components";

export const Note_Style = styled.main `
    width: 100%;
    height: calc(100vh - 45px);

    position: absolute;
    bottom: 0px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    align-items: center;

    .img-header {
        width: 100%;
        height: 350px;

        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    header {
        padding: 20px 0px;
        width: 100%;
        height: 60px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .btn-left-header {
            display: flex;
            gap: 7px;
        }

        button {
            padding: 5px 15px;

            border-radius: 5px;
            border: 1px solid #5B5B63;
            outline: none;

            background: transparent;
            color: white;

            cursor: pointer;
        }

        button:hover {
            background: #424151;
            transition: .5s;
        }

        #btn-save-note:hover {
            background: #08C86C;
            border-color: #08C86C;
            color: white;
        }

    }

    .subheader {
        padding: 20px 0px;
        width: 100%;
        height: 50px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            color: white;
            font-size: 30px;
            font-weight: 700;
        }
    }

    .container-note {
        width: 50%;
        height: 90%;

        textarea {
            min-width: 100%;
            height: 100%;

            background: #181820;
            border: none;
            outline: none;

            color: white;
            font-size: 16px;
        }
    }
`;