import { Icon } from "@iconify/react"

interface Props {
    updateData: (
        section: "from" | "to",
        field: "country" | "city" | "address",
        value: string
    ) => void;
    type: "from" | "to";
}

export default function CitySelect({ type, updateData }: Props) {
    return (
        <div className="grid gap-1.5">
            <p className="text-sm font-semibold">City</p>
            <div className="flex items-center gap-1 border px-2 py-2 rounded-md">
                <Icon icon="material-symbols:map-outline" className="size-6" />
                <select onChange={(e) => updateData(type, "city", e.target.value)} name="city" id="city" className="bg-transparent w-full border-none outline-none text-sm">
                    <option value="New york">New york</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="HongKong">HongKong</option>
                    <option value="Kigali">Kigali</option>
                    <option value="Entebe">Entebe</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Moscow">Moscow</option>
                </select>
            </div>
        </div>
    )
}
