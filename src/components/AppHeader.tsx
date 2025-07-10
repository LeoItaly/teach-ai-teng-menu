import { Search, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

export function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="h-16 border-b flex items-center justify-between px-4" style={{ backgroundColor: '#c89978' }}>
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        
        {/* Logo and Greeting */}
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/ea8a6dcd-76b2-4bb0-9218-b996246be0b8.png" 
            alt="GoodClass" 
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg font-semibold text-white">Good morning, leo! 🌅</h1>
            <p className="text-sm text-white/80">Ready to make teaching easier today?</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted/50"
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/20">
          <MessageSquare className="w-4 h-4" />
          Community
        </Button>
        <Button variant="outline" size="sm" className="gap-2 border-white text-white hover:bg-white hover:text-black">
          <Settings className="w-4 h-4" />
          Preferences
        </Button>
      </div>
    </header>
  );
}