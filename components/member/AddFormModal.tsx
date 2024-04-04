'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Copy, Github, Instagram, Linkedin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import AddMemberForm from './AddMemberForm'





const EditFormModal = () => {


    const [modalState, setModalState] = useState('closed')


    function controlModalState() {
        setModalState('open')
    }
    function controlCloseModalState() {
        setModalState('closed')
    }
    return (
        <>
            <Button variant="outline" onClick={controlModalState} >
                + Add Member
            </Button>
            {modalState === 'open' && (
                <div className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <div className='fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-2xl font-semibold'>Add Member</h1>
                        </div>
                        <hr />
                        <AddMemberForm closeModalFunction={controlCloseModalState} />
                    </div>
                </div>
            )}

        </>

    )
}

export default EditFormModal
