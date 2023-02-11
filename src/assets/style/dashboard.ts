import styled from "styled-components";

export const Dashboard_Style = styled.main `
    /* width: calc(100vw - 272px); */
    width: 100vw;
    height: calc(100vh - 45px);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0px;
    right: 0px;


    .content-main {
        width: 40%;
        height: auto;

        header {
            padding: 49px 0px;
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                color: white;
                font-size: 20px;
                font-weight: 700;
            }
        }
        .subheader {
            span {
                font-size: 30px;
                font-weight: 700;
                color: white;
            }

            .btn-conatiner {
                display: flex;
                margin-top: 49px;
                gap: 20px;

                #marked-btn {
                    background: #424151;
                }

                button {
                    padding: 8px 23px;

                    border: 1px solid #5B5B63;
                    outline: none;
                    border-radius: 5px;

                    background: transparent;

                    font-weight: 500;
                    color: white;

                    cursor: pointer;
                }
            }
        }

        .content-cards {
            margin-top: 35px;
            width: 100%;
            height: auto;

            .card-preview {
                margin-bottom: 49px;
                width: 100%;

                header {
                    padding: 15px 15px;

                    width: calc(100% - 30px);
                    background: #272731;

                    border-radius: 15px 15px 0px 0px;

                    .container-left-card {
                        display: flex;
                        align-items: center;

                        gap: 15px;

                        .ilustration {
                            width: 30px;
                            height: 30px;

                            background: #8C0EDA;
                            border-radius: 11px;
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
                    }
                }
            }

        }
    }
`;