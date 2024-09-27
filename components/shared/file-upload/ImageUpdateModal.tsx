import { Pencil } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import UploadFile from "./UploadFile"

export function ImageUpdateModal({ userData }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className=" bg-white p-2 rounded-full">
                    <Pencil />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Change your profile photo</DialogTitle>
                    <DialogDescription>
                        Anyone can view your profile image.
                    </DialogDescription>
                </DialogHeader>

                {/* User profile image */}
                <div className="w-full child-center ">
                    <UploadFile userData={userData} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
