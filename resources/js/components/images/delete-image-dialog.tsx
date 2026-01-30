import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DeleteImageDialogProps {
  imageId: number;
  trigger: React.ReactNode;
}

export default function DeleteImageDialog({
  imageId,
  trigger,
}: DeleteImageDialogProps) {
  const [open, setOpen] = useState(false);
  const { delete: destroy, processing } = useForm();

  const deleteImage: FormEventHandler = (e) => {
    e.preventDefault();
    destroy(route('images.destroy', imageId), {
      preserveScroll: true,
      onSuccess: () => setOpen(false),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete this image?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. The image and all associated data will
          be permanently deleted.
        </DialogDescription>
        <form onSubmit={deleteImage}>
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" disabled={processing} type="submit">
              Delete Image
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
