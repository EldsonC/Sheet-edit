import styled from "styled-components";

export const Style_sheet_card = styled.ul `
    margin-bottom: 16px;
    width: calc(100% - 35px);

    list-style: none;

    li {
        width: 100%;

        .sheet-card {
            width: 100%;
            display: flex;
            justify-content: space-between;

            text-decoration: none;


            .left-container {
                display: flex;
                align-items: center;

                gap: 19px;
                .color-sheet {
                    width: 25px;
                    height: 25px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background: #41FFBB;
                    border-radius: 11px;
                }

                span {
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            button {
                margin-right: 16px;

                background: transparent;
                border: none;
                outline: none;

                cursor: pointer;
            }
        }
    }
`;