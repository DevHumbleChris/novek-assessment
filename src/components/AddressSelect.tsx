import { Icon } from "@iconify/react"

interface Props {
    updateData: (
        section: "from" | "to",
        field: "country" | "city" | "address",
        value: string
    ) => void;
    type: "from" | "to";
}

export default function AddressSelect({ type, updateData }: Props) {
    return (
        <div className="grid gap-1.5">
            <p className="text-sm font-semibold">Address</p>
            <div className="flex items-center gap-1 border px-2 py-2 rounded-md">
                <Icon icon="material-symbols:add-location-alt-outline-rounded" className="size-6" />
                <input onChange={(e) => updateData(type, "address", e.target.value)} className="bg-transparent w-full border-none outline-none text-sm" placeholder="address" />
            </div>
        </div>
    )
}
