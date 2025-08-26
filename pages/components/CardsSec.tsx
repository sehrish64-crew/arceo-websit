// import React from 'react';
// import { 
//   PiggyBank, 
//   Coffee, 
//   ShoppingBag, 
//   Car,
//   ArrowUpRight,
//   Target,
//   Brain,
//   TrendingUp,
//   Calendar,
//   DollarSign,
//   Zap,
//   BarChart3,
//   Settings,
//   Smartphone,
//   CreditCard,
//   Laptop,
//   Shield,
//   TreePine,
//   Building2,
//   Plus,
//   Camera
// } from 'lucide-react';

// export default function CardsSec() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
//           {/* Savings Goals Card */}
//           <div className="relative group cursor-pointer">
//             <div className="bg-blue-50 rounded-xl p-8 h-full relative overflow-hidden">
//               {/* Grid Pattern Background */}
//               <div 
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   backgroundImage: `
//                     linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
//                   `,
//                   backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
//                   backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
//                 }}
//               />
              
//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="space-y-4 mb-8">
//                   {/* Vacation Fund */}
//                   <div className="bg-white rounded-xl p-4 shadow-sm">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-sm font-medium text-gray-700 mb-1">Vacation Fund</div>
//                         <div className="text-xl font-bold text-gray-900">$3,000 <span className="text-sm text-gray-400 font-normal">/ $4,000</span></div>
//                       </div>
//                       <div className="relative w-12 h-12">
//                         <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
//                           <path
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="#e5e7eb"
//                             strokeWidth="3"
//                           />
//                           <path
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="#3b82f6"
//                             strokeWidth="3"
//                             strokeDasharray="75, 100"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-xs font-bold text-blue-600">75%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Emergency Fund */}
//                   <div className="bg-white rounded-xl p-4 shadow-sm">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-sm font-medium text-gray-700 mb-1">Emergency Fund</div>
//                         <div className="text-xl font-bold text-gray-900">$10,000 <span className="text-sm text-gray-400 font-normal">/ $10,000</span></div>
//                       </div>
//                       <div className="relative w-12 h-12">
//                         <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
//                           <path
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="#e5e7eb"
//                             strokeWidth="3"
//                           />
//                           <path
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="#10b981"
//                             strokeWidth="3"
//                             strokeDasharray="100, 100"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-xs font-bold text-green-600">100%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* MacBook Pro Fund */}
//                   <div className="bg-white rounded-xl p-4 shadow-sm">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-sm font-medium text-gray-700 mb-1">MacBook Pro Fund</div>
//                         <div className="text-xl font-bold text-gray-900">$2,500 <span className="text-sm text-gray-400 font-normal">/ $5,000</span></div>
//                       </div>
//                       <div className="relative w-12 h-12">
//                         <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
//                           <path
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="#e5e7eb"
//                             strokeWidth="3"
//                           />
//                           <path
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="#f59e0b"
//                             strokeWidth="3"
//                             strokeDasharray="50, 100"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-xs font-bold text-amber-600">50%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Savings Goals</h3>
//                 <p className="text-gray-600 text-sm">Set, track, and achieve your financial goals with ease.</p>
//               </div>
              
//               {/* Hover Arrow */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
//                   <ArrowUpRight className="w-4 h-4 text-gray-700" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* AI Savings Recommendations Card */}
//           <div className="relative group cursor-pointer">
//             <div className="bg-green-50 rounded-xl p-8 h-full relative overflow-hidden">
//               {/* Grid Pattern Background */}
//               <div 
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   backgroundImage: `
//                     linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
//                   `,
//                   backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
//                   backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
//                 }}
//               />
              
//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="space-y-4 mb-8">
//                   {/* AI Chat Bubble 1 */}
//                   <div className="bg-white rounded-xl p-4 shadow-sm">
//                     <div className="flex items-start space-x-2">
//                       <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <ArrowUpRight className="w-3 h-3 text-green-600" />
//                       </div>
//                       <div className="text-sm text-gray-700">
//                         <p className="mb-2">Hi Cezara! It looks like you've been doing great with your vacation savings. You've saved $500 so far!</p>
//                         <p className="text-gray-600">That's Great! 😊</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* AI Chat Bubble 2 */}
//                   <div className="bg-white rounded-xl p-4 shadow-sm">
//                     <div className="text-sm font-medium text-gray-900 mb-3">How can I reach my goal faster? 🤔</div>
//                     <div className="text-sm text-gray-700 mb-4">
//                       You could save an extra $300 a month by adjusting your dining budget. Want to transfer that to your vacation fund?
//                     </div>
//                     <div className="flex space-x-2">
//                       <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
//                         Yes, set it up! 😊
//                       </button>
//                       <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
//                         No, keep budget as is 😊
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">AI Savings Recommendations</h3>
//                 <p className="text-gray-600 text-sm">Get personalized insights to boost your savings.</p>
//               </div>
              
