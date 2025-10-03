import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

type Album = {
  id: number;
  name: string;
  photos: string[];
};

export default function EditPhotosModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);

  // Handle photo uploads
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 10) {
      toast.error("You can upload a maximum of 10 photos at a time.");
      return;
    }
    const newPhotos = acceptedFiles.map((file) => URL.createObjectURL(file));
    if (selectedAlbum) {
      const updatedAlbums = albums.map((album) =>
        album.id === selectedAlbum.id
          ? { ...album, photos: [...album.photos, ...newPhotos] }
          : album
      );
      setAlbums(updatedAlbums);
      toast.success("Photos uploaded!");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  // Open modal for selected album
  const handleOpen = (album: Album) => {
    setSelectedAlbum(album);
    setIsOpen(true);
  };

  // Handle delete photo
  const handleDeletePhoto = (index: number) => {
    if (selectedAlbum) {
      const updatedAlbums = albums.map((album) =>
        album.id === selectedAlbum.id
          ? { ...album, photos: album.photos.filter((_, i) => i !== index) }
          : album
      );
      setAlbums(updatedAlbums);
      toast.success("Photo deleted!");
    }
  };

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      albums.forEach((album) =>
        album.photos.forEach((url) => URL.revokeObjectURL(url))
      );
    };
  }, [albums]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        📸 My Picture Albums
      </h1>

      {/* Album List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.length === 0 ? (
          <p className="text-center text-gray-500">
            No albums yet. Create one to get started!
          </p>
        ) : (
          albums.map((album) => (
            <div
              key={album.id}
              className="border rounded-lg p-4 shadow hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-lg">{album.name}</h2>
                <DialogTrigger asChild>
                  <Button onClick={() => handleOpen(album)}>Edit Photos</Button>
                </DialogTrigger>
              </div>
              {/* Always Visible Photos */}
              <div className="grid grid-cols-3 gap-2">
                {album.photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={photo}
                      alt={`${album.name}-photo-${index}`}
                      className="w-full h-24 object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Photos Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Photos for {selectedAlbum?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Drag & Drop Uploader */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              aria-label="Drag and drop or click to upload images"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-600 font-medium">
                  Drop your files here...
                </p>
              ) : (
                <p className="text-gray-500">
                  Drag and drop or click to upload images
                </p>
              )}
            </div>

            {/* Photo Previews (Always Visible in Modal) */}
            <div className="grid grid-cols-3 gap-2">
              {selectedAlbum?.photos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={photo}
                    alt={`${selectedAlbum.name}-photo-${index}`}
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <button
                    onClick={() => handleDeletePhoto(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full"
                    aria-label="Remove photo"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Include CreateAlbumModal */}
      <CreateAlbumModal />
    </div>
  );
}

type Albums = {
  id: number;
  name: string;
  photos: string[];
};

export function CreateAlbumModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [albumName, setAlbumName] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);

  const handleSave = () => {
    if (!albumName.trim()) {
      toast.error("Album name is required");
      return;
    }
    if (
      albums.some(
        (album) => album.name.toLowerCase() === albumName.trim().toLowerCase()
      )
    ) {
      toast.error("An album with this name already exists.");
      return;
    }
    setAlbums([
      ...albums,
      { id: Date.now(), name: albumName.trim(), photos: [] },
    ]);
    setAlbumName("");
    setIsOpen(false);
    toast.success("Album created!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create Album</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Album</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="albumName">Album Name</Label>
            <Input
              id="albumName"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Create Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
