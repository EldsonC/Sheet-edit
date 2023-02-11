import { useSelector } from "react-redux"
import { Alert_Style } from "../../assets/style/alert"
import { menuState } from "../../redux/features/menuSlice"

import { useDispatch } from "react-redux"
import { hideMenu } from "../../redux/features/menuSlice"

interface AlertProps {
    title: string;
}

export const Alert = ({ title }:AlertProps) => {
    const state = useSelector(menuState)
    const dispatch = useDispatch()

    if (state) {
        setTimeout(() => {
            dispatch(hideMenu())
        }, 2000)
        return (
            <Alert_Style>
                {/* {title} */}
            </Alert_Style>
        )
    }


    return (
        <div></div>
    )
}