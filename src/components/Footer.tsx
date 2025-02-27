import { Github, Instagram, Linkedin, Mail, MapPin, Clock, BookOpen, Users, Calendar, ChevronRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PEC Robotics</h3>
            <p className="text-sm text-muted-foreground">
              Pushing the boundaries of innovation through robotics and automation at Punjab Engineering College, Chandigarh.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Robotics-PEC" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/pec-robotics-society/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/robotics.society/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:robotics@pec.edu.in" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/activities", label: "Activities" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact" },
                { href: "/Docify", label: "Docify" },
                { href: "/pyq", label: "Previous Year Questions" }
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: "/activities", label: "Workshops", icon: <BookOpen className="h-4 w-4 mr-2" /> },
                { href: "/team", label: "Our Team", icon: <Users className="h-4 w-4 mr-2" /> },
                { href: "/events", label: "Upcoming Events", icon: <Calendar className="h-4 w-4 mr-2" /> }
              ].map(({ href, label, icon }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Punjab Engineering College, Sector 12, Chandigarh, 160012
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">robotics@pec.edu.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PEC Robotics Society. All rights reserved.
            </p>
            <div className="mt-2 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground mr-4">Privacy Policy</a>
              <a href="/terms" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
