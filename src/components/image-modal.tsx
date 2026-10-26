'use client';

import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/dialog';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageModal = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}: ImageModalProps) => (
  <Dialog
    open={isOpen}
    onOpenChange={(open) => {
      if (!open) onClose();
    }}
  >
    <DialogContent className="max-h-[90dvh] w-[calc(100%-24px)] max-w-5xl overflow-y-auto rounded-2xl p-4 sm:p-6">
      <DialogTitle className="pr-10">{title}</DialogTitle>
      <DialogDescription className="sr-only">
        Full-size preview of {title}.
      </DialogDescription>
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={800}
        className="max-h-[72dvh] w-full rounded-xl object-contain"
        quality={90}
      />
    </DialogContent>
  </Dialog>
);
