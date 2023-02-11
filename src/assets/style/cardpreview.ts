import styled from "styled-components";

export const Card_Preview_Style = styled.div `
    .card-preview {
        margin-bottom: 49px;
        width: 100%;

        header {
            padding: 10px 15px;

            width: calc(100% - 30px);
            background: #272731;

            border-radius: 15px 15px 0px 0px;

            .container-left-card {
                display: flex;
                align-items: center;

                gap: 15px;

                span {
                    font-size: 18px;
                }

                .ilustration {
                    width: 25px;
                    height: 25px;

                    background: #8C0EDA;
                    border-radius: 9px;
                }
            }
        }

        .body-card-preview {
            width: 100%;
            height: 200px;

            background: #21212B;
        }

        footer {
            width: 100%;
            height: 50px;

            border-top: 1px solid #2C2C30;
            
            border-radius: 0px 0px 15px 15px;

            button {
                width: 100%;
                height: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                gap: 15px;

                border-radius: 0px 0px 15px 15px;
                border: none;

                background: #21212B;

                color: white;
                font-size: 16px;
                font-weight: 700;

                cursor: pointer;
            }
        }
    }
`;