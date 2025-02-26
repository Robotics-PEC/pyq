import { Button } from "./ui/button";
import { AuthButton } from "@/components/AuthButton";
import { Github, GitFork } from "lucide-react";

const Header = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/Robotics-PEC/pyq", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="text-xl font-bold">
              PEC-PYQs
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="/Docify"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Docify
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleGithubClick}
              className="flex items-center gap-2 hover:bg-accent"
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
};

export default Header;
