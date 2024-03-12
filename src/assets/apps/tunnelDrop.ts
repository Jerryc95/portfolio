import { AppItem } from "../../models/AppItem";
import TunnelDropAppIcon from "./appImages/TunnelDrop/TunnelDropAppIcon.png"
import TDPreview1 from "./appImages/TunnelDrop/TDPreview1.jpeg"
import TDPreview2 from "./appImages/TunnelDrop/TDPreview2.jpeg"

export const TunnelDrop: AppItem = {
    title: "Tunnel Drop",
    platforms: ["iOS"],
    headerImage: TunnelDropAppIcon,
    description: "TunnelDrop is an endless virtical scroller where players have to safely drop into a tunnel while dodging obsticles.",
    appLink: null,
    webLink: "https://github.com/Jerryc95/TunnelDrop",
    features: [
        "Tilt controls using the device's gyroscope.",
        "increasing and randomized tilt sensitivity for difficulty.",
    ],
    privacyPolicy:  "This app does not collect, store, or sell any of your personal data. Your information remains confidential and is not shared with any third parties.",
    images: [TDPreview1, TDPreview2],
    param: 'tunnel-drop',
}



