/* eslint-disable react/no-unknown-property */
import React from "react";
import { Avatar, Sidebar, Badge } from "flowbite-react";
import { Dropdown, Navbar,  } from "flowbite-react";
import Image from 'next/image'


export default function Dashboard() {
  return (
    <>
        <div className="flex flex-no-wrap">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-64 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
                <div>
                    <div className="h-16 w-full flex items-center px-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width={144} height={30} viewBox="0 0 144 30">
                            <path
                                fill="#5F7DF2"
                                d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"
                            />
                        </svg>
                    </div>
                    <ul className="mt-12">
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Dashboard</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                                <span className="text-sm  ml-2">Products</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                    <circle cx={12} cy={12} r={9} />
                                </svg>
                                <span className="text-sm  ml-2">Performance</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span className="text-sm  ml-2">Deliverables</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                                <span className="text-sm  ml-2">Invoices</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm  ml-2">Inventory</span>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="text-sm  ml-2">Settings</span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex items-center mt-48 mb-4 px-8">
                        <div className="w-10 h-10 bg-cover rounded-md mr-3">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Steve Doe</p>
                            <p className="text-gray-600 text-xs">View Profile</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 bg-indigo-800">
                    <ul className="w-full flex items-center justify-between ">
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                            </svg>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={3} y={4} width={18} height={4} rx={2} />
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                <line x1={10} y1={12} x2={14} y2={12} />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-600 mr-8 visible sm:hidden relative" onclick="dropdownHandler(this)">
                <ul className="p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden">
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="text-sm  ml-2">Dashboard</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm  ml-2">Products</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                            </svg>
                            <span className="text-sm  ml-2">Performance</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="7 8 3 12 7 16" />
                                <polyline points="17 8 21 12 17 16" />
                                <line x1={14} y1={4} x2={10} y2={20} />
                            </svg>
                            <span className="text-sm  ml-2">Deliverables</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm  ml-2">Invoices</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                <polyline points="4 12 12 16 20 12" />
                                <polyline points="4 16 12 20 20 16" />
                            </svg>
                            <span className="text-sm  ml-2">Inventory</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>
                            <span className="text-sm  ml-2">Settings</span>
                        </div>
                    </li>
                </ul>
                <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300"><main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
    <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
            <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
                <div className="flex items-center justify-center pt-6">
                    <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                        <defs>
                            <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                                <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%">
                                </stop>
                                <stop stopColor="#FF0057" offset="86.1354%">
                                </stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                            </path>
                            <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                            </circle>
                            <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                            </circle>
                        </g>
                    </svg>
                </div>
                <nav className="mt-6">
                    <div>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Dashboard
                            </span>
                        </a>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Projects
                            </span>
                        </a>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                My tasks
                            </span>
                        </a>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Calendar
                            </span>
                        </a>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" className="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Time manage
                            </span>
                        </a>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Reports
                            </span>
                        </a>
                        <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" fill="currentColor" height="20" className="w-5 h-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Settings
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
                <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div className="relative flex items-center w-full h-full lg:w-64 group">
                                <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
                                    <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <a href="#" className="relative block">
                                    <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                    <div className="flex flex-col flex-wrap sm:flex-row ">
                        <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="mb-4">
                                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                                <svg width="25" height="25" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                                    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4">
                                                    </path>
                                                    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853">
                                                    </path>
                                                    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05">
                                                    </path>
                                                    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335">
                                                    </path>
                                                </svg>
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="ml-2 font-bold text-black text-md dark:text-white">
                                                    Google
                                                </span>
                                                <span className="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Google Inc.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="p-1 border border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button className="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4 space-x-12">
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                            PROGRESS
                                        </span>
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                            HIGH PRIORITY
                                        </span>
                                    </div>
                                    <div className="block m-auto">
                                        <div>
                                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span className="font-bold text-gray-700 dark:text-white">
                                                    25
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start my-4 space-x-4">
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                            UI/UX
                                        </span>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy"/>
                                        </a>
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max"/>
                                        </a>
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles"/>
                                        </a>
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                                <svg width="25" height="25" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipRule="evenodd" fillRule="evenodd">
                                                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0">
                                                        </path>
                                                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d">
                                                        </path>
                                                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e">
                                                        </path>
                                                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="ml-2 font-bold text-black text-md dark:text-white">
                                                    Slack
                                                </span>
                                                <span className="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Slack corporation
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="p-1 border border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button className="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4 space-x-12">
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
                                            COMPLETED
                                        </span>
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                                            MEDIUM PRIORITY
                                        </span>
                                    </div>
                                    <div className="block m-auto">
                                        <div>
                                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span className="font-bold text-gray-700 dark:text-white">
                                                    50
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                            <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start my-4 space-x-4">
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                        <span className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
                                            ANDROID
                                        </span>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy"/>
                                        </a>
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max"/>
                                        </a>
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles"/>
                                        </a>
                                        <a href="#" className="">
                                            <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                                <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <p className="p-4 font-bold text-black text-md dark:text-white">
                                        My Tasks
                                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 dark:text-white">
                                            (05)
                                        </span>
                                    </p>
                                    <ul>
                                        <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    01
                                                </span>
                                                <span>
                                                    Create wireframe
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    02
                                                </span>
                                                <span>
                                                    Dashboard design
                                                </span>
                                                <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
                                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" className="ml-1" fill="currentColor" viewBox="0 0 384 512">
                                                        <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    03
                                                </span>
                                                <span>
                                                    Components card
                                                </span>
                                                <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
                                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    04
                                                </span>
                                                <span className="line-through">
                                                    Google logo design
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="mx-4 text-green-500">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    05
                                                </span>
                                                <span className="line-through">
                                                    Header navigation
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className="mx-4 text-green-500">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    06
                                                </span>
                                                <span>
                                                    International
                                                </span>
                                                <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
                                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" className="ml-1" fill="currentColor" viewBox="0 0 384 512">
                                                        <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li className="flex items-center justify-between py-3 text-gray-600 dark:text-gray-200">
                                            <div className="flex items-center justify-start text-sm">
                                                <span className="mx-4">
                                                    07
                                                </span>
                                                <span>
                                                    Production data
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" className="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-4 sm:ml-4 xl:mr-4">
                                <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-4">
                                        <p className="font-bold text-black text-md dark:text-white">
                                            Google
                                        </p>
                                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
                                        <p className="flex items-center text-xs dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" className="mr-2 text-blue-500" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                            Create wireframe
                                        </p>
                                        <div className="flex items-center">
                                            <span className="ml-2 mr-2 text-xs font-bold dark:text-gray-200 md:ml-4">
                                                25 min 20s
                                            </span>
                                            <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
                                                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                                                    <g fill="none">
                                                        <path d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                                        <p className="font-bold text-black text-md dark:text-white">
                                            Slack
                                        </p>
                                        <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                                        <p className="flex items-center text-xs dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                            International
                                        </p>
                                        <div className="flex items-center">
                                            <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                                                30 min
                                            </span>
                                            <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                                        <p className="flex items-center text-xs dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                            Slack logo design
                                        </p>
                                        <div className="flex items-center">
                                            <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                                                30 min
                                            </span>
                                            <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                                        <p className="flex items-center text-xs dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                            Dahboard template
                                        </p>
                                        <div className="flex items-center">
                                            <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                                                30 min
                                            </span>
                                            <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 xl:w-1/3">
                            <div className="mb-4">
                                <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <div className="flex flex-wrap overflow-hidden">
                                        <div className="w-full rounded shadow-sm">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-xl font-bold text-left text-black dark:text-white">
                                                    Dec 2021
                                                </div>
                                                <div className="flex space-x-4">
                                                    <button className="p-2 text-white bg-blue-500 rounded-full">
                                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <button className="p-2 text-white bg-blue-500 rounded-full">
                                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="-mx-2">
                                                <table className="w-full dark:text-white">
                                                    <tr>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            S
                                                        </th>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            M
                                                        </th>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            T
                                                        </th>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            W
                                                        </th>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            T
                                                        </th>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            F
                                                        </th>
                                                        <th className="px-2 py-3 md:px-3 ">
                                                            S
                                                        </th>
                                                    </tr>
                                                    <tr className="text-gray-400 dark:text-gray-500">
                                                        <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                            25
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                            26
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                            27
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                            28
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                            29
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                            30
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-gray-800 cursor-pointer md:px-3 hover:text-blue-500">
                                                            1
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            2
                                                        </td>
                                                        <td className="relative px-1 py-3 text-center cursor-pointer hover:text-blue-500">
                                                            3
                                                            <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-500 rounded-full left-1/2">
                                                            </span>
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            4
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            5
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            6
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            7
                                                        </td>
                                                        <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 lg:px-3 hover:text-blue-500">
                                                            8
                                                            <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-yellow-500 rounded-full left-1/2">
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            9
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            10
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            11
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            12
                                                        </td>
                                                        <td className="px-2 py-3 text-center text-white cursor-pointer md:px-3">
                                                            <span className="p-2 bg-blue-500 rounded-full">
                                                                13
                                                            </span>
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            14
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            15
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            16
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            17
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            18
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            19
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            20
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            21
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            22
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            23
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            24
                                                        </td>
                                                        <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            25
                                                            <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2">
                                                            </span>
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            26
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            27
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            28
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            29
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            30
                                                        </td>
                                                        <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                            31
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                    <p className="font-bold text-black text-md dark:text-white">
                                        Messages
                                    </p>
                                    <ul>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Charlie Rabiller
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    Hey John ! Do you read the NextJS doc ?
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/5.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Marie Lou
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    No I think the dog is better...
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Ivan Buck
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    Seriously ? haha Bob is not a child !
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-center my-6 space-x-2">
                                            <a href="#" className="relative block">
                                                <img alt="profil" src="/images/person/7.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div className="flex flex-col">
                                                <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                                                    Marina Farga
                                                </span>
                                                <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                    Do you need that design ?
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
            </div>
        </div>

    </>
  );
}
