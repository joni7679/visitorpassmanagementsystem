import { AlertTriangle, Clock, FileWarning } from "lucide-react";
import securityRisksImg from "../assets/imges/lostTime.png"
import wastedTimeImg from "../assets/imges/wastedtime.png"
import poorcompliance from "../assets/imges/risk.png"

export const problems = [
    {
        icon: AlertTriangle,
        title: "Security Risks",
        img: securityRisksImg,
        description:
            "Paper log visitors have easy access to sensitive information like names, phone numbers. It's impossible to track who actually is your building.",
    },
    {
        icon: Clock,
        title: "Wasted Time",
        img: wastedTimeImg,
        description:
            "Your receptionists are spending a good chunk of their work time manually tracking through paper – doing data entry, sending notifications to employees.",
    },
    {
        icon: FileWarning,
        title: "Poor Compliance",
        img: poorcompliance,
        description:
            "Most organizations struggle to find visitors. Small errors become big problems like missing fire drill participation or emergency evacuations.",
    },
];