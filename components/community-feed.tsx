'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, Share2 } from 'lucide-react'

export default function CommunityFeed() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg"
      },
      content: "Just completed my first international project with amazing team members from TYPNI! 🚀",
      timeAgo: "2h ago",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg"
      },
      content: "Looking forward to the upcoming leadership workshop! Who else is joining? 📚",
      timeAgo: "4h ago",
      likes: 15,
      comments: 8
    }
  ]

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{post.author.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {post.timeAgo}
                </span>
              </div>
              <p className="mt-2">{post.content}</p>
              <div className="mt-4 flex space-x-4">
                <button className="flex items-center space-x-1 text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

