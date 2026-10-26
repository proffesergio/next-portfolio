'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/dialog';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export const VideoModal = ({
  isOpen,
  videoUrl,
  title,
  onClose,
}: VideoModalProps) => (
  <Dialog
    open={isOpen}
    onOpenChange={(open) => {
      if (!open) onClose();
    }}
  >
    <DialogContent className="max-h-[90dvh] w-[calc(100%-24px)] max-w-5xl overflow-y-auto rounded-2xl p-4 sm:p-6">
      <DialogTitle className="pr-10">{title}</DialogTitle>
      <DialogDescription className="sr-only">
        Motion design preview. Use the video controls to play or pause.
      </DialogDescription>
      <video
        src={videoUrl}
        controls
        autoPlay
        playsInline
        className="max-h-[72dvh] w-full rounded-xl bg-black"
        aria-label={title}
      />
    </DialogContent>
  </Dialog>
);
