import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './role.css';
const JobRole = () => {

    const [typeEffect] = useTypewriter({
        words: ['Akela Dumindu','a Fullstack Developer', 'a Mobile Developer', ],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
  return (
    <div className='container job-role mt-10'>
        <h1 className='text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]'>
            I am <span className='job-role-text'>{typeEffect}</span>
        </h1>
        
    </div>
  )
}

export default JobRole