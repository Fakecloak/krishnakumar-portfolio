import React from 'react';

export function PixelWhiskScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col text-slate-800 text-[11px] font-sans select-none">
      {/* Top Navbar */}
      <div className="h-9 bg-white border-b border-slate-200/80 px-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white">
            P
          </div>
          <span className="font-bold text-slate-900 text-[12px] tracking-tight">PixelWhisk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">
            JD
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-2 py-0.5 rounded text-[10px] shadow-xs flex items-center gap-1">
            <span>+</span> New Request
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-28 bg-white border-r border-slate-200/80 p-2.5 flex flex-col gap-1 hidden sm:flex">
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-0.5">
            Workspace
          </div>
          <div className="px-2 py-1 rounded bg-slate-100 text-slate-900 font-semibold flex items-center gap-1.5 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Dashboard
          </div>
          <div className="px-2 py-1 rounded text-slate-600 font-medium hover:bg-slate-50 flex items-center gap-1.5 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            Requests
          </div>
          <div className="px-2 py-1 rounded text-slate-600 font-medium hover:bg-slate-50 flex items-center gap-1.5 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            Invoices
          </div>
        </div>

        {/* Main Content Pane */}
        <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2.5 overflow-hidden bg-slate-50/60">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-[13px]">Requests</h4>
            <div className="text-[9px] text-slate-500">Showing 4 active requests</div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 border-b border-slate-200 pb-1.5 text-[9px] overflow-x-auto">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-medium">All</span>
            <span className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 hover:bg-slate-50">Action required</span>
            <span className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 hover:bg-slate-50">Payment pending</span>
            <span className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 hover:bg-slate-50">Waiting for feedback</span>
          </div>

          {/* Requests List */}
          <div className="flex flex-col gap-1.5 overflow-hidden">
            {/* Item 1 */}
            <div className="bg-white p-2 sm:p-2.5 rounded-md border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-semibold text-slate-900 text-[10px] sm:text-[11px]">SaaS Landing Page Redesign</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500">Requested: Oct 14 • 11:20 AM</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 text-[8px] sm:text-[9px] font-semibold">
                  Freezing activation
                </span>
                <span className="text-[8px] sm:text-[9px] text-emerald-600 font-medium hidden sm:inline">View details →</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-2 sm:p-2.5 rounded-md border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-semibold text-slate-900 text-[10px] sm:text-[11px]">Portfolio Website Build & CMS</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500">Requested: Oct 12 • 09:15 AM</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[8px] sm:text-[9px] font-semibold">
                  Payment pending
                </span>
                <span className="text-[8px] sm:text-[9px] text-emerald-600 font-medium hidden sm:inline">View details →</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-2 sm:p-2.5 rounded-md border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-semibold text-slate-900 text-[10px] sm:text-[11px]">SaaS Onboarding Flow Design</div>
                <div className="text-[8px] sm:text-[9px] text-slate-500">Requested: Oct 10 • 04:45 PM</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[8px] sm:text-[9px] font-semibold">
                  Waiting for feedback
                </span>
                <span className="text-[8px] sm:text-[9px] text-emerald-600 font-medium hidden sm:inline">View details →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LilBigThingsScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col text-slate-800 text-[11px] font-sans select-none">
      {/* Top Navbar */}
      <div className="h-9 bg-white border-b border-slate-200/80 px-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-purple-600 flex items-center justify-center text-[9px] font-bold text-white">
            L
          </div>
          <span className="font-bold text-slate-900 text-[12px] tracking-tight">Lil Big Things</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-slate-500 hidden sm:inline">JohnDoe.J</span>
          <div className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center text-[8px] font-bold">
            JJ
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-2 py-0.5 rounded text-[10px] shadow-xs flex items-center gap-1">
            <span>+</span> New request
          </button>
        </div>
      </div>

      <div className="p-3 sm:p-4 flex-1 flex flex-col gap-2.5 overflow-hidden bg-slate-50/60">
        {/* Controls Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-semibold text-[9px]">
              Board view
            </span>
            <span className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 text-[9px] hover:bg-slate-50">
              Table view
            </span>
          </div>
          <div className="text-[9px] text-slate-500 font-medium">Sprint 14 Active</div>
        </div>

        {/* 2 Kanban Columns matching Figma */}
        <div className="grid grid-cols-2 gap-2.5 flex-1 overflow-hidden">
          {/* Column 1: In Progress */}
          <div className="bg-slate-100/90 rounded-lg p-2 flex flex-col gap-1.5 border border-slate-200/60 overflow-hidden">
            <div className="flex items-center justify-between text-[10px] text-slate-700 font-bold px-0.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                In progress
              </span>
              <span className="text-slate-400 text-[9px]">6</span>
            </div>

            <div className="flex flex-col gap-1.5 overflow-hidden">
              <div className="bg-white p-2 rounded-md shadow-xs border border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between text-[8px] text-slate-400">
                  <span>JohnDoe • 08 May 2:30 PM</span>
                </div>
                <div className="font-semibold text-slate-900 text-[10px] leading-tight">
                  Develop resource library section
                </div>
                <div className="text-[8px] text-slate-500">Build a searchable resources hub for guides</div>
              </div>

              <div className="bg-white p-2 rounded-md shadow-xs border border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between text-[8px] text-slate-400">
                  <span>JohnDoe • 06 May 1:15 PM</span>
                </div>
                <div className="font-semibold text-slate-900 text-[10px] leading-tight">
                  Create product feature walkthrough
                </div>
                <div className="text-[8px] text-slate-500">Design and implement onboarding tour</div>
              </div>
            </div>
          </div>

          {/* Column 2: Done */}
          <div className="bg-slate-100/90 rounded-lg p-2 flex flex-col gap-1.5 border border-slate-200/60 overflow-hidden">
            <div className="flex items-center justify-between text-[10px] text-slate-700 font-bold px-0.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Done
              </span>
              <span className="text-slate-400 text-[9px]">2</span>
            </div>

            <div className="flex flex-col gap-1.5 overflow-hidden">
              <div className="bg-white/90 p-2 rounded-md shadow-xs border border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between text-[8px] text-slate-400">
                  <span>JohnDoe • 04 May 5:00 PM</span>
                </div>
                <div className="font-semibold text-slate-900 text-[10px] leading-tight">
                  Develop landing page hero
                </div>
                <div className="text-[8px] text-slate-500">Build responsive hero with typography</div>
              </div>

              <div className="bg-white/90 p-2 rounded-md shadow-xs border border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between text-[8px] text-slate-400">
                  <span>JohnDoe • 02 May 3:20 PM</span>
                </div>
                <div className="font-semibold text-slate-900 text-[10px] leading-tight">
                  Create client dashboard overview
                </div>
                <div className="text-[8px] text-slate-500">Design client portal dashboard layout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LaptopMockup({ 
  variant = "pixelwhisk"
}) {
  return (
    <div className="relative w-full max-w-[640px] mx-auto flex flex-col items-center select-none group">
      {/* MacBook Screen Bezel */}
      <div className="relative w-full aspect-[16/10] bg-[#141518] rounded-t-[14px] p-[6px] sm:p-[8px] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col">
        {/* Top Notch Camera */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-b-sm flex items-center justify-center gap-1 z-30">
          <div className="w-1 h-1 rounded-full bg-[#1e293b]" />
          <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Screen Display Container */}
        <div className="relative w-full h-full bg-[#f8fafc] rounded-[5px] overflow-hidden">
          {variant === "pixelwhisk" ? <PixelWhiskScreen /> : <LilBigThingsScreen />}
        </div>
      </div>

      {/* MacBook Keyboard Base */}
      <div className="relative w-[106%] h-3 sm:h-3.5 bg-gradient-to-b from-[#3a3d46] via-[#24262d] to-[#121316] rounded-b-md shadow-xl border-t border-white/20 flex items-start justify-center">
        {/* Thumb Opening Notch */}
        <div className="w-14 h-1 bg-[#141518] rounded-b-sm border-t border-white/10" />
      </div>

      {/* Realistic Shadow */}
      <div className="w-[90%] h-3.5 bg-black/90 blur-md rounded-full mt-0.5" />
    </div>
  );
}
