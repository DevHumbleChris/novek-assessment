import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <section>
            <Sidebar />
            <div className="flex flex-col items-center gap-3 my-20">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/freight-forwarding-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logistics-forwarder-transportation-shipping-box-package-pack-e-commerce-shopping-icons-7794372.png" alt="no-freight" className="w-40" />

                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold">No freight to see.</h2>
                    <p className="text-sm">All created freights will be listed here.</p>
                </div>
            </div>
        </section>
    )
}
