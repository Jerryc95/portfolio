import { AppItem } from "../../models/AppItem";
import wispAppIcon from "./appImages/wisp/wispAppIcon.png"
import WispPreview1 from "./appImages/wisp/WispPreview1.png"
import WispPreview2 from "./appImages/wisp/WispPreview2.png"
import WispPreview3 from "./appImages/wisp/WispPreview3.png"

export const wisp: AppItem = {
    title: "Wisp",
    platforms: ["visionOS"],
    headerImage: wispAppIcon,
    description: "Wisp is a Task Management and Todo App designed for visionOS. Using hand gestures to intuitive drag and drop tasks, complete todos, and scroll through boards; Wisp makes managing all of your tasks a breeze.",
    appLink: null,
    webLink: null,
    features: [
        "Unlimited Boards",
        "Flexible Columns",
        "Unlimited Tasks",
        "Reurring Todos",
        "Comprehensive Summary",
        "Designed for visionOS",
    ],
    privacyPolicy: "This app does not collect, store, or sell any of your personal data. Your information remains confidential and is not shared with any third parties. All data is stored locally on device.",
    images: [WispPreview1, WispPreview2, WispPreview3],
    param: 'wisp',
}



