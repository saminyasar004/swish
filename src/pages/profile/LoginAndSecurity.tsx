import { Download, Trash } from 'lucide-react'
import React from 'react'

export default function LoginAndSecurity() {
  return (
    <div className="space-y-8 px-6 my-8 border border-gray-200 rounded-md overflow-hidden py-6">
              {/* Password Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Password
                </h3>
                <p className="text-green-600 font-medium cursor-pointer hover:underline">
                  Change Password
                </p>
              </div>

              {/* Profile Management Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Profile Management
                </h3>
                <div className="flex items-center space-x-6 mt-2">
                  {/* Download Data */}
                  <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:underline">
                    <Download size={16} />
                    <h5 className="font-medium">Download My Data</h5>
                  </div>

                  {/* Delete Data */}
                  <div className="flex items-center space-x-1 cursor-pointer text-red-600 hover:underline">
                    <Trash size={16} />
                    <h5 className="font-medium">Delete My Data</h5>
                  </div>
                </div>
              </div>


            </div>
  )
}
