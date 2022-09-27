import './index.css'

const Countries = props => {
  const {countryDetails} = props
  const {id, capitalDisplayText} = countryDetails
  return (
    <option className="option-style" value={id}>
      {capitalDisplayText}
    </option>
  )
}
export default Countries
