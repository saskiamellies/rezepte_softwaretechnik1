
function SearchBar (props) {
  return (
  <textarea className="form-control" id="SearchBar" rows="3" placeholder="Bitte Zutaten eingeben"></textarea>
  );
}


function FilterDish () {
  return( 
  <div className="filter-container">
    <fieldset>
    <legend>Zusätzliche Filter:</legend>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="Vegan" />
      <label className="form-check-label" htmlFor="Vegan" >
      Vegan
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="LowCarb"/>
      <label className="form-check-label" htmlFor="LowCarb" >
      Low Carb
      </label>
    </div>
    </fieldset>
  </div>
  );
}


function InputDish (props) {
  return (
  <div className="input-container">
    <SearchBar />
    <FilterDish />
  </div>
  );
}

export default InputDish;