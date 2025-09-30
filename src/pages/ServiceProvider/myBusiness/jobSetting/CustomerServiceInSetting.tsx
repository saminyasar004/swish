"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function CustomerServiceInSetting() {
  return (
    <div>
      {/* Header */}
      <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary pb-4">
        Contact us
      </h2>
      <p className="text-sm text-[#151515] pb-4">
        If you have any questions or need guidance, please contact customer
        service. Opening hours: Monday - Friday 13-20
      </p>

      {/* Contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Chat */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-col gap-2">
            <MessageCircle className="w-6 h-6 text-providerPrimary" />
            <CardTitle className="text-lg font-semibold">Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The easiest way to contact us. Fastest help and short waiting <br /> time.
            </p>
            <Button className="w-full bg-providerPrimary hover:bg-providerPrimary/90">
              Chat now
            </Button>
          </CardContent>
        </Card>

        {/* Email */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-col gap-2">
            <Mail className="w-6 h-6 text-providerPrimary" />
            <CardTitle className="text-lg font-semibold">E-mail</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Do you have a lot on your mind? Send us an email at{" "}
              <span className="font-medium">salam@swish.ma</span>
            </p>
            <Button
              variant="outline"
              className="w-full border-providerPrimary text-providerPrimary hover:bg-providerPrimary hover:text-white"
              asChild
            >
              <a href="mailto:salam@swish.ma">Send E-mail</a>
            </Button>
          </CardContent>
        </Card>

        {/* Phone */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-col gap-2">
            <Phone className="w-6 h-6 text-providerPrimary" />
            <CardTitle className="text-lg font-semibold">Phone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You can also reach us by phone, but there is often a longer waiting
              time.
            </p>
            <Button
              variant="outline"
              className="w-full text-gray-700 border-gray-300 cursor-default"
              asChild
            >
              <a href="tel:+2120202020202">+212 0202020202</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
