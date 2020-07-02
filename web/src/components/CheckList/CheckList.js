const CheckList = ({ list }) => {
  return (
    <ul>
      {list.map((listItem, itemIndex) => (
        <li key={itemIndex}>{listItem}</li>
      ))}
    </ul>
  )
}

export default CheckList
