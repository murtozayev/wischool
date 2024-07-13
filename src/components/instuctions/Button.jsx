const Button = ({ children, className }) => {
    return (
        <button className={` bg-[green] hover:text-[green] hover:bg-white hover:border-[1px] transition hover:border-[green] text-white ${className} `}>
            {children}
        </button>
    )
}

export default Button