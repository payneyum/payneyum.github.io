import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface UserCardProps {
  user: {
    id: string;
    name: string;
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
          <h3 className="text-lg mb-1">{user.name}</h3>
          <p className="text-gray-600 text-sm">Digital Artist</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2">Offers:</p>
        <div className="flex flex-wrap gap-2">
          {user.offersSkills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm mb-2">Wants:</p>
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

