'use client';

import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { updateProfileImage } from '@/actions/user.action';
import { Progress } from "@/components/ui/progress"
import { SingleImageDropzone } from './SingleImageDropzone';
import { Button } from '@/components/ui/button';


// FIXME: this is a temporary solution, correct the type of the userData parameter
export default function UploadFile({ userData }: any) {
    const [file, setFile] = React.useState<File>();
    const { edgestore } = useEdgeStore();
    const [progress, setProgress] = React.useState(0);

    console.log("USerdata", userData);


    return (
        <div>
            <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                onChange={(file) => {
                    setFile(file);
                }}
            />
            {progress > 0 && progress < 100 && <Progress value={progress} />}

            <Button
                variant={"default"}
                onClick={async () => {
                    if (file) {
                        try {
                            // Upload the file to the edge store
                            const res = await edgestore.publicFiles.upload({
                                file,
                                onProgressChange: (progress: any) => {
                                    setProgress(progress); // To show upload progress
                                },
                            });

                            const uploadedFileUrl = res.url; // Assuming this is where the URL comes from

                            // Call the server action to update the profile image
                            const result = await updateProfileImage(userData?.id, uploadedFileUrl);

                            if (result.success) {
                                console.log('Profile image updated successfully.');
                                window.location.reload();
                            } else {
                                console.error('Failed to update profile image.');
                            }
                        } catch (error) {
                            console.error('Error during upload:', error);
                        }
                    }
                }}
            >
                Upload
            </Button>
        </div>
    );
}