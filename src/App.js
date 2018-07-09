import React, { Component } from 'react';
import Details from './App_Detail';
import { data } from './zodiacs'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';


//put data here
let date = [
  {
    "day": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16",
    "month": "Jan, Feb, Mar, April, May, June, July, August, Sept, Oct, Nov, Dec",
    "year": "1920, 1921, 1922, 1923"
  }
];

const DateList = ({date}) => {
  return (<div className="row">
    <div className="search_container">
      <h3 className="display_text">Find your zodiac animal!</h3>
      <h4 className="display_text">Please enter your date of birth</h4>

      {date.map((date) => {
        return <div className="align_center">
          <DayPickerInput onDayChange={day => console.log(day)} />

          <button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModal">
            Submit
          </button>

          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h3 class="modal-title" id="myModalLabel">You are a ....</h3>
                </div>
                <div class="modal-body">
                  <h4>Zodiac sign here</h4>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      })}
    </div>
  </div>);
};


// class DateList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (<div className="row">
//     <div className="search_container">
//       <h3 className="display_text">Find your zodiac animal!</h3>
//       <h4 className="display_text">Please enter your date of birth</h4>

//         {date.map((date) => {
//           return <form className="align_center" onSubmit={this.handleSubmit}>
//             <label><h4 class="button_text">Day</h4>
//               <select value={this.state.value} onChange={this.handleChange}>
//                 <option value="grapefruit">{date.day}</option>
//                 <option value="grapefruit">Grapefruit</option>
//                 <option value="lime">Lime</option>
//                 <option value="coconut">Coconut</option>
//                 <option value="mango">Mango</option>
//               </select>
//               </label>
//             <label><h4 class="button_text">Month</h4>
//               <select value={this.state.value} onChange={this.handleChange}>
//                 <option value="grapefruit">{date.month}</option>
//               </select>
//             </label>
//             <label><h4 class="button_text">Year</h4>
//               <select value={this.state.value} onChange={this.handleChange}>
//                 <option value="grapefruit">{date.year}</option>
//               </select>
//             </label>
//             <input type="submit" value="Submit" />
//           </form>
//         })}
//     </div>
//   </div>);
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_details: {}
    };
  }

  render() {
    let { current_details } = this.state;

    return (
      <body style ={ { backgroundImage: "url('/images/texture_p6.png')" } }>
        <div className="">
          <header className="header">
            <h3 className="display_text">Welcome to my chinese horoscope site demo!</h3>
          </header>
          <div className="container">

            {current_details.name && <Details
              item={current_details}
              onClose={() => {
                this.setState({
                  current_details: {}
                });
              }}
            />}

            {!current_details.name && <div className="row">
            <h2 className="display_text title_spacer">Please select a zodiac animal below</h2>
              {data.map((item) => {
                  return <a><div key={item.id} onClick={() => {
                    this.setState({
                      current_details: item
                    });
                  }} className="col-sm-2 col-xs-4">
                      <img className="img_effect responsive_img" alt="item_image" src={item.image} />
                      <h3 className="display_text">{item.name}</h3>
                  </div></a>
              })}
            </div>}
          </div>
          <DateList date={date} />
        </div>
      </body>
    );
  }
}

export default App;
