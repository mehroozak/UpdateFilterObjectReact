import React, {component} from 'react'

class Filter extends Component {
  constructor(props) {
    super(Props);
    this.state = {
        baseData: [],
        filteredData: [],
        filters: {
        age: [],
        language: [],
        city: [],
        }
      }
  }
  
  // Function will check if the value already exists it will delete that value or add value if it doesnt exist in filter
  updateFilterParams (e) {
    e.preventDefault();
    const self = this;
    const {filters} = self.state;
    if (filters[e.target.name].find(val => val === e.target.value)) {
      self.setState({
        filters[e.target.name]: filters[e.target.name].filter(val => val !== e.target.value)
      });
    }else {
      self.setState({
        filters[e.target.name]: filters[e.target.name].push(e.target.value)
      });
    }
    // Values has been updated in filter object lets filter them by calling the filter function
    self.letsFilter();
  }
  
  // This Function Will return the new filteres array of objects 
  letsFilter() {
    const self = this;
    const {BaseData, filters} = self.state;
    const filterKeys = Object.keys(filters);
    const filteredData = BaseData.filter((item) => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
    self.setState({filteredData});
  }
}

render() {
return ()
}
