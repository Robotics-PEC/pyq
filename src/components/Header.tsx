import { AuthButton } from "@/components/AuthButton";
import { Button } from "@/components/ui/button";
import { Github, GitFork } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/Robotics-PEC/pyq", "_blank");
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center">
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleGithubClick}
              className="flex items-center gap-2"
            >
              <GitFork className="h-4 w-4" />
              Repository
            </Button>
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;