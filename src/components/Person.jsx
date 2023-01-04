import React from 'react'
import PropTypes from 'prop-types'

const Person = (props) => {
  return (
    <div>
      <h3>My name is: {props.name}</h3>
      <h3>My email is: {props.email}</h3>
      <h3>My age is: {props.age}</h3>
      <h3>My Marriage is: {props.isMarriage ? <h2>Married</h2>: <h2>Not Married</h2>}</h3>
      <h3>My Friends are: {props.friends.map((friend) => <span>{friend} &nbsp;</span>)}</h3>
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarriage: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
}

export default Person
