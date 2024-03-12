import { AppItem } from "../../models/AppItem";
import nexusAppIcon from "./appImages/nexus/NexusAppIcon.png"

export const nexus: AppItem = {
    title: "Nexus: MTG Companion",
    platforms: ["visionOS"],
    headerImage: nexusAppIcon,
    description: "Nexus is an iOS and web app designed for Magic: The Gathering players who want to easily manage their health during games. With Nexus, players can keep track and of their own life total and the life totals of their opponents in real time, making it easier to stay focused on the game without worrying about constantly looking at everyone's dice or an app across the table.",
    appLink: "https://apps.apple.com/us/app/nexus-mtg-companion/id6449751981",
    webLink: "www.playnexus.app",
    features: [
        "Real-time gameplay: Seamlessly connect with up to eight other players to manage your counters and keep track of everyone else's all in real-time.",
        "Multiple Game Modes: Nexus provides multiple game modes to let you play the way you want to. Nexus Link allows up to 9 players to connect in real-time. Prefer a normal counter app? Classic Mode has got you covered.",
        "Player Profiles: Create and customize your own nexus profile. Keep track of your game history, decks and your identity to let other's know who you are in games.",
        "Deck Manager: Manage your decks and keep track of each one's win rate and which ones dominate your friends.",
        "Card Lookup: Lookup individual cards and see their details and their legality for each game type.",
    ],
    privacyPolicy: "The privacy policy for Nexus can be found here: https://playnexus.app/privacy",
    images: null,
    param: 'Nexus',
}



