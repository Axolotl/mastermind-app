import { colors } from './Colors';

const calculateCode = () => {
  //create an empty four length array populated with random whole numbers from 0 to colors length
  //map over it and replace it with items from colors using the random numbers and index

  return [...Array(4)].map(() => Math.floor(Math.random() * colors.length)).map(i => colors[i])
}

export default calculateCode;