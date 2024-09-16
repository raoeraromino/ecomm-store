"use client"
import {Color, Size} from "@/types";
import React, {useState} from "react";
import Button from "@/components/ui/Button";
import {Plus, X} from "lucide-react";
import {Dialog} from "@headlessui/react";
import IconButton from "@/components/ui/IconButton";
import filter from "@/components/Filter";
import Filter from "@/components/Filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}
const MobileFilters = ({sizes, colors}: MobileFiltersProps) => {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)

    const onClose = () => setOpen(false)

    return (
        <>
         <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
             Filters
             <Plus size={20}/>
         </Button>

            <Dialog onClose={onClose} open={open} as="div">
                <div className="fixed inset-0 bg-black bg-opacity-25"/>

                <div className="fixed inset-0 z-40 flex">

                    <Dialog.Panel transition className="w-full duration-300 ease-out relative ml-auto h-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6
                    shadow-xl data-[closed]:translate-x-full">
                    {/*    close button*/}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                        </div>


                        <div className="p-4">
                            <Filter valueKey="sizeId" name="Size" data={sizes}/>
                            <Filter valueKey="colorId" name="Color" data={colors}/>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
};

export default MobileFilters;