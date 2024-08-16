import { Icon } from "@iconify/react";

interface Props {
    updateData: (
        section: "from" | "to",
        field: "country" | "city" | "address",
        value: string
    ) => void;
    type: "from" | "to";
}

export default function CountrySelect({ updateData, type }: Props) {
    return (
        <div className="grid gap-1.5">
            <p className="text-sm font-semibold">Country</p>
            <div className="flex items-center gap-1 border px-2 py-2 rounded-md">
                <Icon icon="material-symbols-light:globe-asia" className="size-6" />
                <select
                    onChange={(e) => updateData(type, "country", e.target.value)}
                    name="country"
                    id="country"
                    className="bg-transparent w-full border-none outline-none text-sm"
                >
                    <option value="USA">USA</option>
                    <option value="Kenya">Kenya</option>
                    <option value="China">China</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Uganda">Uganda</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Russia">Russia</option>
                </select>
            </div>
        </div>
    );
}
