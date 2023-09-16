import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate('/home/info');
  };
  const handleQuiz = () => {
    navigate('/home/quiz');
  }
  const handleTechTuesday = () => {
    navigate('/home/techtuesday');
  }
  return (
    <div className='mx-auto max-w-8xl flex-col grid grid-cols-3 gap-7 p-4'>
        <div className='border-solid border-2 border-black bg-zinc-200 rounded-xl'>
          <div className='p-4'>
            <img className='border-solid border-2 border-black rounded h-80' src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/375052451_602603018751773_2038067975002769783_n.png?_nc_cat=107&ccb=1-7&_nc_sid=52f669&_nc_ohc=9aOj3FtOKWAAX8t1bk3&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCy2xBvyLwOoRM11bG7rNuep_weEXkhUC1feJAXUatjiA&oe=650A6BB8'/>
          </div>          <div className='p-4'>
               <h2 className='font-semibold text-2xl mb-2'>Google Developer Student Clubs - HCMIU</h2>
               <p className='text-base mt-1 mb-2'>Developer Student Clubs are university-based communities supported by Google Developers.</p>
               <button onClick={handleMoreInfo} className='h-10 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-xl font-medium uppercase text-white px-2 py-1 rounded-md my-1'>More Info</button>
          </div>
        </div>
        <div className='border-solid border-2 border-black bg-zinc-200 rounded-xl'>
          <div className='p-4'>
            <img className='border-solid border-2 border-black rounded-xl h-80 w-full' src='https://canopylab.com/wp-content/uploads/2023/01/Blog-Creating-multiple-choice-quizzes-with-the-CanopyLAB-Quiz-engine.jpg'/>
          </div>
          <div className='p-4'>
               <h2 className='font-semibold text-2xl mb-2'>GDSC Quizzes</h2>
               <p className='text-base mt-1 mb-8'>Interactive Questions to improve and test our understanding quickly.</p>
               <button onClick={handleQuiz} className='h-10 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-xl font-medium uppercase text-white px-2 py-1 rounded-md my-1'>Play</button>
          </div>
        </div>
        <div className='border-solid border-2 border-black bg-zinc-200 rounded-xl'>
          <div className='p-4'>
            <img className='border-solid border-2 border-black rounded-xl h-80 w-full' src='https://drive.google.com/uc?id=1dKUBFyugGP1pxje0Vfwh9fAV0NwL4F2L'/>
          </div>
          <div className='p-4'>
               <h2 className='font-semibold text-2xl mb-2'>Tech Tuesday</h2>
               <p className='text-base mt-1 mb-2'>"Tech Tuesday" news - a place to explore and experience the prosperity of the information technology industry.</p>
               <button onClick={handleTechTuesday} className='h-10 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-xl font-medium uppercase text-white px-2 py-1 rounded-md my-1'>More Info</button>
          </div>
        </div>
      </div>
  )
}

export default Card