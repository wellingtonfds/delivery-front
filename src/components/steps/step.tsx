export function Step({ active = false }) {
    return (
        <span className={`inline-block w-4 h-4 rounded-medium border-none bg-slate-500 ${active ? 'opacity-4' : 'opacity-5'}`}></span>
    )
}