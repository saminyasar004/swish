"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function SwitchAccount() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <Card className="w-full max-w-md shadow-sm">
        <CardContent className="p-4 space-y-6">
          {/* Current user */}
          <div className="flex items-center justify-between border rounded-md p-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/logo.png" alt="Tolvstyfim AS" />
                <AvatarFallback>TWO</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Tolvstyfim AS</span>
            </div>
            <Button
              size="sm"
              className="bg-gray-200 text-gray-800 hover:bg-gray-200 rounded-lg"
            >
              Logged in
            </Button>
          </div>

          {/* Other users */}
          <div>
            <p className="text-base font-semibold text-gray-900 mb-2">
              Other users
            </p>
            <button className="w-full flex items-center justify-between border rounded-md p-3 text-left hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>😊</AvatarFallback>
                </Avatar>
                <span className="text-sm">Ali Mounji</span>
              </div>
              <span className="text-gray-900">›</span>
            </button>
          </div>

          {/* Links */}
          <div className="space-y-2 pt-4 flex flex-col">
            <Button className="bg-transparent shadow-sm  text-providerPrimary hover:bg-slate-100">
              Go to your business
            </Button>
            <Button className="bg-transparent shadow-sm  text-providerPrimary hover:bg-slate-100">
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
