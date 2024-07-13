const Links = ({ href, children, className }) => {
    return (
        <a className={` ${className} hover:translate-y-[-20%] transition `} href={href}>{children}</a>
    )
}

export default Links