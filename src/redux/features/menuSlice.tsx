import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
    menu: {
        show: boolean;
    }
}

export const slice = createSlice({
    name: "menu",
    initialState: {
        show: false,
    },

    reducers: {
        showMenu(state) {
            return { ...state, show: true }
        },

        hideMenu(state) {
            return { ...state, show: false }
        }
    }
})

export const { showMenu, hideMenu } = slice.actions

export const menuState = (state:StateProps) => state.menu.show

export default slice.reducer