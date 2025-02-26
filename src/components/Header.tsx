import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/AuthButton";
import { GitFork, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGithubClick = () => {
    window.open("https://github.com/Robotics-PEC", "_blank");
  };

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Activities", path: "/activities" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="text-xl font-bold">
              PEC Robotics 
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <AuthButton />
            <Button
              variant="outline"
              onClick={handleGithubClick}
              className="hidden md:flex items-center gap-2 hover:bg-accent"
            >
              <GitFork className="h-4 w-4" />
              Repository
            </Button>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="text-lg font-medium px-4 py-2 hover:bg-accent rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
