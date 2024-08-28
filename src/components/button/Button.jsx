const Button = ({ name }) => {
  return (
    <div>
      <button
        className='w-[80vw] lg:w-40 py-[1em] px-[3em] border-none bg-blue-900 text-white cursor-pointer hover:bg-pink-600 hover:text-black hover:scale-1000'
        type='submit'
      >
        {name}
      </button>
    </div>
  )
}

export default Button
