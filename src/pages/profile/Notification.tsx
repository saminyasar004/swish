

export default function Notification() {
  return (
   <div className="bg-white p-6 my-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">
                Notifications
              </h3>
              <div className="space-y-6">
                {/* Each Notification Row */}
                {["All Notifications", "Message", "New Bid"].map(
                  (label, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700">{label}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:left-[2px] peer-checked:after:translate-x-5"></div>
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
  )
}
