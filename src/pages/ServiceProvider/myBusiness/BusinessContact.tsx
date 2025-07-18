import ProfileMaps from "@/assets/images/ProfileMaps.svg";
import { Mail, MapPin, Phone } from "lucide-react";

export default function BusinessContact() {
  return (
    <section className="my-12">
      <h4 className="font-semibold text-2xl mb-6 text-gray-800">Contact</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-liquidGreen rounded-md overflow-hidden">
        {/* Contact Info */}
        <div className="p-6 space-y-2">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              2972 Westheimer Rd.
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-600" />
              alimounji@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-600" />
              +41 212 635 00
            </li>
          </ul>
        </div>

        {/* Map Image */}
        <div className="w-full h-full">
          <img
            src={ProfileMaps}
            alt="Map showing location of Ali Mounji's business"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
