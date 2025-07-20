import { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define TypeScript types
type Message = {
  text: string;
  image: string | null;
};

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Dummy send function
  const sendMessage = async (msg: Message) => {
    console.log("Sending message:", msg);
    return new Promise((res) => setTimeout(res, 500)); // simulate API
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({ text: text.trim(), image: imagePreview });

      // Reset form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full sticky bottom-0  bg-background ">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <Button
              onClick={removeImage}
              type="button"
              size="icon"
              className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 rounded-full bg-muted text-muted-foreground hover:bg-destructive"
            >
              <X className="size-3" />
            </Button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center justify-center gap-2"
      >
        <div className="flex-1 flex items-center gap-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="ring-2 ring-gray-100 h-12 md:h-16"
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            className={`h-12 w-12 md:h-16 md:w-16 flex items-center justify-center ${
              imagePreview ? "text-emerald-500" : "text-zinc-400"
            }`}
          >
            <Image size={28} />
          </Button>
        </div>

        <Button
          type="submit"
          size="icon"
          variant="default"
          className="h-12 w-12 md:h-14 md:w-14"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;

// import { useRef, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { Image, Send, X } from "lucide-react";

// const MessageInput = () => {
//   const [text, setText] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const { sendMessage } = useChatStore();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file.type.startsWith("image/")) {
//       toast.error("Please select an image file");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!text.trim() && !imagePreview) return;

//     try {
//       await sendMessage({
//         text: text.trim(),
//         image: imagePreview,
//       });

//       // Clear form
//       setText("");
//       setImagePreview(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }
//   };

//   return (
//     <div className="p-4 w-full">
//       {imagePreview && (
//         <div className="mb-3 flex items-center gap-2">
//           <div className="relative">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
//             />
//             <button
//               onClick={removeImage}
//               className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
//               flex items-center justify-center"
//               type="button"
//             >
//               <X className="size-3" />
//             </button>
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSendMessage} className="flex items-center gap-2">
//         <div className="flex-1 flex gap-2">
//           <input
//             type="text"
//             className="w-full input input-bordered rounded-lg input-sm sm:input-md"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             ref={fileInputRef}
//             onChange={handleImageChange}
//           />

//           <button
//             type="button"
//             className={`hidden sm:flex btn btn-circle
//                      ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <Image size={20} />
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-sm btn-circle"
//           disabled={!text.trim() && !imagePreview}
//         >
//           <Send size={22} />
//         </button>
//       </form>
//     </div>
//   );
// };
// export default MessageInput;
