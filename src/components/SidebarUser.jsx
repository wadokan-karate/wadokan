import { useState } from 'react';
import { Sidebar,  } from 'flowbite-react';

export default function SidebarUser() {
    return (
        <div>
            <nav className="flex w-64 px-6 h-screen shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-gray-500 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-15 min-h-[auto] min-w-[4px] flex-col rounded-lg border">
                <a href='/UploadProduct' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-white dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium">Categorias</small>
                </a>
                <a href='/AdminView/Cosmetics' className="flex aspect-square min-h-[40px] w-16 flex-col items-center justify-center gap- rounded-md p-1.5 bg-indigo-50 text-white dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium">Seguro médico</small>
                </a>
                <a href='/AdminView/Soap' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-white dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium"> Examenes de cinturón </small>
                </a>
                <a href='/AdminView/Aromatherapy' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-white dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium"> Licencias </small>
                </a>
                <a href='/AdminView/Hair' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-white dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium"> Inscripción campeonato IMD </small>
                </a>
                <a href='/AdminView/Hair' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-red-600 dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium"> Inscripiciones FAK </small>
                </a>
                <a href='/AdminView/Hair' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-white dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-l font-medium"> Derechos de imagen </small>
                </a>
            </nav>
        </div>
    )
}