import { ClayInput } from '@clayui/form';
import ClayIcon from '@clayui/icon';

const Search = ({ onChange }) => {

  return (
    <div className="search position-relative mb-4">
      <ClayInput onChange={(e) => onChange(e.target.value)} className="bg-white" placeholder="Find a project" type="text" />
      <ClayIcon className="position-absolute" symbol="search" />
    </div>
  )
}

export default Search;

