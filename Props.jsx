export const Props = ({title, subtitle, text}) => {
console.log(title)
console.log(subtitle)
console.log(text)
    return(
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{text}</p>
        </>
    )
}