import { Icon } from "@iconify/react";
import CountrySelect from "./CountrySelect";
import CitySelect from "./CitySelect";
import AddressSelect from "./AddressSelect";

interface Props {
    setFormData: React.Dispatch<React.SetStateAction<{
        to: {
            city: string;
            country: string;
            address: string;
        };
        from: {
            city: string;
            country: string;
            address: string;
        };
    }>>
}

export default function DestinationDetails({ setFormData }: Props) {

    const updateData = (section: 'from' | 'to', field: 'country' | 'city' | 'address', value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value
            }
        }));
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white shadow rounded-md p-5 space-y-4">
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:move-up-right" className="size-8 p-2 bg-indigo-50 rounded-full text-gray-600" />
                    <p>From</p>
                </div>
                <div className="space-y-3">
                    <CountrySelect updateData={updateData} type="from" />
                    <CitySelect updateData={updateData} type="from" />
                    <AddressSelect updateData={updateData} type="from" />
                </div>
            </div>
            <div className="bg-white shadow rounded-md p-5 space-y-4">
                <div className="flex items-center gap-2">
                    <div className="rotate-90">
                        <Icon icon="lucide:move-up-right" className="size-8 p-2 bg-indigo-50 rounded-full text-gray-600" />
                    </div>
                    <p>To</p>
                </div>
                <div className="space-y-3">
                    <CountrySelect updateData={updateData} type="to" />
                    <CitySelect updateData={updateData} type="to" />
                    <AddressSelect updateData={updateData} type="to" />
                </div>
            </div>
        </div>
    )
}
