import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Mail, Phone, GraduationCap, Award } from "lucide-react";

interface MyProfileModalProps {
  user: {
    name: string;
    email: string;
    bio: string;
    education: string;
    offersSkills: string[];
    wantsSkills: string[];
    phone: string;
    subscriptionPlan: string;
    credits: number;
  };
  onClose: () => void;
}

export default function MyProfileModal({ user, onClose }: MyProfileModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">My Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h2 className="text-2xl">{user.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary">{user.subscriptionPlan} Plan</Badge>
                <Badge variant="outline">
                  <Award className="w-3 h-3 mr-1" />
                  {user.credits} Credits
                </Badge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm mb-2">Bio</h3>
            <p className="text-gray-700">{user.bio}</p>
          </div>

          <div>
            <h3 className="text-sm mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <p className="text-gray-700">{user.education}</p>
          </div>

          <div>
            <h3 className="text-sm mb-2">Skills I Offer</h3>
            <div className="flex flex-wrap gap-2">
              {user.offersSkills.map((skill, index) => (
                <Badge key={index} className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm mb-2">Skills I Want to Learn</h3>
            <div className="flex flex-wrap gap-2">
              {user.wantsSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-sm mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span>{user.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

