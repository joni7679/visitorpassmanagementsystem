import { AlertTriangle, Clock, FileWarning } from "lucide-react";

export const problems = [
    {
        icon: AlertTriangle,
        title: "Security Risks",
        description:
            "Paper log visitors have easy access to sensitive information like names, phone numbers. It's impossible to track who actually is your building.",
    },
    {
        icon: Clock,
        title: "Wasted Time",
        description:
            "Your receptionists are spending a good chunk of their work time manually tracking through paper – doing data entry, sending notifications to employees.",
    },
    {
        icon: FileWarning,
        title: "Poor Compliance",
        description:
            "Most organizations struggle to find visitors. Small errors become big problems like missing fire drill participation or emergency evacuations.",
    },
];