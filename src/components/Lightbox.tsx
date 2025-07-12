import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  images: { src: string; alt: string; title?: string; description?: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, isOpen, currentIndex, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm animate-fade-in">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </>
      )}

      {/* Image Container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-6xl max-h-full animate-scale-in">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
          
          {/* Image Info */}
          {(currentImage.title || currentImage.description) && (
            <div className="mt-4 text-center text-white animate-fade-in-up">
              {currentImage.title && (
                <h3 className="font-serif text-2xl font-bold mb-2">
                  {currentImage.title}
                </h3>
              )}
              {currentImage.description && (
                <p className="text-white/80 max-w-2xl mx-auto">
                  {currentImage.description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Background Click to Close */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default Lightbox;