//               {/* Hover Arrow */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
//                   <ArrowUpRight className="w-4 h-4 text-gray-700" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Round-Up Savings Card */}
//           <div className="relative group cursor-pointer">
//             <div className="bg-orange-50 rounded-xl p-8 h-full relative overflow-hidden">
//               {/* Grid Pattern Background */}
//               <div 
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   backgroundImage: `
//                     linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
//                   `,
//                   backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
//                   backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
//                 }}
//               />
              
//               {/* Content */}
//               <div className="relative z-10">
//                 {/* Circular Background Elements */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-100 rounded-full opacity-20"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
                
//                 {/* Central Piggy Bank */}
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
//                   <PiggyBank className="w-8 h-8 text-orange-500" />
//                 </div>
                
//                 {/* Total Amount */}
//                 <div className="absolute top-8 right-8 bg-white rounded-full px-3 py-1 shadow-sm">
//                   <div className="text-sm font-bold text-gray-900">-$1.25</div>
//                 </div>
                
//                 {/* Transaction Items */}
//                 <div className="space-y-3 mb-8 relative z-20">
//                   {/* Coffee */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                         <Coffee className="w-4 h-4 text-purple-600" />
//                       </div>
//                       <span className="text-sm text-gray-700">Coffee</span>
//                     </div>
//                     <div className="bg-white rounded-full px-2 py-1 shadow-sm">
//                       <span className="text-sm font-medium text-gray-900">-$0.75</span>
//                     </div>
//                   </div>
                  
//                   {/* Groceries */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                         <ShoppingBag className="w-4 h-4 text-green-600" />
//                       </div>
//                       <span className="text-sm text-gray-700">Groceries</span>
//                     </div>
//                     <div className="bg-white rounded-full px-2 py-1 shadow-sm">
//                       <span className="text-sm font-medium text-gray-900">+$25.50</span>
//                     </div>
//                   </div>
                  
//                   {/* Gas */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                         <Car className="w-4 h-4 text-blue-600" />
//                       </div>
//                       <span className="text-sm text-gray-700">Gas station</span>
//                     </div>
//                     <div className="bg-white rounded-full px-2 py-1 shadow-sm">
//                       <span className="text-sm font-medium text-gray-900">-$0.50</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="mt-16">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">Round-Up Savings</h3>
//                   <p className="text-gray-600 text-sm">Save small amounts automatically with every purchase.</p>
//                 </div>
//               </div>
              
//               {/* Hover Arrow */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
//                   <ArrowUpRight className="w-4 h-4 text-gray-700" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Icon Flow Section */}
//         <div className="flex justify-center mb-8">
//           <div className="flex items-center space-x-4">
//             {/* Left Icons */}
//             <div className="flex space-x-2">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                 <Target className="w-6 h-6 text-orange-600" />
//               </div>
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                 <TrendingUp className="w-6 h-6 text-purple-600" />
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                 <TreePine className="w-6 h-6 text-green-600" />
//               </div>
//               <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
//                 <Laptop className="w-6 h-6 text-gray-600" />
//               </div>
//             </div>
            
//             {/* Center Icons with Connection */}
//             <div className="flex items-center space-x-4">
//               <div className="w-2 h-px bg-blue-300"></div>
//               <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
//                 <PiggyBank className="w-8 h-8 text-blue-600" />
//               </div>
//               <div className="w-2 h-px bg-green-300"></div>
//               <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
//                 <Building2 className="w-8 h-8 text-green-600" />
//               </div>
//               <div className="w-2 h-px bg-blue-300"></div>
//             </div>
            
