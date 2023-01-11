import Link from '../components/Link'

const Subject = (props) => {
  if (props.activeSubject === props.index) {
    return (
      <li>
        <ul>
          {props.subject.links.map( (link, index) =>
          <Link link={link} key={index}/>
          )}
        </ul>
      </li>
    )
  } else return (
    <li onClick={props.handleActiveChange} value={props.index}>
      {props.subject.name}
    </li>
  )

}

export default Subject;