import MyButton from "./MyButton";

function NoNote() {
    return (
        <>
            <div className="mt-12 min-h-screen bg-white px-6 py-12 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8">📝 Sync Note</h1>
                <div className="max-w-3xl text-lg text-gray-700 space-y-4">
                    <p>
                        <strong>Sync Note</strong> is your always-ready, cross-device note-taking hub. Whether it's ideas, tasks, or reflections — your notes stay <span className="font-semibold text-blue-600">instantly synced</span> and safely stored.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>⚡ Real-Time Sync</strong> – Notes update live across devices with no reloads.</li>
                        <li><strong>📱 Mobile-Friendly</strong> – Take notes on-the-go and pick up right where you left off.</li>
                        <li><strong>🧠 Smart Save</strong> – Auto-save and version control keep your content safe (coming soon).</li>
                        <li><strong>💻 Minimal UI</strong> – Clean interface built with focus-first design principles.</li>
                    </ul>

                    <p className="italic text-gray-500">
                        Built with React, styled in Tailwind — designed to let your thoughts flow without interruption.
                    </p>

                </div>
                <MyButton textInside="Lets Start>>" />
            </div>
        </>
    )
}
export default NoNote