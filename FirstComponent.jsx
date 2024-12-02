import './Firstcomponent.css'

const string = "This is a text"
const number = 123456
const array = "React course, 4, 1.000.000"
const boolean = true
const funcion = () => 1 + 1
const object = { name: 'Javascript course', duration: 4 }
const date = new Date()

export const FirstComponent = () => {
    return (
        <>
            <h1>JSX Variables:</h1>
            <h4>String type variable:</h4> <p>{string}</p>
            <h4>Number type variable:</h4> <p>{number}</p>
            <h4>Array type variable:</h4> <p>{array}</p>
            <h4>Boolean type variable:</h4> <p>{boolean}</p>
            <h4>Function type variable:</h4> <p>{funcion()}</p>

            <div className='title-divisor'>
                <h1>
                    Positions practice:
                </h1>
            </div>
            <div className='text-N-test'>
                <p className='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br></br>
                    Sequi quae voluptatibus unde laudantium dolor perferendis animi saepe totam, quod corrupti aspernatur,
                    <br></br>
                    cum rerum, quidem deserunt! Sint officia distinctio repellendus nam!
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque iste, eveniet voluptatem, nobis minus esse minima exercitationem ut doloribus et beatae sed nam perferendis deserunt molestiae reiciendis quos molestias dolore!
                    <br></br>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <br></br>
                     Voluptatibus neque pariatur quae placeat esse fugiat! Atque commodi ipsam expedita numquam, blanditiis laudantium labore facere repellat itaque, aspernatur rem adipisci pariatur.
                </p>
            </div>
                <br></br>

        </>

    )
}
