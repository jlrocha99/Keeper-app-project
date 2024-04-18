
function Footer() {
    const date = new Date().getFullYear()

    return(
        <div>
            <footer className="text-center absolute w-screen bottom-0 h-10">
                <p className="text-slate-400">Copyright ⓒ {date}</p>
            </footer>
        </div>
    )
}

export default Footer