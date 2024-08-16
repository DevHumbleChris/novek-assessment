import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"
import DestinationDetails from "../components/DestinationDetails"
import { useState } from "react"
import FreightDetails from "../components/FreightDetails"

export default function NewFreight() {
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = useState(0)

    const [formData, setFormData] = useState({
        to: {
            city: '',
            country: '',
            address: ''
        },
        from: {
            city: '',
            country: '',
            address: ''
        }
    })

    const goBack = () => {
        return navigate('/user/dashboard')
    }

    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }
    return (
        <section className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-5 min-h-screen bg-[#f1f2f5]">
                <div className="sm:col-span-3 border-r p-5 space-y-4">
                    <h3 className="text-xl font-semibold">New Freight</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <button onClick={() => setActiveStep(0)} className="flex items-center gap-1 px-3 py-2 border text-sm text-gray-500 hover:text-gray-600 bg-white rounded-md">
                                {
                                    activeStep > 0 ? (
                                        <Icon icon="lucide:circle-check-big" className="size-4 text-emerald-600" />

                                    ) : (
                                        <p>1</p>
                                    )
                                }
                                <p>Destination details</p>
                            </button>
                            <button onClick={() => setActiveStep(1)} disabled={activeStep <= 0} className="flex items-center gap-1 px-3 py-2 border text-sm text-gray-500 hover:text-gray-600 bg-white rounded-md">
                                {
                                    activeStep > 1 ? (
                                        <Icon icon="lucide:circle-check-big" className="size-4 text-emerald-600" />
                                    ) : (
                                        <p>2</p>
                                    )
                                }
                                <p>Freight details</p>
                            </button>
                        </div>
                        {
                            activeStep === 0 && (
                                <DestinationDetails setFormData={setFormData} />
                            )
                        }
                        {
                            activeStep === 1 && (
                                <FreightDetails setFormData={setFormData} formData={formData} />
                            )
                        }
                    </div>
                </div>
                <div className="sm:col-span-2 p-5">
                    <h3 className="text-xl font-semibold">Last Destinations</h3>
                </div>
            </div>
            <div className="absolute bottom-0 bg-white border-t backdrop-blur-sm right-0 left-0 w-full p-3 shadow flex items-center justify-between">
                <button onClick={() => goBack()} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-600">
                    <Icon icon="lucide:chevron-left" className="size-5" />
                    <p>close and discard</p>
                </button>

                <div className="flex items-center gap-3">
                    <button className="block text-sm rounded-md bg-transparent px-4 py-2 text-blackS hover:border hover:bg-gray-50">Save & go back</button>
                    <button onClick={() => nextStep()} className="block text-sm rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-400">Next</button>
                </div>
            </div>
        </section>
    )
}