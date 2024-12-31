"use client"

import { motion } from "framer-motion"

export function CTA() {
  return (
    <div className="bg-[#9EFF00]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to grow your wealth?</span>
            <span className="block text-white">Start your journey today.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Join thousands of successful investors who trust Aadyanvi Wealth.
          </p>
        </motion.div>
        <motion.div
          className="mt-8 flex lg:mt-0 lg:flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#9EFF00] bg-white hover:bg-gray-50">
              Get started
            </button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#66D9FF] hover:bg-[#50c0e6]">
              Learn more
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
