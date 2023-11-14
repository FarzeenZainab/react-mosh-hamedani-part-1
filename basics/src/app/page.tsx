import { Badge } from "@/components/ui/badge";

const badges = [
  {
    label: "Karachi",
    variant: "",
  },
  {
    label: "Lahore",
    variant: "",
  },
  {
    label: "Islamabad",
    variant: "",
  },
  {
    label: "Rawalpindi",
    variant: "",
  },
  {
    label: "Quetta",
    variant: "",
  },
  {
    label: "Swat",
    variant: "",
  },
];

export default function Home() {
  return (
    <main className="p-6">
      {badges.map((badge) => {
        return (
          <Badge className="cursor-pointer mr-4" size="lg" variant="outline">
            {badge.label}
          </Badge>
        );
      })}
    </main>
  );
}
