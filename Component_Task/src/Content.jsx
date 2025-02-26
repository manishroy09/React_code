
import './App.css'
import myimg from './images.jpeg'
const Content = ()=>{
    return (
        <>
        <div className='content'>
            <div>
            <h1>Manish Kumar</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta doloremque ducimus, autem eos sint.</p>
            </div>
            <div className='img'>
                <img src={myimg} alt="" height="400px"/>
            </div>
        </div>
        </>
    )
}

export default Content