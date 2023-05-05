import './Button.css'

export const Button = ({onPress, children}) => {
  return(
    <button className='Button' type='button' onClick={onPress}>{children}</button>
  )
}