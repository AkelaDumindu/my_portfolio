import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './role.css';

const JobRole = () => {

    const [typeEffect] = useTypewriter({
        words: [' Fullstack Developer', ' Mobile Developer', ' Web Developer'],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 40
    });

    return (
        <div className='container p-0'>
            <h1 className='p-0 text-5xl leading-tight font-semibold lg:text-[40px] lg:leading-[1.15]'>
                a<span className='job-role-text'>{typeEffect}</span>
                <Cursor cursorColor="#00B5E2" /> {/* Customize cursor color if needed */}
            </h1>
        </div>
    );
}

export default JobRole;
