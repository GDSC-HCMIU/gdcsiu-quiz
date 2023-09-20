import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTING } from '../constants';

const TOPICS = [
  {
    id: 1,
    imgSrc: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/375052451_602603018751773_2038067975002769783_n.png?_nc_cat=107&ccb=1-7&_nc_sid=52f669&_nc_ohc=3_n_lph7hv8AX-wlxCb&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCjB3Lw7HphLOuqSPw8QjJxvQsBubDdgLTEa9r_anNzmg&oe=65105A78',
    title: 'Google Developer Student Clubs - HCMIU',
    description: 'Developer Student Clubs are university-based communities supported by Google Developers.',
    buttonName: 'More info',
    buttonType: 'more'
  },
  {
    id: 2,
    imgSrc: 'https://canopylab.com/wp-content/uploads/2023/01/Blog-Creating-multiple-choice-quizzes-with-the-CanopyLAB-Quiz-engine.jpg',
    title: 'GDSC Quizzes',
    description: 'Interactive with our question to improve your knowledge and make we understand each other quickly.',
    buttonName: 'Let\'s play',
    buttonType: 'quiz'
  },
  {
    id: 3,
    imgSrc: 'https://drive.google.com/uc?id=1dKUBFyugGP1pxje0Vfwh9fAV0NwL4F2L',
    title: 'Tech Tuesday',
    description: '"Tech Tuesday" news - a place to explore and experience the prosperity of the information technology industry.',
    buttonName: 'Explore',
    buttonType: 'tech'
  }
]

const Card = () => {
  const navigate = useNavigate();

  const btnClass = useMemo(() => {
    return 'h-10 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-xl font-medium uppercase text-white px-2 py-1 rounded-md my-1 '
  }, [])

  const handleNavigate = useCallback((page) => {
    switch (page) {
      case 'more': {
        navigate(ROUTING.INFO);
        return;
      }
      case 'quiz': {
        navigate(ROUTING.QUIZ);
        return;
      }
      case 'tech': {
        return;
      }
      default: {
        return;
      }
    }
  }, [navigate]);

  const Post = (props) => {
    const {
      imgSrc,
      title,
      description,
      buttonName,
      buttonType
    } = props
    return (
      <div className='border-solid border-1 border-black bg-zinc-200 rounded-xl max-sm:w-4/5 max-sm:mx-auto max-sm:mt-4'>
        <img className={`rounded-xl h-80 max-sm:object-fit max-sm:h-1/5 ${!buttonType === 'quiz' ? undefined : 'w-full'}`} src={imgSrc} />
        <div className='p-4'>
          <h2 className='font-semibold text-2xl mb-2'>{title}</h2>
          <p className={`text-base mt-1 mb-2`}>{description}</p>
          <button onClick={() => handleNavigate(buttonType)} className={btnClass}>
            {buttonName}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="md:mx-auto md:max-w-8xl md:flex-col md:grid md:grid-cols-3 md:gap-7 md:p-4">
      {TOPICS.map((topics) => {
        return (<Post {...topics} key={topics.id} />)
      })}
    </div>
  )
}

export default Card
