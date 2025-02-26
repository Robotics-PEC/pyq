import { useState, useEffect } from "react";
import { Search, Upload, Book } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PaperViewer from "@/components/PaperViewer";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

type CourseResource = {
  year: number;
  file: string;
};

type Course = {
  name: string;
  course_code: string;
  resources: {
    pyqs: CourseResource[];
  };
};

const GITHUB_JSON_URL =
  "https://raw.githubusercontent.com/Robotics-PEC/Studies/main/src/data/papers.json";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [papers, setPapers] = useState<Course[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await fetch(GITHUB_JSON_URL);
        if (!response.ok) throw new Error("Failed to fetch papers.json");
        const data = await response.json();
        setPapers(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load question papers.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  const filteredPapers = papers.filter(
    (paper) =>
      paper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.course_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Punjab Engineering College</h1>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Question Paper Repository</h1>
          <p className="text-lg text-gray-600">Access previous year question papers</p>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search papers by Name or Code..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <Button className="gap-2" onClick={() => navigate("/Upload")}>
              <Upload className="h-4 w-4" />
              Upload Paper
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading papers...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper) => (
              <Dialog key={paper.course_code}>
                <DialogTrigger asChild>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <Book className="h-8 w-8 text-blue-500" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{paper.name}</h3>
                        <p className="text-sm text-gray-500">{paper.course_code}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm">View Paper</Button>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh]">
                  <DialogHeader>
                    <DialogTitle>{paper.name}</DialogTitle>
                  </DialogHeader>
                  {paper.resources.pyqs.map((resource) => (
                    <PaperViewer
                      key={resource.year}
                      url={`https://raw.githubusercontent.com/Robotics-PEC/Studies/main/Papers/${encodeURIComponent(paper.name)}/${resource.year}/${resource.file}.pdf`}
                    />
                  ))}
                  <div className="flex justify-center gap-4 flex-wrap">
                    {paper.resources.pyqs.map((resource) => (
                      <a
                        key={`${resource.year}-${resource.file}`}
                        href={`https://raw.githubusercontent.com/Robotics-PEC/Studies/main/Papers/${encodeURIComponent(paper.name)}/${resource.year}/${resource.file}.pdf`}
                        download={`${paper.name}_${resource.year}_${resource.file}.pdf`}
                      >
                        <Button className="gap-2">
                          <Upload className="h-4 w-4" />
                          {resource.year} - {resource.file.replace(/-/g, " ")}
                        </Button>
                      </a>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
