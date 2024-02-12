import { AppItem } from "../../models/AppItem";
import BatteryVisionAppIcon from "./appImages/batteryVision/BatteryVisionAppIcon.png";
import BVPreview1 from "./appImages/batteryVision/BVPreview1.jpeg";
import BVPreview2 from "./appImages/batteryVision/BVPreview2.jpeg";
import BVPreview3 from "./appImages/batteryVision/BVPreview3.jpeg";

export const BatteryVision: AppItem = {
  title: "Battery Vision",
  platforms: ["visionOS"],
  headerImage: BatteryVisionAppIcon,
  description:
    "Battery Vision is a sleek and compact battery widget designed to help you effortlessly monitor both the time and the estimated power level of your Apple Vision Pro, all without the hassle of opening Control Center. With its small and unobtrusive design, Battery Vision seamlessly integrates into your workflow, whether you're fully immersed in your tasks or simply using pass through.",
  appLink: null,
  webLink: null,
  features: [
    "Quickly view the estimated percentage of battery life remaining on your Apple Vision Pro, allowing you to stay informed about your device's power status at a glance.",
    "Stay updated on the current time when using Apple Vision Pro from your device's home screen, eliminating the need to open control center to check the time.",
    "With its unobtrusive and compact window, Battery Vision seamlessly integrates into your space, ensuring that it doesn't disrupt your workflow or viewing experience while using other apps or media.",
  ],
  privacyPolicy:
    "This app does not collect, store, or sell any of your personal data. Your information remains confidential and is not shared with any third parties.",
  images: [BVPreview1, BVPreview2, BVPreview3],
  param: 'battery-vision',
};
