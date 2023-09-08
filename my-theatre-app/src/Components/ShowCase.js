const ShowCaseStyle = {
    margin: 50,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3b3b3b',
    padding: 12,
    borderRadius: 4,
    color: '#7e7e7e',
};

const listStyle = {
    margin: 12,
}

const seatStyle = {
    display: 'inline-block',
    backgroundColor: '#626262',
    width: 16,
    height: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    transition: 'transform 0.3s ease-in-out',

    position: 'relative',
    top: 1,
}

const seatSelectedStyle = {
    display: 'inline-block',
    width: 16,
    height: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    transition: 'transform 0.3s ease-in-out',

    position: 'relative',
    top: 1,
    backgroundColor: '#7bc47f',
}

const seatOccupiedStyle = {
    display: 'inline-block',
    width: 16,
    height: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    transition: 'transform 0.3s ease-in-out',

    position: 'relative',
    top: 1,
    backgroundColor: '#cfcfcf',
}
export const  ShowCase = () => {
    return (
      <ul style={ShowCaseStyle}>
        <li style={listStyle}>
          <span style={seatStyle} /> <small>N/A</small>
        </li>
        <li style={listStyle}>
          <span style={seatSelectedStyle} /> <small>Selected</small>
        </li>
        <li style={listStyle}>
          <span style={seatOccupiedStyle} /> <small>Occupied</small>
        </li>
      </ul>
    )
}