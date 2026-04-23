import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAppContext } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Upload, X } from "lucide-react";

export default function ProfileSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addUser, setCurrentUser } = useAppContext();
  const signupData = location.state;

  const [formData, setFormData] = useState({
    bio: "",
    education: "",
    offersSkills: "",
    wantsSkills: "",
    phone: "",
  });
  const [credentialFile, setCredentialFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCredentialFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentialFile) {
      setError("Please upload your credentials (resume/degree) to continue");
      return;
    }

    const newUser = {
      id: `user${Date.now()}`,
      name: signupData.name,
      email: signupData.email,
      age: parseInt(signupData.age),
      bio: formData.bio,
      education: formData.education,
      offersSkills: formData.offersSkills.split(",").map((s) => s.trim()),
      wantsSkills: formData.wantsSkills.split(",").map((s) => s.trim()),
      phone: formData.phone,
      subscriptionPlan: signupData.subscriptionPlan,
      credits: 45,
      profileComplete: true,
    };

    addUser(newUser);
    setCurrentUser(newUser);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">Complete Your Profile</h1>
          <p className="text-gray-600">Tell us about yourself and your skills</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Bio</label>
            <Textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Tell us about yourself, your experience, and what you're passionate about..."
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Education Background</label>
            <Input
              type="text"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              placeholder="e.g., BS Computer Science, University of the Philippines"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Skills You Offer</label>
            <Input
              type="text"
              value={formData.offersSkills}
              onChange={(e) => setFormData({ ...formData, offersSkills: e.target.value })}
              placeholder="e.g., Programming, Web Development, Python (comma-separated)"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Skills You Want to Learn</label>
            <Input
              type="text"
              value={formData.wantsSkills}
              onChange={(e) => setFormData({ ...formData, wantsSkills: e.target.value })}
              placeholder="e.g., Graphic Design, Cooking, Spanish (comma-separated)"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Phone Number</label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+639171234567"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Upload Credentials (Resume/Degree) *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              {!credentialFile ? (
                <label className="cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Click to upload your credentials
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOC, or DOCX (Max 10MB)</p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <p className="text-sm">{credentialFile.name}</p>
                  <button
                    type="button"
                    onClick={() => setCredentialFile(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" size="lg">
            Get Started
          </Button>
        </form>
      </div>
    </div>
  );
}

