import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Search, ArrowLeft, MessageSquare, Users, FileText } from "lucide-react";

export default function Forum() {
  const navigate = useNavigate();
  const { currentUser, forumPosts, addForumPost } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  if (!currentUser) {
    navigate("/");
    return null;
  }

  const filteredPosts = forumPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const initials = currentUser.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

      addForumPost({
        id: `post${Date.now()}`,
        title: newPostTitle,
        author: currentUser.name,
        authorInitials: initials,
        timestamp: "Just now",
        category: "Skill Exchange",
        content: newPostContent,
      });

      setNewPostTitle("");
      setNewPostContent("");
      setShowNewPost(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl">SkillSwap Forum</h1>
          <p className="text-gray-600">Community Discussions</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <FileText className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl">5</p>
            <p className="text-gray-600 text-sm">Total Posts</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <p className="text-2xl">127</p>
            <p className="text-gray-600 text-sm">Active Today</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <p className="text-2xl">1,247</p>
            <p className="text-gray-600 text-sm">Members</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search discussions, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={() => setShowNewPost(true)}>New Post</Button>
          </div>

          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                    {post.authorInitials}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No posts found matching your search
            </div>
          )}
        </div>
      </div>

      <Dialog open={showNewPost} onOpenChange={setShowNewPost}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Title</label>
              <Input
                type="text"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder="Enter your post title..."
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Content</label>
              <Textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share your thoughts, questions, or skill exchange offers..."
                rows={6}
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowNewPost(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreatePost}>Post</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

