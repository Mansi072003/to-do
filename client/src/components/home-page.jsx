import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function HomePage() {
  return (
    (<div className="flex min-h-screen">
      <aside className="w-64 p-4 bg-[#ebebeb]">
        <div className="flex items-center mb-6">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="font-semibold">Joe Gardner</p>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
        <nav className="space-y-4">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <CircuitBoardIcon className="w-5 h-5" />
            <span>Boards</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <SettingsIcon className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <GroupIcon className="w-5 h-5" />
            <span>Teams</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <InfoIcon className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
        </nav>
        <Button className="mt-6 w-full bg-[purple] text-[white]">Create new task</Button>
        <div className="mt-auto">
          <Button variant="ghost" size="sm" className="w-full">
            <DownloadIcon className="w-5 h-5" />
            Download the app
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Good morning, Joe!</h1>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground" prefetch={false}>
              Help & feedback
            </Link>
            <CircleHelpIcon className="w-5 h-5" />
          </div>
        </header>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Introducing tags</CardTitle>
              <CardDescription>
                Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Share Notes Instantly</CardTitle>
              <CardDescription>
                Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing
                options.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle>Access Anywhere</CardTitle>
              <CardDescription>
                Sync your notes across all devices. Stay productive whether you&apos;re on your phone, tablet, or computer.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex items-center mb-6">
          <Input type="search" placeholder="Search" className="w-full max-w-xs" />
          <div className="flex items-center space-x-4 ml-auto">
            <Button variant="ghost">
              <CalendarIcon className="w-5 h-5" />
              Calendar view
            </Button>
            <Button variant="ghost">
              <SettingsIcon className="w-5 h-5" />
              Automation
            </Button>
            <Button variant="ghost">
              <FilterIcon className="w-5 h-5" />
              Filter
            </Button>
            <Button variant="ghost">
              <ShareIcon className="w-5 h-5" />
              Share
            </Button>
            <Button className="bg-[purple] text-[white]">
              <PlusIcon className="w-5 h-5" />
              Create new
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">To do</h2>
            <Card className="p-4 mb-4">
              <CardHeader>
                <CardTitle>Implement User Authentication</CardTitle>
                <CardDescription>Develop and integrate user authentication using email and password.</CardDescription>
              </CardHeader>
              <Badge variant="destructive">Urgent</Badge>
              <div className="flex items-center space-x-2 mt-2">
                <CalendarIcon className="w-4 h-4" />
                <span>2024-08-15</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">1 hr ago</p>
            </Card>
            <Button variant="ghost" className="w-full">
              <PlusIcon className="w-5 h-5" />
              Add new
            </Button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">In progress</h2>
            <Card className="p-4 mb-4">
              <CardHeader>
                <CardTitle>Design Home Page UI</CardTitle>
                <CardDescription>Develop and integrate user authentication using email and password.</CardDescription>
              </CardHeader>
              <Badge variant="secondary">Medium</Badge>
              <div className="flex items-center space-x-2 mt-2">
                <CalendarIcon className="w-4 h-4" />
                <span>2024-08-15</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">1 hr ago</p>
            </Card>
            <Card className="p-4 mb-4">
              <CardHeader>
                <CardTitle>Conduct User Feedback Survey</CardTitle>
                <CardDescription>Collect and analyze user feedback to improve app features.</CardDescription>
              </CardHeader>
              <Badge variant="success">Low</Badge>
              <div className="flex items-center space-x-2 mt-2">
                <CalendarIcon className="w-4 h-4" />
                <span>2024-08-05</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">3 hr ago</p>
            </Card>
            <Button variant="ghost" className="w-full">
              <PlusIcon className="w-5 h-5" />
              Add new
            </Button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Under review</h2>
            <Card className="p-4 mb-4">
              <CardHeader>
                <CardTitle>Integrate Cloud Storage</CardTitle>
                <CardDescription>Enable cloud storage for note backup and synchronization.</CardDescription>
              </CardHeader>
              <Badge variant="destructive">Urgent</Badge>
              <div className="flex items-center space-x-2 mt-2">
                <CalendarIcon className="w-4 h-4" />
                <span>2024-08-20</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">2 days ago</p>
            </Card>
            <Button variant="ghost" className="w-full">
              <PlusIcon className="w-5 h-5" />
              Add new
            </Button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Finished</h2>
            <Card className="p-4 mb-4">
              <CardHeader>
                <CardTitle>Test Cross-browser Compatibility</CardTitle>
                <CardDescription>Ensure the app works seamlessly across different web browsers.</CardDescription>
              </CardHeader>
              <Badge variant="secondary">Medium</Badge>
              <div className="flex items-center space-x-2 mt-2">
                <CalendarIcon className="w-4 h-4" />
                <span>2024-07-30</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">4 days ago</p>
            </Card>
            <Button variant="ghost" className="w-full">
              <PlusIcon className="w-5 h-5" />
              Add new
            </Button>
          </div>
        </div>
      </main>
    </div>)
  );
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function CircleHelpIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>)
  );
}


function CircuitBoardIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>)
  );
}


function DownloadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}


function FilterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function GroupIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function InfoIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function ShareIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
