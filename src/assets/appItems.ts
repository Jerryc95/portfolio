import { AppItem } from "../models/AppItem";
import { BatteryVision } from "./apps/batteryVision";
import { TunnelDrop } from "./apps/tunnelDrop";
import { wisp } from "./apps/wisp";
import { nexus } from "./apps/nexus";

export const appItems: AppItem[] = [BatteryVision, nexus, TunnelDrop, wisp];