//             {/* Right Icons */}
//             <div className="flex space-x-2">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                 <Shield className="w-6 h-6 text-blue-600" />
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                 <Plus className="w-6 h-6 text-green-600" />
//               </div>
//               <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
//                 <Camera className="w-6 h-6 text-gray-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Grid */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Automated Savings Transfers */}
//           <div className="relative group cursor-pointer">
//             <div className="bg-gray-50 rounded-xl p-8 h-full relative overflow-hidden">
//               {/* Grid Pattern Background */}
//               <div 
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   backgroundImage: `
//                     linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
//                   `,
//                   backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
//                   backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
//                 }}
//               />
              
//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="mb-8">
//                   {/* Automated Transfer Visualization */}
//                   <div className="flex items-center justify-center space-x-4 mb-6">
//                     <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
//                       <DollarSign className="w-8 h-8 text-blue-600" />
//                     </div>
//                     <div className="flex-1 h-px bg-blue-300 relative">
//                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                     </div>
//                     <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
//                       <PiggyBank className="w-8 h-8 text-green-600" />
//                     </div>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-gray-900 mb-2">$500</div>
//                     <div className="text-sm text-gray-600">Monthly Transfer</div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Savings Transfers</h3>
//                 <p className="text-gray-600 text-sm">Automate your savings for stress-free financial growth.</p>
//               </div>
              
//               {/* Hover Arrow */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
//                   <ArrowUpRight className="w-4 h-4 text-gray-700" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Goal Progress Tracking */}
//           <div className="relative group cursor-pointer">
//             <div className="bg-purple-50 rounded-xl p-8 h-full relative overflow-hidden">
//               {/* Grid Pattern Background */}
//               <div 
//                 className="absolute inset-0 opacity-30"
//                 style={{
//                   backgroundImage: `
//                     linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
//                     linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
//                     linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
//                   `,
//                   backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
//                   backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
//                 }}
//               />
              
//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="mb-8">
//                   {/* Progress Notifications */}
//                   <div className="space-y-3 mb-6">
//                     <div className="bg-white rounded-lg p-3 shadow-sm text-right">
//                       <div className="text-xs text-gray-500">MacBook PRO</div>
//                       <div className="text-sm font-bold text-gray-900">50% ($2,500)</div>
//                       <div className="text-xs text-gray-400">Achieved this month</div>
//                     </div>
                    
//                     <div className="bg-white rounded-lg p-3 shadow-sm text-right">
//                       <div className="text-xs text-gray-500">Vacation Fund</div>
//                       <div className="text-sm font-bold text-gray-900">75% ($3,000)</div>
//                       <div className="text-xs text-gray-400">Achieved this month</div>
//                     </div>
//                   </div>
                  
//                   {/* Chart Area */}
//                   <div className="bg-white rounded-xl p-6 shadow-sm">
//                     <div className="flex justify-between items-start mb-6">
//                       <div>
//                         <div className="text-sm text-gray-500 mb-1">Emergency Fund</div>
//                         <div className="font-bold text-gray-900">100% ($10,000)</div>
//                         <div className="text-xs text-gray-500">Achieved this month</div>
//                       </div>
//                     </div>
                    
//                     <div className="h-24 relative">
//                       <svg className="w-full h-full" viewBox="0 0 300 80">
//                         <defs>
//                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                             <stop offset="0%" stopColor="#8b5cf6" />
//                             <stop offset="100%" stopColor="#a855f7" />
//                           </linearGradient>
//                         </defs>
//                         <path 
//                           d="M0,60 Q50,20 100,30 T200,25 T300,15" 
//                           stroke="url(#gradient)" 
//                           strokeWidth="3" 
//                           fill="none"
//                           className="drop-shadow-sm"
//                         />
//                         <circle cx="280" cy="18" r="3" fill="#8b5cf6" />
//                       </svg>
                      
//                       {/* Month labels */}
//                       <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
//                         <span>Jan</span>
//                         <span>Mar</span>
//                         <span>May</span>
//                         <span>Jul</span>
//                         <span>Sep</span>
//                         <span>Nov</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Goal Progress Tracking</h3>
//                 <p className="text-gray-600 text-sm">Watch your savings grow with real-time progress updates.</p>
//               </div>
              
//               {/* Hover Arrow */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
//                   <ArrowUpRight className="w-4 h-4 text-gray-700" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }