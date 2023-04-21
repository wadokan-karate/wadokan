

export default function Sidebar() {

    return (

        <div>
            <nav className="z-10 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-4 min-h-[auto] min-w-[4px] flex-col rounded-lg border">
                <a href='' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-xs font-medium">Upload Product</small>
                </a>
                <a href='' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap- rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-xs font-medium">Cosmetics </small>
                </a>
                <a href='' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-xs font-medium"> Soaps </small>
                </a>
                <a href='' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-xs font-medium"> Aromatherapy </small>
                </a>
                <a href='' className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50">
                    <small className="text-center text-xs font-medium"> Hair </small>
                </a>

            </nav>
        </div>
    )
}
