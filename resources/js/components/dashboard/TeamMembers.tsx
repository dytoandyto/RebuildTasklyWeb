import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "../ImageWithFallback";

interface MemberProps {
    name: string;
    role: string;
    avatar: string;
    tasks: number;
    online: boolean;
}

export const TeamMembers = ({ members }: { members: MemberProps[] }) => (
    <div className="">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 font-semibold">Team Members</h2>
            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                {members.length} Active
            </span>
        </div>

        <div className="space-y-4">
            {members.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className="relative shrink-0">
                        {/* Avatar Placeholder: Ganti dengan Image component Anda */}
                        <ImageWithFallback
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover border border-gray-100"
                        />
                        {member.online && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900 truncate">{member.name}</div>
                        <div className="text-xs text-gray-500 truncate">{member.role}</div>
                    </div>
                    <div className="text-xs font-mono text-gray-400">
                        {member.tasks} tasks
                    </div>
                </div>
            ))}
        </div>

        <Button variant="outline" className="w-full mt-6 rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50">
            <Users className="w-4 h-4 mr-2" />
            View All Members
        </Button>
    </div>
);