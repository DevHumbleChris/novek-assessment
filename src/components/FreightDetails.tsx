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
    formData: {
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
    }
}

export default function FreightDetails({ formData, setFormData }: Props) {
    return (
        <div>FreightDetails</div>
    )
}
