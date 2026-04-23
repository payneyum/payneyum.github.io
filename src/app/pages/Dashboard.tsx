import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import UserCard from "../components/UserCard";
import UserProfileModal from "../components/UserProfileModal";
import ChatModal from "../components/ChatModal";
import MyProfileModal from "../components/MyProfileModal";
import { Search, Users, BookOpen, TrendingUp, MessageSquare } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const { currentUser, users, setCurrentUser } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);
  const [showMyProfile, setShowMyProfile] = useState(false);

  if (!currentUser) {
    navigate("/");
    return null;
  }

  const otherUsers = users.filter((u) => u.id !== currentUser.id);
  const filteredUsers = otherUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.offersSkills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      user.wantsSkills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl">SkillSwap Hub</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate("/forum")}>
              <MessageSquare className="w-4 h-4 mr-2" />
              Forum
            </Button>
            <Button variant="outline" onClick={() => setShowMyProfile(true)}>
              My Profile
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Members</p>
                <p className="text-3xl mt-1">28</p>
                <p className="text-green-600 text-sm mt-2">+12% from last month</p>
              </div>
              <Users className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Skills Available</p>
                <p className="text-3xl mt-1">79</p>
                <p className="text-gray-600 text-sm mt-2">Across all categories</p>
              </div>
              <BookOpen className="w-10 h-10 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Your Credits</p>
                <p className="text-3xl mt-1">{currentUser.credits}</p>
                <p className="text-gray-600 text-sm mt-2">Earn by teaching skills</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-2xl mb-4">Available Skill Trades</h2>
            <p className="text-gray-600 mb-4">Choose someone to trade skills with</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, skills offered, or skills wanted..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onConnect={(user) => setSelectedUser(user)}
              />
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No users found matching your search
            </div>
          )}
        </div>
      </div>

      {selectedUser && (
        <UserProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSendMessage={() => {
            setSelectedUser(null);
            setShowChat(true);
          }}
        />
      )}

      {showChat && <ChatModal onClose={() => setShowChat(false)} />}

      {showMyProfile && (
        <MyProfileModal
          user={currentUser}
          onClose={() => setShowMyProfile(false)}
        />
      )}
    </div>
  );
}

