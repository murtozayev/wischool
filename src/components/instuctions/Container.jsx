const Container = ({children, className, id}) => {
    return (
        <div id={id} className={className}>{children}</div>
    )
}

export default Container