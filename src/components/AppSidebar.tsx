import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  HelpCircle, 
  Clipboard, 
  GraduationCap, 
  CheckSquare, 
  Grid3X3, 
  ExternalLink,
  Clock
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainFeatures = [
  { title: "Quiz Generator", url: "/workflow/quiz-generator", icon: HelpCircle },
  { title: "Lesson Planner", url: "/workflow/lesson-planner", icon: Clipboard },
  { title: "Grading Assistant", url: "/workflow/grading-assistant", icon: CheckSquare },
  { title: "All Tools", url: "/dashboard", icon: Grid3X3 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-sm font-medium mb-4">
            Main Features
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainFeatures.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Original Version Link */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a 
                    href="https://goodclass.ai/tools" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {!collapsed && <span>Original Version</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}