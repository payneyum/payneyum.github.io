import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import type { User } from "../context/AppContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, Phone, Video, Calendar } from "lucide-react";
import ScheduleModal from "./ScheduleModal";

interface UserProfileModalProps {
  user: User;
  onClose: () => void;
  onSendMessage: (user: User) => void;
}

export default function UserProfileModal({
  user,
  onClose,
  onSendMessage,
}: UserProfileModalProps) {
  const { setSelectedChat } = useAppContext();
  const [showSchedule, setShowSchedule] = useState(false);

  const handleSendMessage = () => {
    setSelectedChat(user);
    onSendMessage(user);
  };

  return (
    <>
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{user.name}</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm mb-2">About</h3>
              <p className="text-gray-700">{user.bio}</p>
            </div>

            <div>
              <h3 className="text-sm mb-2">Education</h3>
              <p className="text-gray-700">{user.education}</p>
            </div>

            <div>
              <h3 className="text-sm mb-2">Offers</h3>
              <div className="flex flex-wrap gap-2">
                {user.offersSkills.map((skill, index) => (
                  <Badge key={index} className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm mb-2">Wants</h3>
              <div className="flex flex-wrap gap-2">
                {user.wantsSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm mb-3">Contact</h3>
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

            <div className="border-t pt-6">
              <h3 className="text-sm mb-3">Virtual Meeting</h3>
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <Video className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm">Join Meeting Room</p>
                  <a
                    href="https://meet.google.com/abc1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    https://meet.google.com/abc1
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleSendMessage} className="flex-1">
                Send Message
              </Button>
              <Button
                onClick={() => setShowSchedule(true)}
                variant="outline"
                className="flex-1"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showSchedule && (
        <ScheduleModal user={user} onClose={() => setShowSchedule(false)} />
      )}
    </>
  );
}

