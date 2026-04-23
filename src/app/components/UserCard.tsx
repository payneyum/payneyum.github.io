import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface UserCardProps {
  user: {
    id: string;
    name: string;
    profession: string; // Add this line
    offersSkills: string[];
    wantsSkills: string[];
  };
  onConnect: (user: any) => void;
  [key: string]: any;
}

export default function UserCard({ user, onConnect }: UserCardProps) {
  return (
    <div className="border rounded-lg p-5 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-start justify-between mb-4">
        <div>
          {/* Use font-bold for the name to match your requirement */}
          <h3 className="text-lg font-bold mb-0">{user.name}</h3>
          {/* Replace "Digital Artist" with user.profession */}
          <p className="text-gray-600 text-sm">{user.profession}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2 font-medium">Offers:</p>
        <div className="flex flex-wrap gap-2">
          {user.offersSkills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2 font-medium">Wants:</p>
        <div className="flex flex-wrap gap-2">
          {user.wantsSkills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <Button onClick={() => onConnect(user)} className="w-full">
        Connect
      </Button>
    </div>
  );
}

